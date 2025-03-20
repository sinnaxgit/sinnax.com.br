
import React from 'react';
import { useForm, BusinessArea } from '../contexts/FormContext';

const businessAreas: BusinessArea[] = [
  'Serviços',
  'E-commerce',
  'Educação',
  'Tecnologia',
  'Saúde',
  'Outro'
];

const FormStep1: React.FC = () => {
  const { formData, updateFormData, nextStep } = useForm();
  const [otherBusinessArea, setOtherBusinessArea] = React.useState(
    formData.businessArea !== '' && !businessAreas.includes(formData.businessArea as BusinessArea) 
      ? formData.businessArea 
      : ''
  );

  const handleBusinessAreaChange = (area: BusinessArea | 'Outro') => {
    if (area === 'Outro') {
      updateFormData({ businessArea: otherBusinessArea || 'Outro' });
    } else {
      updateFormData({ businessArea: area });
      setOtherBusinessArea('');
    }
  };

  const handleOtherAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherBusinessArea(e.target.value);
    updateFormData({ businessArea: e.target.value || 'Outro' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  // Check if "Outro" is selected or if a custom value is entered
  const isOtherSelected = formData.businessArea === 'Outro' || 
                         (formData.businessArea !== '' && 
                          !businessAreas.includes(formData.businessArea as BusinessArea));

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gradient">1️⃣ Sobre sua empresa</h2>
      
      <div className="form-field">
        <label htmlFor="companyName" className="block mb-2 font-medium">
          📌 Nome da empresa:
        </label>
        <input
          type="text"
          id="companyName"
          value={formData.companyName}
          onChange={(e) => updateFormData({ companyName: e.target.value })}
          className="form-input"
          placeholder="Digite o nome da sua empresa"
          required
        />
      </div>

      <div className="form-field">
        <label className="block mb-2 font-medium">
          📌 Qual é o ramo de atuação?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {businessAreas.map((area) => (
            <div
              key={area}
              className={`checkbox-container ${
                area === 'Outro' ? (isOtherSelected ? 'selected' : '') : formData.businessArea === area ? 'selected' : ''
              }`}
              onClick={() => handleBusinessAreaChange(area)}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full mr-2 border ${
                  area === 'Outro' ? (isOtherSelected ? 'bg-primary border-primary' : 'border-muted-foreground') : 
                  formData.businessArea === area ? 'bg-primary border-primary' : 'border-muted-foreground'
                } flex items-center justify-center`}>
                  {(area === 'Outro' && isOtherSelected) || 
                   (area !== 'Outro' && formData.businessArea === area) ? (
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  ) : null}
                </div>
                <span>{area}</span>
              </div>
            </div>
          ))}
        </div>
        
        {isOtherSelected ? (
          <div className="mt-3">
            <input
              type="text"
              value={otherBusinessArea}
              onChange={handleOtherAreaChange}
              className="form-input"
              placeholder="Especifique o ramo de atuação"
              required
            />
          </div>
        ) : null}
      </div>

      <div className="flex justify-end mt-8">
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

export default FormStep1;
