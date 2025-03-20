
import React from 'react';
import { useForm } from '../contexts/FormContext';
import FormStepper from './FormStepper';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormSuccess from './FormSuccess';

const FormContainer: React.FC = () => {
  const { currentStep, isSubmitted } = useForm();
  
  // If form is submitted, show success message
  if (isSubmitted) {
    return (
      <div className="sinnax-card">
        <FormSuccess />
      </div>
    );
  }
  
  return (
    <div className="sinnax-card">
      <FormStepper totalSteps={4} />
      
      {currentStep === 1 && <FormStep1 />}
      {currentStep === 2 && <FormStep2 />}
      {currentStep === 3 && <FormStep3 />}
      {currentStep === 4 && <FormStep4 />}
    </div>
  );
};

export default FormContainer;
