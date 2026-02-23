import { FaCheckCircle, FaHeart, FaAward, FaLeaf } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Amor por las Mascotas',
      description: 'Cada producto está pensado con amor y dedicación para el bienestar de tu compañero de vida.'
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Calidad Premium',
      description: 'Seleccionamos los mejores ingredientes y mantenemos los más altos estándares de calidad.'
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Compromiso',
      description: 'Nos comprometemos a brindar productos que realmente marquen la diferencia en la salud de tu mascota.'
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Ingredientes Naturales',
      description: 'Utilizamos ingredientes naturales y seleccionados para garantizar una nutrición completa.'
    }
  ]

  const whyChooseUs = [
    'Alto contenido de proteína animal (24%)',
    'Ingredientes de primera calidad',
    'Balance nutricional ideal',
    'Fácil digestión',
    'Mejora del pelaje y piel',
    'Fortalecimiento del sistema inmune',
    'Energía sostenida todo el día',
    'Precio accesible sin comprometer calidad'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Nutrición de calidad para compañeros de vida
            </p>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  En <strong className="text-primary">Nutrición Ganadera</strong>, nacimos con una misión clara: proporcionar alimento de calidad premium a precios accesibles para que cada mascota pueda disfrutar de una vida saludable y plena.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sabemos que nuestras mascotas son más que animales, son parte de nuestra familia. Por eso, desarrollamos cada producto pensando en su bienestar, utilizando ingredientes seleccionados y manteniend los más altos estándares de calidad.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro compromiso va más allá del alimento: queremos acompañarte en cada etapa de vida de tu mascota, brindándote asesoramiento y productos que realmente hagan la diferencia.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80"
                alt="Perros felices"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que nos define y nos impulsa cada día
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-primary to-primary-light text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80"
                alt="Perro comiendo"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                ¿Por qué elegir Nutrición Ganadera?
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-white text-sm" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg pt-1">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Unite a la familia Nutrición Ganadera
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Miles de mascotas ya disfrutan de nuestros productos. ¿Qué esperás para que tu compañero sea parte?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/productos">
                <button className="bg-white text-primary hover:bg-green-50 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  Ver Productos
                </button>
              </a>
              <a href="/contacto">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Contactanos
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
