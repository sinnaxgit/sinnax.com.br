import React, { useState } from 'react';
import { useForm } from '../contexts/FormContext';
import { LeadFormData, submitFormToSupabase } from '../services/supabaseService';
import { useToast } from '@/hooks/use-toast';

const FormStep4: React.FC = () => {
  const { formData, updateFormData, prevStep, setIsSubmitting, setIsSubmitted } = useForm();
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    whatsapp: false
  });
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateWhatsApp = (whatsapp: string) => {
    // Remove non-numeric characters
    const digitsOnly = whatsapp.replace(/\D/g, '');
    return digitsOnly.length >= 10; // Minimum 10 digits (DDD + number)
  };

  const formatWhatsApp = (input: string) => {
    // Remove non-numeric characters
    const digitsOnly = input.replace(/\D/g, '');
    
    if (digitsOnly.length <= 2) {
      return digitsOnly;
    } else if (digitsOnly.length <= 7) {
      return `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2)}`;
    } else {
      return `(${digitsOnly.slice(0, 2)}) ${digitsOnly.slice(2, 7)}-${digitsOnly.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    updateFormData({ whatsapp: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate fields
    const newErrors = {
      fullName: formData.fullName.trim() === '',
      email: !validateEmail(formData.email),
      whatsapp: !validateWhatsApp(formData.whatsapp)
    };
    
    setErrors(newErrors);
    
    if (newErrors.fullName || newErrors.email || newErrors.whatsapp) {
      return;
    }
    
    // Prepare data for Supabase
    const supabaseData: LeadFormData = {
      company_name: formData.companyName,
      business_area: formData.businessArea,
      site_types: formData.siteTypes,
      other_site_type: formData.otherSiteType,
      features: formData.features,
      other_feature: formData.otherFeature,
      budget: formData.budget,
      timeline: formData.timeline,
      full_name: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp
    };
    
    setIsSubmitting(true);
    
    try {
      const result = await submitFormToSupabase(supabaseData);
      
      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Entraremos em contato em breve.",
        });
      } else {
        throw new Error('Falha ao enviar o formulário');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente em alguns instantes.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gradient">4️⃣ Contato</h2>
      
      <div className="form-field">
        <label htmlFor="fullName" className="block mb-2 font-medium">
          📌 Seu nome:
        </label>
        <input
          type="text"
          id="fullName"
          value={formData.fullName}
          onChange={(e) => updateFormData({ fullName: e.target.value })}
          className={`form-input ${errors.fullName ? 'border-destructive' : ''}`}
          placeholder="Digite seu nome completo"
          required
        />
        {errors.fullName && (
          <p className="text-destructive text-sm mt-1">Nome é obrigatório</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="email" className="block mb-2 font-medium">
          📌 Seu e-mail:
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className={`form-input ${errors.email ? 'border-destructive' : ''}`}
          placeholder="Digite seu e-mail para contato"
          required
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">E-mail inválido</p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="whatsapp" className="block mb-2 font-medium">
          📌 Seu WhatsApp:
        </label>
        <input
          type="tel"
          id="whatsapp"
          value={formData.whatsapp}
          onChange={handleWhatsAppChange}
          className={`form-input ${errors.whatsapp ? 'border-destructive' : ''}`}
          placeholder="(00) 00000-0000"
          required
        />
        {errors.whatsapp && (
          <p className="text-destructive text-sm mt-1">WhatsApp inválido</p>
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
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormStep4;
