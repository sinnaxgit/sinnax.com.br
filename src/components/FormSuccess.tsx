
import React from 'react';
import { useForm } from '../contexts/FormContext';
import { CheckCircle } from 'lucide-react';

const FormSuccess: React.FC = () => {
  const { resetForm } = useForm();

  return (
    <div className="text-center animate-fade-in">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="w-20 h-20 text-accent" />
      </div>
      
      <h2 className="text-3xl font-bold mb-4 text-gradient">Obrigado por preencher!</h2>
      
      <p className="text-lg mb-8">
        Nossa equipe analisará suas respostas e entrará em contato em breve para discutir como podemos 
        criar o site perfeito para você!
      </p>
      
      <div className="p-6 bg-muted/50 rounded-lg mb-8">
        <h3 className="font-semibold mb-2">Próximos passos:</h3>
        <ul className="text-left space-y-2">
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 bg-primary rounded-full mr-2 mt-1 flex-shrink-0"></span>
            <span>Analisaremos suas necessidades e criaremos uma proposta personalizada</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 bg-primary rounded-full mr-2 mt-1 flex-shrink-0"></span>
            <span>Entraremos em contato em até 48 horas úteis</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 bg-primary rounded-full mr-2 mt-1 flex-shrink-0"></span>
            <span>Após aprovação, começaremos a desenvolver seu site imediatamente</span>
          </li>
        </ul>
      </div>
      
      <button
        onClick={resetForm}
        className="button-secondary"
      >
        Preencher novamente
      </button>
    </div>
  );
};

export default FormSuccess;
