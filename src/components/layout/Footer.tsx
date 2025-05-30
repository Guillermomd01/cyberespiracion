import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import Logo from '../../assets/logo-trans.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="h-16 w-16 object-contain" />
              <span className="text-xl font-bold text-white">Cyberespiración</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Descubre el poder transformador de la respiración consciente para renovar tu cuerpo y mente.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jessicamu%C3%B1oz-respiracionconsciente/" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Programas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programas/renacimiento-celular" className="text-gray-400 hover:text-white transition">
                  Renacimiento Celular
                </Link>
              </li>
              <li>
                <Link to="/programas/co-creacion" className="text-gray-400 hover:text-white transition">
                  Co-Creación
                </Link>
              </li>
              <li>
                <Link to="/programas/master" className="text-gray-400 hover:text-white transition">
                  Máster de Cyberespiración
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/casos-exito" className="text-gray-400 hover:text-white transition">
                  Casos de éxito
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-white transition">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-400 hover:text-white transition">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 hover:text-white transition">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Cyberespiración. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Transformando vidas a través de la respiración consciente.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;