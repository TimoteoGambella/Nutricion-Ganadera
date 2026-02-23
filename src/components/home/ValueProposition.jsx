import { FaHeartbeat, FaBolt, FaDumbbell } from 'react-icons/fa'

const ValueProposition = () => {
  const values = [
    {
      icon: <FaHeartbeat className="text-5xl" />,
      title: 'Salud',
      description: 'Ingredientes de calidad que cuidan la salud integral de tu mascota',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: <FaBolt className="text-5xl" />,
      title: 'Energía',
      description: 'Nutrientes balanceados para mantener la vitalidad durante todo el día',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <FaDumbbell className="text-5xl" />,
      title: 'Vitalidad',
      description: 'Proteínas de alto valor biológico para músculos fuertes',
      color: 'from-green-400 to-green-600'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Nuestro objetivo es siempre priorizar
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary"
            >
              <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-full flex items-center justify-center text-white mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
