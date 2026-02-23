import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { getWhatsAppLink } from '../utils/whatsapp'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-4xl" />,
      title: 'WhatsApp',
      description: '+54 3487 542190',
      link: getWhatsAppLink(),
      color: 'from-green-400 to-green-600',
      action: 'Enviar mensaje'
    },
    {
      icon: <FaInstagram className="text-4xl" />,
      title: 'Instagram',
      description: '@ng.petfood',
      link: 'https://www.instagram.com/ng.petfood/',
      color: 'from-purple-400 to-pink-600',
      action: 'Seguinos'
    },
    {
      icon: <FaFacebook className="text-4xl" />,
      title: 'Facebook',
      description: 'Nutrición Ganadera',
      link: 'https://www.facebook.com/nutricionganadera/',
      color: 'from-blue-400 to-blue-600',
      action: 'Visitanos'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with WhatsApp Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm p-8 rounded-full mb-8 animate-bounce">
              <FaWhatsapp className="text-8xl text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              ¡Contactanos!
            </h1>
            
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-green-200">
              Estamos para ayudarte
            </p>

            <p className="text-xl text-green-50 mb-12 max-w-2xl mx-auto">
              Escribinos por WhatsApp y te respondemos todas tus consultas sobre nuestros productos, asesoramiento nutricional y puntos de venta.
            </p>

            <a
              href={getWhatsAppLink("Hola! Me gustaría hacer una consulta sobre Nutrición Ganadera")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <button className="bg-white text-green-600 hover:bg-green-50 font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center gap-4">
                <FaWhatsapp className="text-5xl group-hover:animate-pulse" />
                <div className="text-left">
                  <div className="text-sm font-normal text-gray-600">Envianos un mensaje</div>
                  <div>+54 3487 542190</div>
                </div>
              </button>
            </a>

            <p className="mt-6 text-green-100">
              💬 Horario de atención: Lunes a Viernes 9:00 - 18:00 hs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Nuestros Canales de Contacto
            </h2>
            <p className="text-xl text-gray-600">
              Elegí el que más te guste para comunicarte con nosotros
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-primary"
              >
                <div className={`bg-gradient-to-br ${method.color} p-8 text-white text-center`}>
                  <div className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold">
                    {method.title}
                  </h3>
                </div>

                <div className="p-6 text-center">
                  <p className="text-gray-700 font-semibold text-lg mb-6">
                    {method.description}
                  </p>

                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-primary w-full">
                      {method.action}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600">
              Encontranos en Argentina
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13547334.694132799!2d-65.21742203124999!3d-34.61315280000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf8c838f37%3A0x3ba7ef230b87c112!2sArgentina!5e0!3m2!1ses!2sar!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <FaMapMarkerAlt className="text-primary text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Argentina
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <FaPhone className="text-primary text-3xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Teléfono / WhatsApp</h3>
                  <a href={getWhatsAppLink()} className="text-primary hover:text-primary-dark font-semibold">
                    +54 3487 542190
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
