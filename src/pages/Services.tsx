import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Server, 
  Code, 
  Layout, 
  Search, 
  Shield, 
  Zap,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const mainServices = [
    {
      icon: <Monitor className="h-12 w-12 text-purple-500" />,
      title: 'Desenvolvimento Web',
      description: 'Criamos sites responsivos, aplicações web e e-commerce com foco em experiência do usuário e performance.',
      features: [
        'Sites institucionais e landing pages',
        'Aplicações web complexas (SPA, PWA)',
        'E-commerce e marketplaces',
        'Sistemas de gestão empresarial',
        'Integrações com APIs e serviços externos'
      ],
      color: 'purple'
    },
    {
      icon: <Smartphone className="h-12 w-12 text-pink-500" />,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvemos apps nativos e híbridos para iOS e Android, com interfaces intuitivas e funcionalidades avançadas.',
      features: [
        'Aplicativos nativos (iOS e Android)',
        'Aplicativos híbridos (React Native, Flutter)',
        'Integração com hardware do dispositivo',
        'Notificações push e geolocalização',
        'Publicação nas lojas (App Store e Google Play)'
      ],
      color: 'pink'
    },
    {
      icon: <Database className="h-12 w-12 text-orange-500" />,
      title: 'Banco de Dados',
      description: 'Modelagem, implementação e otimização de bancos de dados relacionais e NoSQL para suas aplicações.',
      features: [
        'Modelagem de dados eficiente',
        'Bancos relacionais (MySQL, PostgreSQL)',
        'Bancos NoSQL (MongoDB, Firebase)',
        'Otimização de performance',
        'Migração e sincronização de dados'
      ],
      color: 'orange'
    },
    {
      icon: <Server className="h-12 w-12 text-green-500" />,
      title: 'DevOps & Cloud',
      description: 'Infraestrutura como código, CI/CD, containerização e gerenciamento de ambientes em nuvem.',
      features: [
        'Configuração de servidores e ambientes',
        'Pipelines de CI/CD (Jenkins, GitHub Actions)',
        'Containerização (Docker, Kubernetes)',
        'Infraestrutura como código (Terraform)',
        'Monitoramento e logging'
      ],
      color: 'green'
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'Desenvolvimento Backend',
      description: 'APIs RESTful, microsserviços e integrações com sistemas externos.'
    },
    {
      icon: <Layout className="h-8 w-8 text-indigo-500" />,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e experiências de usuário memoráveis.'
    },
    {
      icon: <Search className="h-8 w-8 text-yellow-500" />,
      title: 'SEO & Performance',
      description: 'Otimização para mecanismos de busca e melhoria de performance.'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Segurança Digital',
      description: 'Implementação de práticas de segurança e proteção de dados.'
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PHP/Laravel', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: '.NET', category: 'Backend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'Swift', category: 'Mobile' },
    { name: 'Kotlin', category: 'Mobile' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Firebase', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Jenkins', category: 'DevOps' },
    { name: 'GitHub Actions', category: 'DevOps' },
    { name: 'Figma', category: 'Design' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nossos Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Oferecemos soluções completas em desenvolvimento de software, 
              desde a concepção até a implementação e manutenção.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <motion.div 
                key={index}
                className={`bg-black/90 rounded-lg overflow-hidden border border-white/10 hover:border-${service.color}-500/50 transition-all duration-300`}
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`bg-${service.color}-500/10 p-8`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-semibold mb-4">O que oferecemos:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 text-${service.color}-500 mr-3 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Serviços Complementares
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Além dos nossos serviços principais, oferecemos soluções complementares 
              para atender todas as necessidades do seu projeto.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-black/90 rounded-lg p-6 border border-white/10 hover:border-gray-600 transition-all duration-300"
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Tecnologias
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Trabalhamos com as tecnologias mais modernas e eficientes do mercado, 
              garantindo soluções robustas e escaláveis.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-black/90 px-4 py-2 rounded-full border border-white/10 text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
              >
                <span className="text-gray-400">{tech.category}:</span> {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nosso Processo
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Seguimos uma metodologia ágil e transparente para garantir a entrega 
              de projetos de alta qualidade dentro do prazo.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
            
            <div className="space-y-20">
              {/* Step 1 */}
              <motion.div 
                className="relative"
                {...fadeIn}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-purple-500 border-4 border-gray-900"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3">1. Descoberta e Planejamento</h3>
                    <p className="text-gray-300">
                      Entendemos suas necessidades, objetivos e requisitos para definir 
                      o escopo do projeto e criar um plano de ação detalhado.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-purple-500 mr-2" />
                          Reuniões de briefing
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-purple-500 mr-2" />
                          Análise de requisitos
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-purple-500 mr-2" />
                          Definição de escopo
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-purple-500 mr-2" />
                          Planejamento de sprints
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative"
                {...fadeIn}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-pink-500 border-4 border-gray-900"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-pink-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Wireframes e protótipos</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-pink-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Design de interfaces</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-pink-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Testes de usabilidade</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-pink-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Aprovação do cliente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-3">2. Design e Prototipagem</h3>
                    <p className="text-gray-300">
                      Criamos wireframes e protótipos interativos para visualizar a 
                      interface e a experiência do usuário antes do desenvolvimento.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative"
                {...fadeIn}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-orange-500 border-4 border-gray-900"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3">3. Desenvolvimento</h3>
                    <p className="text-gray-300">
                      Implementamos o projeto utilizando as tecnologias mais adequadas, 
                      seguindo as melhores práticas de desenvolvimento e padrões de código.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-orange-500 mr-2" />
                          Codificação frontend e backend
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-orange-500 mr-2" />
                          Integração com APIs
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-orange-500 mr-2" />
                          Implementação de banco de dados
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-orange-500 mr-2" />
                          Revisões de código
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="relative"
                {...fadeIn}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-green-500 border-4 border-gray-900"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-green-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Testes unitários e de integração</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-green-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Testes de performance</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-green-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Testes de segurança</span>
                        </li>
                        <li className="flex items-center md:justify-end">
                          <Zap className="h-4 w-4 text-green-500 mr-2 md:order-2 md:ml-2 md:mr-0" />
                          <span className="md:order-1">Validação com o cliente</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-2xl font-bold mb-3">4. Testes e Qualidade</h3>
                    <p className="text-gray-300">
                      Realizamos testes rigorosos para garantir a qualidade, segurança 
                      e performance da solução antes da entrega.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Step 5 */}
              <motion.div 
                className="relative"
                {...fadeIn}
              >
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 -mt-3">
                  <div className="h-6 w-6 rounded-full bg-blue-500 border-4 border-gray-900"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-2xl font-bold mb-3">5. Implantação e Suporte</h3>
                    <p className="text-gray-300">
                      Realizamos a implantação da solução em ambiente de produção e 
                      oferecemos suporte contínuo para garantir o sucesso do projeto.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          Configuração de servidores
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          Implantação em produção
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          Monitoramento e manutenção
                        </li>
                        <li className="flex items-center">
                          <Zap className="h-4 w-4 text-blue-500 mr-2" />
                          Suporte técnico contínuo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
              Pronto para iniciar seu projeto?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar 
              a transformar sua ideia em uma solução digital de sucesso.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
