import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import ResfriaBrasil from '../assets/ResfriaBrasil.png';
import Gustavo from '../assets/Gustavo.png';
import OS from '../assets/OS.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Todos' },
    //{ id: 'web', name: 'Web' },
    //{ id: 'mobile', name: 'Mobile' },
    //{ id: 'ecommerce', name: 'E-commerce' },
    //{ id: 'dashboard', name: 'Dashboard' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Site Institucional',
      category: 'Site Institucional',
      tags: ['Vite', 'Node.js', 'HTML'],
      image: ResfriaBrasil,
      externalUrl: 'https://project-flame-theta-17.vercel.app/',
      description: 'Apresente sua empresa de forma profissional com um site moderno, animações fluidas e design responsivo.'
    },

    {
      id: 3,
      title: 'Blog',
      category: 'Site Institucional',
      tags: ['Vite', 'Node.js', 'HTML'],
      image: Gustavo,
      externalUrl: 'https://gustavolxl.com/blog',
      description: 'Compartilhe conteúdos relevantes com um blog dinâmico, otimizado para leitura e fácil navegação.'
    },

    {
      id: 2,
      title: 'Sistemas Internos',
      category: 'Sistemas Internos',
      tags: ['Vite', 'Node.js', 'HTML', 'SQL'],
      image: OS,
      externalUrl: 'https://www.sinnax.com.br/',
      description: 'Desenvolva sistemas internos eficientes para otimizar processos e melhorar a produtividade da sua equipe.'
    },
    
    /*
    {
      id: 4,
      title: 'Site Institucional',
      category: 'web',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      description: 'Site institucional moderno com animações fluidas e design responsivo.'
    },
    {
      id: 5,
      title: 'Marketplace de Serviços',
      category: 'ecommerce',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Plataforma para contratação de serviços freelance com sistema de avaliações e pagamentos.'
    },
    {
      id: 6,
      title: 'App de Delivery',
      category: 'mobile',
      tags: ['Flutter', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      description: 'Aplicativo de delivery com rastreamento em tempo real e integração com múltiplos restaurantes.'
    },
    {
      id: 7,
      title: 'Sistema de Gestão Escolar',
      category: 'web',
      tags: ['Angular', 'Java Spring', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80',
      description: 'Sistema completo para gestão escolar com módulos para alunos, professores e administração.'
    },
    {
      id: 8,
      title: 'Dashboard IoT',
      category: 'dashboard',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Dashboard para monitoramento de dispositivos IoT com atualizações em tempo real.'
    },
    {
      id: 9,
      title: 'Loja Virtual de Moda',
      category: 'ecommerce',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'E-commerce de moda com experiência de compra personalizada e integração com redes sociais.'
    }
    */
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.5 }
  };
  
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
                Nosso Portfólio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Conheça alguns dos nossos projetos mais recentes e descubra como 
              podemos ajudar a transformar suas ideias em realidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Filter className="h-5 w-5 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold">Filtrar por categoria</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                className="bg-black/90 rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm text-purple-400 mb-2 block">{categories.find(c => c.id === project.category)?.name}</span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  </div>
                </div>
                <div className="bg-black/90 p-4 rounded-lg">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-black/80 text-gray-300 px-2 py-1 rounded border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.id === 2 ? (
                                    <Link 
                                      to={`/portfolio/${project.id}`}
                                      className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                                    >
                                      Ver Detalhes
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                  ) : (
                                    <a 
                                      href={project.externalUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                                    >
                                      Ver o Site 
                                      <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                  )}
                </div>
              </motion.div>
            ))}
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
              Vamos criar algo incrível juntos?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Cada projeto é uma oportunidade para inovar e superar expectativas.
              Entre em contato e descubra como podemos transformar sua ideia em realidade.
            </p>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Iniciar um Projeto
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
