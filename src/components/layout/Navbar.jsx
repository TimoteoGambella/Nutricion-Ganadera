import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLink } from '../../utils/whatsapp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Inicio', path: '/' },
    { name: 'Productos', path: '/productos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Donde Comprar', path: '/donde-comprar' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2 transition-transform hover:scale-105">
            <div className="text-2xl font-heading font-bold">
              <span className="text-white">Nutrición</span>
              <span className="text-green-400"> Ganadera</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-green-300 ${
                  isActive(item.path) ? 'text-green-300 border-b-2 border-green-300' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-2 !py-2 !px-4"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded transition-colors duration-200 hover:bg-primary-light ${
                  isActive(item.path) ? 'bg-primary-light font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4"
            >
              <button className="btn-whatsapp w-full justify-center">
                <FaWhatsapp className="text-xl" />
                Contactar por WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
