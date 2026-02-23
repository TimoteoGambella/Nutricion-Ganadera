import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLink } from '../../utils/whatsapp'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20 md:py-32 flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in">
              ALIMENTO COMPLETO <br />
              <span className="text-green-300">PARA PERROS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold text-green-200">
              Soluciones integrales para el desarrollo animal
            </p>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto lg:mx-0">
              Desarrollamos alimentos con ingredientes seleccionados, alto valor de proteína animal y estándares de calidad que garantizan equilibrio nutricional en cada etapa de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/productos" className="w-full sm:w-auto">
                <button className="btn-primary text-lg w-full sm:w-auto">
                  Ver Productos
                </button>
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="btn-whatsapp text-lg w-full sm:w-auto justify-center">
                  <FaWhatsapp className="text-2xl" />
                  Contactar
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                alt="Perro feliz"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
