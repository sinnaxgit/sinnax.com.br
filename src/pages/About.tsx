import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Zap, Target, TrendingUp, Code, Heart } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const teamMembers = [
    {
      name: 'Carlos Silva',
      position: 'CEO & Fundador',
      bio: 'Com mais de 15 anos de experiência em desenvolvimento de software e gestão de projetos, Carlos fundou a Sinnax com a visão de criar soluções digitais inovadoras que realmente fazem a diferença.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Ana Martins',
      position: 'Diretora de Tecnologia',
      bio: 'Especialista em arquitetura de software e novas tecnologias, Ana lidera nossa equipe de desenvolvimento, garantindo a qualidade técnica e a inovação em todos os projetos.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      name: 'Roberto Almeida',
      position: 'Diretor de Design',
      bio: 'Com formação em design de interação e experiência do usuário, Roberto é responsável por criar interfaces intuitivas e experiências digitais memoráveis para nossos clientes.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Juliana Santos',
      position: 'Gerente de Projetos',
      bio: 'Especialista em metodologias ágeis, Juliana coordena nossos projetos, garantindo entregas no prazo, dentro do orçamento e com a qualidade que nossos clientes esperam.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: 'Inovação',
      description: 'Buscamos constantemente novas tecnologias e abordagens para oferecer soluções inovadoras que impulsionem o sucesso dos nossos clientes.'
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em cada linha de código, cada pixel de design e cada interação com o cliente.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Colaboração',
      description: 'Acreditamos no poder do trabalho em equipe e na construção de parcerias sólidas com nossos clientes para alcançar resultados excepcionais.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: 'Foco no Cliente',
      description: 'Colocamos as necessidades e objetivos dos nossos clientes no centro de tudo o que fazemos, buscando sempre superar suas expectativas.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: 'Melhoria Contínua',
      description: 'Estamos sempre aprendendo, evoluindo e aprimorando nossos processos e habilidades para oferecer o melhor aos nossos clientes.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Paixão',
      description: 'Amamos o que fazemos e colocamos paixão em cada projeto, buscando criar soluções que realmente fazem a diferença.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Fundação da Sinnax',
      description: 'A Sinnax foi fundada com a missão de criar soluções digitais inovadoras que realmente fazem a diferença para os clientes.'
    },
    {
      year: '2021',
      title: 'Primeiros Grandes Projetos',
      description: 'Conquistamos nossos primeiros clientes de grande porte e expandimos nossa equipe para atender à crescente demanda.'
    },
    {
      year: '2022',
      title: 'Expansão e Novos Serviços',
      description: 'Ampliamos nosso portfólio de serviços para incluir desenvolvimento mobile e soluções de e-commerce avançadas.'
    },
    {
      year: '2023',
      title: 'Reconhecimento no Mercado',
      description: 'Fomos reconhecidos como uma das empresas inovadoras do setor, com diversas menções na mídia.'
    },
    {
      year: '2024',
      title: 'Internacionalização',
      description: 'Iniciamos nossa expansão internacional, com projetos em diversos países da América Latina e Europa.'
    },
    {
      year: '2025',
      title: 'Presente e Futuro',
      description: 'Continuamos a crescer e inovar, sempre com o compromisso de oferecer as melhores soluções digitais para nossos clientes.'
    }
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
                Sobre Nós
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Conheça a história, valores e a equipe por trás da Sinnax, 
              uma empresa apaixonada por transformar ideias em realidade digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                  Nossa História
                </span>
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A Sinnax nasceu em 2018 da paixão de um grupo de desenvolvedores e designers 
                que acreditavam que a tecnologia poderia ser mais humana, intuitiva e transformadora. 
                Começamos como uma pequena equipe em um escritório compartilhado, com a missão de 
                criar soluções digitais que realmente fizessem a diferença para nossos clientes.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ao longo dos anos, crescemos organicamente, sempre mantendo nosso compromisso 
                com a qualidade, inovação e foco no cliente. Hoje, somos uma equipe multidisciplinar 
                de profissionais apaixonados por tecnologia, trabalhando juntos para transformar 
                ideias em soluções digitais excepcionais.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa jornada é marcada por desafios superados, aprendizados constantes e, 
                principalmente, pelo impacto positivo que nossas soluções têm gerado para 
                empresas de diversos segmentos. E estamos apenas começando.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30 blur-lg"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Equipe Sinnax" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Missão, Visão e Valores
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Nossos princípios fundamentais que guiam todas as nossas ações e decisões.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div 
              className="bg-black/90 rounded-lg p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Desenvolver soluções tecnológicas que impulsionem o sucesso dos nossos clientes, 
                combinando inovação, qualidade e experiências digitais excepcionais que transformam 
                ideias em realidade e geram resultados tangíveis.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black/90 rounded-lg p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como referência em desenvolvimento de software e soluções digitais, 
                criando tecnologias que impactam positivamente a vida das pessoas e o sucesso das 
                empresas, com um time apaixonado e em constante evolução.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-black/90 rounded-lg p-8 border border-white/10 hover:border-gray-600 transition-all duration-300"
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
{/*       <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nossa Trajetória
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Uma jornada de crescimento, aprendizado e conquistas.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="h-6 w-6 rounded-full bg-purple-500 border-4 border-gray-950"></div>
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}>
                    <div className={`md:text-right md:pr-12 ${
                      index % 2 === 0 ? '' : 'md:order-2 md:text-left md:pl-12 md:pr-0'
                    }`}>
                      <span className="text-purple-500 font-bold text-xl mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                    <div className={index % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}>
                      <div className={`bg-gray-800 p-4 rounded-lg ${
                        index % 2 === 0 ? 'transform md:translate-x-4' : 'transform md:-translate-x-4'
                      }`}>
                        <div className="h-32 bg-gradient-to-r from-purple-900 to-pink-900 rounded flex items-center justify-center">
                          <Code className="h-12 w-12 text-white opacity-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team */}
{/*       <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nossa Equipe
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Conheça os profissionais apaixonados por tecnologia que fazem a Sinnax acontecer.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-black/90 rounded-lg p-8 border border-white/10"
                {...fadeIn}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="max-w-4xl mx-auto text-center mt-16"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-300 mb-8">
              Além dos nossos líderes, contamos com uma equipe talentosa de desenvolvedores, 
              designers, especialistas em UX, gerentes de projeto e profissionais de suporte 
              que trabalham juntos para entregar soluções excepcionais.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              Junte-se à Nossa Equipe
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos criar algo incrível juntos?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Estamos prontos para transformar suas ideias em soluções digitais inovadoras.
              Entre em contato conosco e descubra como podemos ajudar.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
