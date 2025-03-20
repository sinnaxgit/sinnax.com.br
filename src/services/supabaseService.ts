
import { supabase } from '@/integrations/supabase/client';

export interface LeadFormData {
  company_name: string;
  business_area: string;
  site_types: string[];
  other_site_type?: string;
  features: string[];
  other_feature?: string;
  budget: string;
  timeline: string;
  full_name: string;
  email: string;
  whatsapp: string;
}

export const submitFormToSupabase = async (formData: LeadFormData) => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([formData]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting to Supabase:', error);
    return { success: false, error };
  }
};
