import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { getWhatsAppLink } from '../../utils/whatsapp'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-white">Nutrición</span>
              <span className="text-green-400"> Ganadera</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Alimento completo para perros con ingredientes seleccionados, alto valor de proteína animal y estándares de calidad.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-green-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-green-400 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/donde-comprar" className="text-gray-300 hover:text-green-400 transition-colors">
                  Donde Comprar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <FaWhatsapp className="text-green-400 text-xl" />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  +54 3487 542190
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
                <span>Argentina</span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Seguinos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ng.petfood/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/nutricionganadera/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Nutrición Ganadera. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
