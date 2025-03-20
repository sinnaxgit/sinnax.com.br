import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Zap, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data - in a real app, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'E-commerce Avançado',
      category: 'E-commerce',
      client: 'TechStore',
      date: 'Janeiro 2023',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Stripe'],
      description: 'Plataforma completa de e-commerce com gestão de produtos, pagamentos e logística integrada. O sistema inclui um painel administrativo robusto, integração com múltiplos gateways de pagamento e um sistema de recomendação baseado em IA.',
      challenge: 'O principal desafio foi criar uma arquitetura escalável que pudesse lidar com picos de tráfego durante promoções sazonais, mantendo tempos de carregamento rápidos e uma experiência de usuário fluida.',
      solution: 'Implementamos uma arquitetura de microsserviços com cache distribuído e otimização de consultas ao banco de dados. Utilizamos React para o frontend com estratégias avançadas de code-splitting e lazy loading para melhorar a performance.',
      results: 'O novo sistema resultou em um aumento de 35% na taxa de conversão e uma redução de 60% no tempo de carregamento das páginas. O cliente relatou um aumento significativo nas vendas e uma melhoria na satisfação dos usuários.',
      features: [
        'Catálogo de produtos com filtros avançados',
        'Sistema de carrinho e checkout otimizado',
        'Integração com múltiplos gateways de pagamento',
        'Painel administrativo completo',
        'Sistema de recomendação baseado em IA',
        'Gestão de estoque e logística',
        'Relatórios e análises de vendas'
      ],
      technologies: [
        { name: 'React', category: 'Frontend' },
        { name: 'Redux', category: 'Estado' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Express', category: 'Backend' },
        { name: 'MongoDB', category: 'Database' },
        { name: 'Stripe', category: 'Pagamentos' },
        { name: 'AWS', category: 'Infraestrutura' },
        { name: 'Redis', category: 'Cache' }
      ],
      images: [
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
        'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80'
      ],
      demoUrl: 'https://example.com',
      testimonial: {
        text: "A Sinnax superou todas as nossas expectativas. O novo e-commerce não só melhorou a experiência dos nossos clientes, como também simplificou significativamente nossos processos internos. A equipe foi extremamente profissional e atenciosa durante todo o projeto.",
        author: "Carlos Silva",
        position: "CTO, TechStore"
      }
    },
    {
      id: 2,
      title: 'App de Gestão Financeira',
      category: 'Mobile',
      client: 'FinanceApp',
      date: 'Março 2023',
      tags: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      description: 'O Sistema OS é uma plataforma completa para a criação e gestão de ordens de serviço, voltada para pequenos empreendedores. A ferramenta simplifica a emissão, acompanhamento e finalização de serviços, garantindo maior organização e eficiência no atendimento ao cliente. O sistema inclui um painel administrativo intuitivo, automação de notificações e integração com pagamentos digitais.',
      challenge: 'Muitos pequenos empreendedores enfrentam dificuldades na organização de suas demandas, perdendo tempo com processos manuais e anotações dispersas. Além disso, a falta de um sistema estruturado pode resultar em atrasos, erros na cobrança e perda de informações importantes.',
      solution: 'Desenvolvemos uma plataforma leve e acessível, baseada na nuvem, permitindo que os usuários gerenciem ordens de serviço de qualquer dispositivo. Implementamos funcionalidades como geração automática de OS, histórico detalhado de clientes e serviços, além de integração com WhatsApp para envio de atualizações em tempo real.',
      results: `*Resultados*

Com a implementação do *Sistema OS*, nossos clientes relataram:

✔️ Redução de 50% no tempo gasto com a administração de ordens de serviço.
✔️ Aumento de 40% na taxa de retorno de clientes, devido à melhoria no atendimento.
✔️ Diminuição de erros operacionais e otimização dos processos internos.

"O Sistema OS revolucionou a forma como gerencio meus serviços. Antes, perdia tempo organizando papéis e respondendo clientes manualmente. Agora, tudo é automatizado e muito mais profissional!"

Ana Martins
Empreendedora, Soluções Elétricas`,
      features: [
        'Criação e acompanhamento de OS ',
        'Notificações automáticas via WhatsApp  ',
        'Painel administrativo intuitivo ',
        'Histórico de clientes e serviços ',
        'Integração com pagamentos digitais ',
        'Relatórios e análises detalhadas ',
        
      ],
      technologies: [
        { name: 'JavaScript, HTML, CSS', category: 'Frontend' },
        { name: 'Node.js ', category: 'Backend' },
        { name: 'Supabase', category: 'Database' },

      ],
      images: [
        'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80'
      ],
      demoUrl: 'https://example.com',
      testimonial: {
        text: "Trabalhar com a Sinnax foi uma experiência incrível. Eles não apenas entenderam nossa visão, mas a aprimoraram com ideias inovadoras. O aplicativo que desenvolveram excedeu nossas expectativas e nossos usuários adoram a facilidade de uso.",
        author: "Ana Martins",
        position: "CEO, FinanceApp"
      }
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      category: 'Dashboard',
      client: 'DataViz Corp',
      date: 'Maio 2023',
      tags: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      description: 'Dashboard interativo para visualização de dados empresariais com gráficos personalizáveis. A plataforma permite aos usuários criar visualizações personalizadas, configurar alertas e compartilhar insights com a equipe.',
      challenge: 'O principal desafio foi processar e visualizar grandes volumes de dados em tempo real, mantendo a interface responsiva e oferecendo insights acionáveis para os usuários.',
      solution: 'Implementamos um sistema de processamento de dados em tempo real com WebSockets para atualizações instantâneas. Utilizamos D3.js para criar visualizações personalizadas e otimizamos as consultas ao banco de dados para melhorar a performance.',
      results: 'A plataforma reduziu o tempo de análise de dados em 70% e permitiu que a equipe identificasse oportunidades de negócio que resultaram em um aumento de 25% na receita.',
      features: [
        'Visualizações de dados personalizáveis',
        'Atualizações em tempo real',
        'Filtros avançados',
        'Exportação de relatórios',
        'Compartilhamento de dashboards',
        'Alertas e notificações',
        'Integração com múltiplas fontes de dados'
      ],
      technologies: [
        { name: 'Vue.js', category: 'Frontend' },
        { name: 'Vuex', category: 'Estado' },
        { name: 'D3.js', category: 'Visualização' },
        { name: 'Express', category: 'Backend' },
        { name: 'PostgreSQL', category: 'Database' },
        { name: 'Socket.io', category: 'Realtime' },
        { name: 'Docker', category: 'Infraestrutura' }
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80'
      ],
      demoUrl: 'https://example.com',
      testimonial: {
        text: "A Sinnax transformou completamente nossa capacidade de analisar dados. O dashboard que eles desenvolveram é intuitivo, poderoso e nos ajudou a identificar tendências que estavam ocultas em nossos dados. A equipe foi extremamente competente e responsiva.",
        author: "Roberto Almeida",
        position: "Diretor de Dados, DataViz Corp"
      }
    }
  ];

  const project = projects.find(p => p.id === Number(id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
          <Link to="/portfolio" className="text-purple-500 hover:text-purple-400">
            Voltar para o portfólio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-black border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o portfólio
          </Link>

          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-500 font-medium mb-2 block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-300">{project.date}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-gray-300">Cliente: {project.client}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative rounded-lg overflow-hidden"
            {...fadeIn}
          >
            <div className="aspect-w-16 aspect-h-9 max-h-[600px]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </motion.div>

          {project.images.length > 1 && (
            <motion.div
              className="flex justify-center mt-6 gap-2"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-purple-500 w-6' : 'bg-gray-600'
                    }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </motion.div>
          )}

          {project.demoUrl && (
            <motion.div
              className="text-center mt-8"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300"
              >
                Ver demonstração
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2 bg-black/90 rounded-lg p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              {...fadeIn}
            >
              <h2 className="text-2xl font-bold mb-6">Sobre o Projeto</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <h3 className="text-xl font-bold mb-4">O Desafio</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.challenge}
              </p>

              <h3 className="text-xl font-bold mb-4">Nossa Solução</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.solution}
              </p>

              <h3 className="text-xl font-bold mb-4">Resultados</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {project.results}
              </p>

              {project.testimonial && (
                <div className="bg-black/90 p-6 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 mt-12">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg opacity-10 blur"></div>
                    <div className="relative">
                      <p className="text-gray-300 italic mb-4">"{project.testimonial.text}"</p>
                      <div>
                        <p className="font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">{project.testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{project.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              className="lg:col-span-1"
              {...fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-black/90 rounded-lg p-6 sticky top-24 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">Funcionalidades</h3>
                <ul className="space-y-3 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Zap className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-black/80 px-3 py-1 rounded-full text-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                      <span className="text-purple-400">{tech.category}:</span> {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Projects */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Outros Projetos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((p, index) => (
                <motion.div
                  key={p.id}
                  className="bg-gray-800 rounded-lg overflow-hidden group"
                  {...fadeIn}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm text-purple-400 mb-2 block">{p.category}</span>
                      <h3 className="text-xl font-bold">{p.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <Link
                      to={`/portfolio/${p.id}`}
                      className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                    >
                      Ver detalhes
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            className="text-center mt-12"
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            >
              Ver todos os projetos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
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
              Gostou do nosso trabalho?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Entre em contato conosco para discutir como podemos ajudar a transformar
              sua ideia em um projeto de sucesso.
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

export default ProjectDetails;
