
import React from 'react';
import { useForm, Budget, Timeline } from '../contexts/FormContext';

const budgetOptions: Budget[] = [
  'Até R$ 500',
  'R$ 500 - R$ 1.000',
  'R$ 1.000 - R$ 2.000',
  'Acima de R$ 2.000'
];

const timelineOptions: Timeline[] = [
  'O mais rápido possível (até 7 dias)',
  'Dentro de 2 a 4 semanas',
  'Sem pressa, quero algo bem elaborado'
];

const FormStep3: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();
  const [customBudget, setCustomBudget] = React.useState('');

  const handleBudgetChange = (value: Budget | 'Outro') => {
    updateFormData({ budget: value === 'Outro' ? customBudget || 'Outro valor' : value });
  };

  const handleCustomBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomBudget(e.target.value);
    updateFormData({ budget: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gradient">3️⃣ Orçamento e prazo</h2>
      
      <div className="form-field">
        <label className="block mb-2 font-medium">
          📌 O valor do projeto depende do prazo, funcionalidades e otimização do site.
          com isso em mente, qual é o investimento pretendido para que possamos apresentar propostas adequadas ao seu orçamento?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {budgetOptions.map((option) => (
            <div
              key={option}
              className={`checkbox-container ${formData.budget === option ? 'selected' : ''}`}
              onClick={() => handleBudgetChange(option)}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full mr-2 border ${formData.budget === option ? 'bg-primary border-primary' : 'border-muted-foreground'} flex items-center justify-center`}>
                  {formData.budget === option && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <input
            type="text"
            value={customBudget}
            onChange={handleCustomBudgetChange}
            className="form-input"
            placeholder="Ou especifique outro valor"
          />
        </div>
      </div>

      <div className="form-field mt-8">
        <label className="block mb-2 font-medium">
          📌 Para quando você precisa do site?
        </label>
        <div className="grid grid-cols-1 gap-3">
          {timelineOptions.map((option) => (
            <div
              key={option}
              className={`checkbox-container ${formData.timeline === option ? 'selected' : ''}`}
              onClick={() => updateFormData({ timeline: option })}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full mr-2 border ${formData.timeline === option ? 'bg-primary border-primary' : 'border-muted-foreground'} flex items-center justify-center`}>
                  {formData.timeline === option && (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          className="button-secondary"
        >
          Voltar
        </button>
        <button
          type="submit"
          className="button-primary"
        >
          Próximo
        </button>
      </div>
    </form>
  );
};

export default FormStep3;
