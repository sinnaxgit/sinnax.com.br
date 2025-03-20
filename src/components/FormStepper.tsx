
import React from 'react';
import { useForm } from '../contexts/FormContext';

interface StepperProps {
  totalSteps: number;
}

const FormStepper: React.FC<StepperProps> = ({ totalSteps }) => {
  const { currentStep, setStep } = useForm();
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <React.Fragment key={stepNumber}>
              {/* Step circle */}
              <button
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-white scale-110' 
                    : isCompleted 
                      ? 'bg-secondary text-white' 
                      : 'bg-muted text-muted-foreground'
                }`}
                onClick={() => stepNumber < currentStep && setStep(stepNumber)}
                disabled={stepNumber > currentStep}
                aria-current={isActive ? 'step' : undefined}
              >
                {stepNumber}
              </button>
              
              {/* Connector line */}
              {stepNumber < totalSteps && (
                <div className="flex-1 mx-2">
                  <div
                    className={`h-1 rounded-full ${
                      stepNumber < currentStep ? 'bg-secondary' : 'bg-muted'
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FormStepper;
