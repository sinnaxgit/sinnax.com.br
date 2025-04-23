import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: false });

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          service: formData.service,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setFormStatus({ submitted: true, submitting: false, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitted: false, submitting: false, error: true });
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { value: 'web', label: 'Desenvolvimento Web' },
    { value: 'mobile', label: 'Aplicativos Mobile' },
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'dashboard', label: 'Dashboards' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'other', label: 'Outro' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black/95 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Entre em Contato
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras.
              Entre em contato conosco e vamos conversar sobre o seu projeto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="lg:order-2"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/90 rounded-lg p-8 h-full border border-white/10 hover:border-gray-600 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contato@sinnax.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                        contato@sinnax.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-pink-500/20 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <a href="tel:+5531996274515" className="text-gray-300 hover:text-white transition-colors duration-300">
                        +55 (31) 99627-4515
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-gray-300">
                        Av. Paulista, 1000<br />
                        São Paulo, SP - Brasil<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div> */}
                </div>

                <div className="pt-8 border-t border-gray-700">
                  <h3 className="font-semibold mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-300 mb-2">
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="text-gray-300">
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:order-1"
              {...fadeIn}
            >
              <div className="bg-black/80 rounded-lg p-8 border border-white/10 hover:border-gray-600 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>

                {formStatus.submitted ? (
                  <motion.div
                    className="bg-green-500/20 p-6 rounded-lg text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                    <p className="text-gray-300 mb-4">
                      Obrigado por entrar em contato. Retornaremos em breve.
                    </p>
                    <button
                      onClick={() => {
                        setFormStatus({ submitted: false, submitting: false, error: false });
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: '',
                          service: ''
                        });
                      }}
                      className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="seu.email@exemplo.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          Serviço de Interesse
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map(service => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Assunto da mensagem"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black/90 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Descreva seu projeto ou dúvida..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                      {formStatus.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nossa Localização
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Estamos localizados no coração de São Paulo, com fácil acesso e estacionamento.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden h-[400px]"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976951624853!2d-46.65390492392026!3d-23.564611060703373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1685544321953!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da localização da Sinnax"
            ></iframe>
          </motion.div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            {...fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Perguntas Frequentes
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-6"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/80 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Quanto tempo leva para desenvolver um projeto?</h3>
                <p className="text-gray-300">
                  O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Um site institucional simples pode levar de 2 a 4 semanas, enquanto aplicações mais complexas podem levar de 2 a 6 meses. Durante a fase de planejamento, fornecemos um cronograma detalhado.
                </p>
              </div>

              <div className="bg-black/80 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Como funciona o processo de desenvolvimento?</h3>
                <p className="text-gray-300">
                  Nosso processo inclui as etapas de descoberta e planejamento, design e prototipagem, desenvolvimento, testes e qualidade, e implantação e suporte. Trabalhamos de forma ágil, com entregas incrementais e feedback constante do cliente.
                </p>
              </div>

              <div className="bg-black/80 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Quais tecnologias vocês utilizam?</h3>
                <p className="text-gray-300">
                  Trabalhamos com diversas tecnologias modernas, incluindo React, Angular, Vue.js, Node.js, Python, PHP/Laravel, React Native, Flutter, entre outras. A escolha da tecnologia depende das necessidades específicas do projeto.
                </p>
              </div>

              <div className="bg-black/80 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Vocês oferecem suporte após o lançamento?</h3>
                <p className="text-gray-300">
                  Sim, oferecemos planos de suporte e manutenção para garantir que sua solução continue funcionando perfeitamente. Isso inclui correção de bugs, atualizações de segurança, melhorias de performance e pequenas alterações.
                </p>
              </div>

              <div className="bg-black/80 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3">Como é feito o orçamento de um projeto?</h3>
                <p className="text-gray-300">
                  O orçamento é baseado na complexidade do projeto, nas funcionalidades necessárias e no prazo de entrega. Após a fase de descoberta e planejamento, fornecemos um orçamento detalhado com todas as etapas e custos envolvidos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              a impulsionar seu negócio com soluções digitais inovadoras.
            </p>
            <a
              href="mailto:contato@sinnax.com"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg inline-flex items-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email Direto
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
