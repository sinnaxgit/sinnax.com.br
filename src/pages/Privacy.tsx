import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black border-b border-white/10">
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
              <Shield className="h-10 w-10 text-purple-500 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                  Política de Privacidade
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
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg prose-invert"
            {...fadeIn}
          >
            <div className="bg-black/90 p-8 rounded-lg mb-12 border border-white/10 hover:border-gray-600 transition-all duration-300">
              <p className="text-gray-300 mb-0">
                A Sinnax está comprometida em proteger sua privacidade. Esta Política de Privacidade 
                explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais 
                quando você visita nosso site ou utiliza nossos serviços.
              </p>
            </div>
            
            <h2>1. Informações que Coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações pessoais:
            </p>
            <ul>
              <li>
                <strong>Informações de Identificação:</strong> Nome, endereço de e-mail, número de telefone, 
                endereço postal e outras informações semelhantes.
              </li>
              <li>
                <strong>Informações de Uso:</strong> Como você interage com nosso site, incluindo as páginas 
                que você visita, o tempo gasto no site, os links clicados e outras ações realizadas no site.
              </li>
              <li>
                <strong>Informações do Dispositivo:</strong> Tipo de dispositivo, sistema operacional, 
                tipo de navegador, endereço IP e outras informações técnicas.
              </li>
              <li>
                <strong>Informações de Comunicação:</strong> Quando você se comunica conosco por e-mail, 
                formulário de contato ou outros meios, podemos coletar e armazenar essas comunicações.
              </li>
            </ul>
            
            <h2>2. Como Usamos Suas Informações</h2>
            <p>
              Usamos suas informações pessoais para os seguintes fins:
            </p>
            <ul>
              <li>Fornecer, manter e melhorar nossos serviços.</li>
              <li>Processar e responder às suas solicitações, perguntas e comentários.</li>
              <li>Enviar informações sobre nossos serviços, atualizações e promoções (com seu consentimento).</li>
              <li>Personalizar sua experiência em nosso site.</li>
              <li>Analisar como nosso site é usado para melhorar nossos serviços.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Proteger nossos direitos, propriedade ou segurança, e os direitos, propriedade ou segurança de nossos usuários ou outros.</li>
            </ul>
            
            <h2>3. Compartilhamento de Informações</h2>
            <p>
              Podemos compartilhar suas informações pessoais nas seguintes circunstâncias:
            </p>
            <ul>
              <li>
                <strong>Prestadores de Serviços:</strong> Podemos compartilhar suas informações com terceiros 
                que prestam serviços em nosso nome, como hospedagem de sites, análise de dados, processamento 
                de pagamentos e atendimento ao cliente.
              </li>
              <li>
                <strong>Conformidade Legal:</strong> Podemos divulgar suas informações quando acreditarmos, 
                de boa fé, que a divulgação é necessária para cumprir a lei, uma ordem judicial ou intimação, 
                ou para proteger os direitos, propriedade ou segurança da Sinnax, nossos usuários ou outros.
              </li>
              <li>
                <strong>Transferências de Negócios:</strong> Se a Sinnax estiver envolvida em uma fusão, 
                aquisição ou venda de todos ou parte de seus ativos, suas informações pessoais podem ser 
                transferidas como parte desse acordo.
              </li>
              <li>
                <strong>Com Seu Consentimento:</strong> Podemos compartilhar suas informações com terceiros 
                quando você nos der consentimento para fazê-lo.
              </li>
            </ul>
            
            <h2>4. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Nosso site usa cookies e tecnologias semelhantes para coletar informações sobre suas atividades 
              de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você 
              visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de maneira mais 
              eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
            <p>
              Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para 
              alertá-lo quando os sites definem ou acessam cookies. Se você desativar ou recusar cookies, 
              observe que algumas partes deste site podem se tornar inacessíveis ou não funcionar corretamente.
            </p>
            
            <h2>5. Segurança de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas 
              informações pessoais contra perda acidental, uso não autorizado, acesso, divulgação, alteração 
              e destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento 
              eletrônico é 100% seguro, e não podemos garantir sua segurança absoluta.
            </p>
            
            <h2>6. Seus Direitos</h2>
            <p>
              Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, 
              incluindo:
            </p>
            <ul>
              <li>O direito de acessar, corrigir ou excluir suas informações pessoais.</li>
              <li>O direito de restringir ou se opor ao processamento de suas informações pessoais.</li>
              <li>O direito à portabilidade de dados.</li>
              <li>O direito de retirar o consentimento a qualquer momento (quando o processamento é baseado no consentimento).</li>
              <li>O direito de apresentar uma reclamação a uma autoridade de proteção de dados.</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, entre em contato conosco usando as informações fornecidas 
              na seção "Como Entrar em Contato Conosco" abaixo.
            </p>
            
            <h2>7. Retenção de Dados</h2>
            <p>
              Retemos suas informações pessoais pelo tempo necessário para cumprir os fins descritos nesta 
              Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido 
              por lei.
            </p>
            
            <h2>8. Alterações a Esta Política de Privacidade</h2>
            <p>
              Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão atualizada será 
              indicada pela data de "Última atualização" no topo desta página. Recomendamos que você revise 
              esta Política de Privacidade periodicamente para se manter informado sobre como estamos protegendo 
              suas informações.
            </p>
            
            <h2>9. Como Entrar em Contato Conosco</h2>
            <p>
              Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou nossas práticas 
              de privacidade, entre em contato conosco em:
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:privacidade@sinnax.com" className="text-purple-400 hover:text-purple-300">privacidade@sinnax.com</a><br />
              <strong>Telefone:</strong> +55 (11) 99999-9999<br />
              <strong>Endereço:</strong> Av. Paulista, 1000, São Paulo, SP - Brasil, CEP: 01310-100
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Ainda tem dúvidas sobre nossa política de privacidade?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Entre em contato conosco para esclarecer qualquer questão relacionada à privacidade 
              e proteção de dados.
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

export default Privacy;
