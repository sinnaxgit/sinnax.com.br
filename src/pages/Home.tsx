import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Layers, Zap, Monitor, Database, Server, ArrowRight } from 'lucide-react';
import ResfriaBrasil from '../assets/ResfriaBrasil.png';
import Gustavo from '../assets/Gustavo.png';
import OS from '../assets/OS.png';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-purple-500" />,
      title: 'Desenvolvimento Web',
      description: 'Sites Bonitos, aplicações web e e-commerce com foco em experiência do usuário e performance.'
    },
    {
      icon: <Layers className="h-8 w-8 text-pink-500" />,
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android, com interfaces intuitivas e funcionalidades avançadas.'
    },
    {
      icon: <Database className="h-8 w-8 text-orange-500" />,
      title: 'Banco de Dados',
      description: 'Modelagem, implementação e otimização de bancos de dados relacionais e NoSQL.'
    },
    {
      icon: <Server className="h-8 w-8 text-green-500" />,
      title: 'DevOps & Cloud',
      description: 'Infraestrutura como código, CI/CD, containerização e gerenciamento de ambientes em nuvem.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Site Institucional',
      category: 'Site Institucional',
      image: ResfriaBrasil,
      externalUrl: 'https://project-flame-theta-17.vercel.app/'
    },
    {
      id: 3,
      title: 'Blog',
      category: 'Site Institucional',
      image: Gustavo,
      externalUrl: 'https://gustavolxl.com/blog'
    },
    {
      id: 2,
      title: 'Sistemas Internos',
      category: 'Sistemas Internos',
      image: OS,
      externalUrl: 'https://www.sinnax.com.br/'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-800 to-orange-800 opacity-30"></div>
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Transformando Ideias
              </span>
              <br />
              em Realidade Digital
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Desenvolvimento de software inovador com foco em qualidade,
              interatividade e experiências digitais memoráveis.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                Ver Portfólio
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                Fale Conosco
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          >
            <ArrowRight className="h-8 w-8 text-white transform rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/95 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Quem Somos
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              A Sinnax é uma empresa de desenvolvimento de software especializada em criar soluções digitais
              inovadoras e de alta qualidade. Nossa equipe de especialistas
              trabalha transformar suas ideias em produtos reais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-30 blur-lg"></div>
              <div className="relative bg-black/70 p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/10 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-purple-500 mb-2">3+</h3>
                    <p className="text-gray-300">Anos de experiência</p>
                  </div>
                  <div className="bg-black/10 p-4 rounded-lg border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-pink-500 mb-2">10+</h3>
                    <p className="text-gray-300">Projetos desenvolvidos</p>
                  </div>
                  <div className="bg-black/10 p-4 rounded-lg border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">5+</h3>
                    <p className="text-gray-300">Setores atendidos</p>
                  </div>
                  <div className="bg-black/10 p-4 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-purple-500 mb-2">100%</h3>
                    <p className="text-gray-300">Clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-gray-300 mb-6">
                Desenvolver soluções tecnológicas que impulsionem o sucesso dos nossos clientes,
                combinando inovação, qualidade e experiências digitais excepcionais.
              </p>

              <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-purple-500/20 p-1 rounded mr-3 mt-1">
                    <Zap className="h-4 w-4 text-purple-500" />
                  </span>
                  <span className="text-gray-300">
                    <strong className="text-white">Inovação</strong> - Buscamos constantemente novas tecnologias e abordagens.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-pink-500/20 p-1 rounded mr-3 mt-1">
                    <Zap className="h-4 w-4 text-pink-500" />
                  </span>
                  <span className="text-gray-300">
                    <strong className="text-white">Qualidade</strong> - Comprometimento com a excelência em cada linha de código.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-500/20 p-1 rounded mr-3 mt-1">
                    <Zap className="h-4 w-4 text-orange-500" />
                  </span>
                  <span className="text-gray-300">
                    <strong className="text-white">Colaboração</strong> - Parcerias sólidas com nossos clientes e equipe.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Oferecemos soluções completas em desenvolvimento de software,
              desde a concepção até a implementação e manutenção.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black/80 rounded-lg p-6 hover:bg-black/90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 border border-white/10"
                variants={fadeIn}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
            >
              Ver todos os serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black/95 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Projetos em Destaque
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Conheça alguns dos nossos trabalhos mais recentes e descubra como
              podemos ajudar a transformar suas ideias em realidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-9 h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-sm text-purple-400 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/80 hover:text-white text-sm font-medium transition-colors duration-300"
                  >
                    Ver o Site
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              Ver Portfólio Completo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar
              a impulsionar seu negócio com soluções digitais inovadoras.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Fale com um Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
