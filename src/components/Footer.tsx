/** @jsxImportSource react */
import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/95 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src={import.meta.env.BASE_URL + 'favicon2.ico'}
                alt="Sinnax Logo" 
                className="h-6 w-6"
              />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                SINNAX
              </span>
            </Link>
            <p className="mt-4 text-sm">
              Soluções inovadoras em desenvolvimento de software, focadas em qualidade,
              interatividade e inovação para transformar ideias em realidade digital.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-500" />
                <a href="mailto:contato@sinnax.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  contato@sinnax.com.br
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-500" />
                <a href="tel:+5531996274515" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +55 (31) 99627-4515
                </a>
              </li>
              {/* <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </li> */}
            </ul>
            {/* <div className="mt-4 flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sinnax. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
