import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaStore } from 'react-icons/fa'
import distributorsData from '../data/distributors.json'
import { getDistributorWhatsAppLink } from '../utils/whatsapp'

const WhereToBuy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Dónde Comprar
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Encontrá Nutrición Ganadera en estos puntos de venta
            </p>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Nuestros Puntos de Venta
            </h2>
            <p className="text-xl text-gray-600">
              Encontranos en estas ubicaciones
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168882634057!2d-58.38375908477437!3d-34.603722480459415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf8c838f37%3A0x3ba7ef230b87c112!2sObelisco!5e0!3m2!1ses!2sar!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicaciones"
            />
          </div>
        </div>
      </section>

      {/* Distribuidores List */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Lista de Distribuidores
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributorsData.map((distributor) => (
              <div
                key={distributor.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <FaStore className="text-primary text-2xl" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold mb-2">
                      {distributor.type}
                    </span>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {distributor.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                    <span>{distributor.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-primary flex-shrink-0" />
                    <a href={`tel:${distributor.phone}`} className="hover:text-primary transition-colors">
                      {distributor.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps?q=${distributor.lat},${distributor.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block"
                >
                  <button className="w-full bg-primary/10 hover:bg-primary hover:text-white text-primary font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    Cómo llegar
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Distributor CTA */}
      <section className="section bg-gradient-to-r from-green-500 to-green-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <FaStore className="text-6xl mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              ¿Querés vender nuestros productos?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Unite a nuestra red de distribuidores y ofrecé productos de calidad premium a tus clientes
            </p>
            <a
              href={getDistributorWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3">
                <FaWhatsapp className="text-3xl" />
                Consultar sobre distribución
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereToBuy
