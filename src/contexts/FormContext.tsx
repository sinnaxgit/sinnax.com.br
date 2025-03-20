
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type BusinessArea = 'Serviços' | 'E-commerce' | 'Educação' | 'Tecnologia' | 'Saúde' | 'Outro';
export type SiteType = 'Site Institucional' | 'Loja Virtual (E-commerce)' | 'Landing Page' | 'Blog' | 'Não sei dizer' | 'Outro';
export type Feature = 'Área de Login para clientes' | 'Integração com redes sociais' | 'Formulário de contato' | 'Chat online' | 'Blog ou portfólio' | 'Outro';
export type Budget = 'Até R$ 500' | 'R$ 500 - R$ 1.000' | 'R$ 1.000 - R$ 2.000' | 'Acima de R$ 2.000';
export type Timeline = 'O mais rápido possível (até 7 dias)' | 'Dentro de 2 a 4 semanas' | 'Sem pressa, quero algo bem elaborado';

interface FormData {
  // Etapa 1: Sobre sua empresa
  companyName: string;
  businessArea: BusinessArea | string;
  
  // Etapa 2: O que você espera do site
  siteTypes: SiteType[];
  otherSiteType?: string;
  features: Feature[];
  otherFeature?: string;
  
  // Etapa 3: Orçamento e prazo
  budget: Budget | string;
  timeline: Timeline;
  
  // Etapa 4: Contato
  fullName: string;
  email: string;
  whatsapp: string;
}

interface FormContextType {
  formData: FormData;
  currentStep: number;
  updateFormData: (newData: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetForm: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  isSubmitted: boolean;
  setIsSubmitted: (value: boolean) => void;
}

const initialFormData: FormData = {
  companyName: '',
  businessArea: '',
  siteTypes: [],
  features: [],
  budget: '',
  timeline: 'Dentro de 2 a 4 semanas',
  fullName: '',
  email: '',
  whatsapp: '',
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const setStep = (step: number) => setCurrentStep(step);
  
  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        currentStep,
        updateFormData,
        nextStep,
        prevStep,
        setStep,
        resetForm,
        isSubmitting,
        setIsSubmitting,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
