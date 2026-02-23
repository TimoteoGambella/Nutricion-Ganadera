import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import productsData from '../../data/products.json'
import { getProductWhatsAppLink } from '../../utils/whatsapp'
import useInView from '../../hooks/useInView'

const FeaturedProducts = () => {
  const featuredProducts = productsData.filter(product => product.featured)
  const [ref, isInView] = useInView({ threshold: 0.1, once: true })

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Conocé nuestra línea de productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos destacados diseñados para cada etapa de la vida de tu mascota
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link to={`/productos/${product.slug}`}>
                <div className="relative overflow-hidden cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {product.protein} Proteínas
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-sm font-semibold">Click para ver detalles →</p>
                  </div>
                </div>
              </Link>

              <div className="p-6">
                <Link to={`/productos/${product.slug}`}>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to={`/productos/${product.slug}`} className="flex-1">
                    <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-lg transition-all w-full">
                      Ver Detalles
                    </button>
                  </Link>
                  <a
                    href={getProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="btn-whatsapp w-full justify-center">
                      <FaWhatsapp className="text-xl" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/productos">
            <button className="btn-primary text-lg transform hover:scale-110 transition-transform">
              Ver Todos los Productos
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
