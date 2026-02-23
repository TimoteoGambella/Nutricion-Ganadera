import { FaWhatsapp, FaDog } from 'react-icons/fa'
import { getWhatsAppLink } from '../../utils/whatsapp'

const CTASection = () => {
  return (
    <section className="section bg-gradient-to-r from-green-500 to-green-700 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm p-6 rounded-full mb-8 animate-bounce">
            <FaDog className="text-7xl text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            ¿Listo para mejorar la nutrición de tu mascota?
          </h2>

          <p className="text-xl md:text-2xl mb-8 text-green-50 max-w-2xl mx-auto">
            Consultanos por WhatsApp y te asesoramos sobre el mejor alimento para tu compañero
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getWhatsAppLink("Hola! Me gustaría recibir asesoramiento sobre los productos de Nutrición Ganadera")}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <button className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
                <FaWhatsapp className="text-3xl group-hover:animate-bounce" />
                <span>Contactar por WhatsApp</span>
              </button>
            </a>
          </div>

          <p className="mt-8 text-green-100 text-sm">
            📞 +54 3487 542190 • Respondemos todas tus consultas
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
