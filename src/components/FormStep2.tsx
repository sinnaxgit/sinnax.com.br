
import React from 'react';
import { useForm, SiteType, Feature } from '../contexts/FormContext';
import { Check } from 'lucide-react';

const siteTypes: SiteType[] = [
  'Site Institucional',
  'Loja Virtual (E-commerce)',
  'Landing Page',
  'Blog',
  'Não sei dizer',
  'Outro'
];

const features: Feature[] = [
  'Área de Login para clientes',
  'Integração com redes sociais',
  'Formulário de contato',
  'Chat online',
  'Blog ou portfólio',
  'Outro'
];

const FormStep2: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useForm();
  const [otherSiteType, setOtherSiteType] = React.useState(formData.otherSiteType || '');
  const [otherFeature, setOtherFeature] = React.useState(formData.otherFeature || '');

  const handleSiteTypeToggle = (type: SiteType) => {
    const updatedTypes = formData.siteTypes.includes(type)
      ? formData.siteTypes.filter(t => t !== type)
      : [...formData.siteTypes, type];
    
    updateFormData({ siteTypes: updatedTypes });
    
    // Se "Outro" for desmarcado, limpe o campo de texto
    if (type === 'Outro' && !updatedTypes.includes('Outro')) {
      setOtherSiteType('');
      updateFormData({ otherSiteType: '' });
    }
  };

  const handleFeatureToggle = (feature: Feature) => {
    const updatedFeatures = formData.features.includes(feature)
      ? formData.features.filter(f => f !== feature)
      : [...formData.features, feature];
    
    updateFormData({ features: updatedFeatures });
    
    // Se "Outro" for desmarcado, limpe o campo de texto
    if (feature === 'Outro' && !updatedFeatures.includes('Outro')) {
      setOtherFeature('');
      updateFormData({ otherFeature: '' });
    }
  };

  const handleOtherSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherSiteType(e.target.value);
    updateFormData({ otherSiteType: e.target.value });
  };

  const handleOtherFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherFeature(e.target.value);
    updateFormData({ otherFeature: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gradient">2️⃣ O que você espera do site?</h2>
      
      <div className="form-field">
        <label className="block mb-2 font-medium">
          📌 Quais tipos de site te interessam?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {siteTypes.map((type) => (
            <div
              key={type}
              className={`checkbox-container ${formData.siteTypes.includes(type) ? 'selected' : ''}`}
              onClick={() => handleSiteTypeToggle(type)}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded border ${formData.siteTypes.includes(type) ? 'bg-primary border-primary' : 'border-muted-foreground'} flex items-center justify-center`}>
                  {formData.siteTypes.includes(type) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="ml-2">{type}</span>
              </div>
            </div>
          ))}
        </div>
        
        {formData.siteTypes.includes('Outro') && (
          <div className="mt-3">
            <input
              type="text"
              value={otherSiteType}
              onChange={handleOtherSiteTypeChange}
              className="form-input"
              placeholder="Especifique o tipo de site"
              required
            />
          </div>
        )}
      </div>

      <div className="form-field mt-8">
        <label className="block mb-2 font-medium">
          📌 Qual funcionalidade é essencial para você?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className={`checkbox-container ${formData.features.includes(feature) ? 'selected' : ''}`}
              onClick={() => handleFeatureToggle(feature)}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded border ${formData.features.includes(feature) ? 'bg-primary border-primary' : 'border-muted-foreground'} flex items-center justify-center`}>
                  {formData.features.includes(feature) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="ml-2">{feature}</span>
              </div>
            </div>
          ))}
        </div>
        
        {formData.features.includes('Outro') && (
          <div className="mt-3">
            <input
              type="text"
              value={otherFeature}
              onChange={handleOtherFeatureChange}
              className="form-input"
              placeholder="Especifique a funcionalidade"
              required
            />
          </div>
        )}
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

export default FormStep2;
