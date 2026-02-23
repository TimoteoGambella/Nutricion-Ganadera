import { FaDrumstickBite, FaHeart } from 'react-icons/fa'
import { GiMeat, GiChicken, GiStomach } from 'react-icons/gi'
import { MdPets } from 'react-icons/md'
import useInView from '../../hooks/useInView'

const Benefits = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true })

  const benefits = [
    {
      icon: <GiMeat className="text-5xl" />,
      title: '24% Proteínas',
      description: 'Alto contenido proteico para desarrollo muscular óptimo',
      color: 'from-red-500 to-red-700'
    },
    {
      icon: <GiChicken className="text-5xl" />,
      title: 'Carne y Pollo',
      description: 'Proteínas de origen animal de primera calidad',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: <GiStomach className="text-5xl" />,
      title: 'Alta Digestibilidad',
      description: 'Fácil digestión y mejor aprovechamiento de nutrientes',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <MdPets className="text-5xl" />,
      title: 'Pelaje Brillante',
      description: 'Omega 3 y 6 para un pelaje saludable y brilloso',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaDrumstickBite className="text-5xl" />,
      title: 'Huesos Fuertes',
      description: 'Calcio y fósforo para huesos y articulaciones sanas',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: <FaHeart className="text-5xl" />,
      title: 'Antioxidantes',
      description: 'Antioxidantes naturales para fortalecer el sistema inmune',
      color: 'from-pink-500 to-pink-700'
    }
  ]

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Beneficios de nuestros productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que tu mascota necesita en cada bocado
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-primary ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
