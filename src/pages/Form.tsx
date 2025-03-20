
import React from 'react';
import { FormProvider } from '../contexts/FormContext';
import FormContainer from '../components/FormContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow py-12">
        <div className="sinnax-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Precisando de um site?</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Criamos o seu por um preço simbólico!
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Estamos expandindo nosso portfólio e, por isso, estamos oferecendo 
              sites profissionais por um preço extremamente abaixo do mercado! 
              Essa é a sua chance de ter um site moderno e funcional por um valor 
              simbólico, enquanto aprimoramos nosso trabalho e criamos cases de sucesso.
            </p>
            
            <div className="mt-8 mb-4">
              <h3 className="text-xl font-semibold">
                Se interessou? Preencha o formulário abaixo e entraremos em contato com uma proposta personalizada para você!
              </h3>
            </div>
          </div>
          
          <FormProvider>
            <FormContainer />
          </FormProvider>
        </div>
      </main>
      
    </div>
  );
};

export default Index;
