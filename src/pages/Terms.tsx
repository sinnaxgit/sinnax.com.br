import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const Terms = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para a página inicial
          </Link>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <FileText className="h-10 w-10 text-purple-500 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                  Termos de Uso
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Última atualização: 01 de Junho de 2023
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg prose-invert"
            {...fadeIn}
          >
            <div className="bg-black p-8 rounded-lg mb-12 border border-white/10">
              <p className="text-gray-300 mb-0">
                Bem-vindo ao site da Sinnax. Ao acessar e usar este site, você concorda em cumprir 
                e estar vinculado aos seguintes termos e condições de uso. Por favor, leia estes 
                termos cuidadosamente antes de acessar ou usar nosso site.
              </p>
            </div>
            
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou usar o site da Sinnax, você concorda em ficar vinculado a estes Termos de Uso, 
              todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de 
              quaisquer leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido 
              de usar ou acessar este site.
            </p>
            
            <h2>2. Uso do Site</h2>
            <p>
              O conteúdo deste site é fornecido apenas para fins informativos. A Sinnax reserva-se o direito 
              de modificar, suspender ou descontinuar, temporária ou permanentemente, o site ou qualquer 
              parte dele, com ou sem aviso prévio. Não seremos responsáveis perante você ou terceiros por 
              qualquer modificação, suspensão ou descontinuação do site.
            </p>
            <p>
              Você concorda em usar o site apenas para fins legais e de maneira que não infrinja os direitos 
              de, restrinja ou iniba o uso e aproveitamento do site por qualquer terceiro.
            </p>
            
            <h2>3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo incluído ou disponível através deste site, incluindo, mas não se limitando a, 
              texto, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações 
              de dados e software, é propriedade da Sinnax ou de seus fornecedores de conteúdo e está protegido 
              por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
            </p>
            <p>
              Você não pode modificar, reproduzir, exibir publicamente, distribuir ou usar o conteúdo deste 
              site para qualquer finalidade comercial sem o consentimento prévio por escrito da Sinnax.
            </p>
            
            <h2>4. Contas de Usuário</h2>
            <p>
              Alguns serviços ou recursos disponíveis neste site podem exigir que você crie uma conta. 
              Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o 
              acesso ao seu computador, e concorda em aceitar a responsabilidade por todas as atividades 
              que ocorram sob sua conta ou senha.
            </p>
            <p>
              A Sinnax reserva-se o direito de recusar serviço, encerrar contas, remover ou editar conteúdo, 
              ou cancelar pedidos a seu exclusivo critério.
            </p>
            
            <h2>5. Links para Sites de Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros que não são de propriedade ou controlados 
              pela Sinnax. A Sinnax não tem controle e não assume nenhuma responsabilidade pelo conteúdo, 
              políticas de privacidade ou práticas de quaisquer sites de terceiros.
            </p>
            <p>
              Você reconhece e concorda que a Sinnax não será responsável, direta ou indiretamente, por 
              qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou confiança 
              em qualquer conteúdo, bens ou serviços disponíveis em ou através de tais sites.
            </p>
            
            <h2>6. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Sinnax, seus diretores, funcionários, agentes, parceiros ou 
              fornecedores serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, 
              consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade 
              ou outras perdas intangíveis, resultantes de:
            </p>
            <ol>
              <li>Seu acesso ou uso ou incapacidade de acessar ou usar o site;</li>
              <li>Qualquer conduta ou conteúdo de terceiros no site;</li>
              <li>Qualquer conteúdo obtido do site; e</li>
              <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo.</li>
            </ol>
            
            <h2>7. Indenização</h2>
            <p>
              Você concorda em indenizar, defender e isentar a Sinnax, suas subsidiárias, afiliadas, parceiros, 
              funcionários, diretores, agentes, contratados e licenciadores de e contra quaisquer reclamações, 
              danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas (incluindo, mas não 
              se limitando a honorários advocatícios) decorrentes de:
            </p>
            <ol>
              <li>Seu uso e acesso ao site;</li>
              <li>Sua violação de qualquer termo destes Termos de Uso;</li>
              <li>Sua violação de qualquer direito de terceiros, incluindo, sem limitação, qualquer direito 
                autoral, propriedade ou direito de privacidade; ou</li>
              <li>Qualquer reclamação de que seu conteúdo causou danos a terceiros.</li>
            </ol>
            
            <h2>8. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso e quaisquer disputas ou reclamações decorrentes de ou relacionadas a eles 
              ou seu objeto ou formação (incluindo disputas ou reclamações não contratuais) serão regidos e 
              interpretados de acordo com as leis do Brasil.
            </p>
            
            <h2>9. Alterações a Estes Termos</h2>
            <p>
              A Sinnax reserva-se o direito, a seu exclusivo critério, de modificar ou substituir estes 
              Termos de Uso a qualquer momento. Se uma revisão for material, tentaremos fornecer um aviso 
              com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.
            </p>
            <p>
              Ao continuar a acessar ou usar nosso site após essas revisões se tornarem efetivas, você 
              concorda em ficar vinculado aos termos revisados. Se você não concordar com os novos termos, 
              por favor, pare de usar o site.
            </p>
            
            <h2>10. Como Entrar em Contato Conosco</h2>
            <p>
              Se você tiver alguma dúvida ou preocupação sobre estes Termos de Uso, entre em contato conosco em:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:termos@sinnax.com" className="text-purple-400 hover:text-purple-300">termos@sinnax.com</a><br />
              <strong>Telefone:</strong> +55 (11) 99999-9999<br />
              <strong>Endereço:</strong> Av. Paulista, 1000, São Paulo, SP - Brasil, CEP: 01310-100
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Ainda tem dúvidas sobre nossos termos de uso?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Entre em contato conosco para esclarecer qualquer questão relacionada aos nossos 
              termos e condições.
            </p>
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
