import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import productsData from '../data/products.json'
import { getProductWhatsAppLink } from '../utils/whatsapp'

const Products = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Descubrí toda nuestra línea de alimentos balanceados para cada etapa de vida de tu mascota
            </p>
            <div className="w-24 h-1 bg-green-300 mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Product - Línea Estándar */}
      <section className="section bg-white">
        <div className="container-custom">
          <Link to={`/productos/${productsData[0].slug}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(45,80,22,0.3)] hover:scale-[1.02] cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <img
                    src={productsData[0].image}
                    alt={productsData[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 bg-primary text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg">
                    {productsData[0].protein} Proteínas
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-lg font-semibold">Click para ver detalles completos →</p>
                  </div>
                </div>

              <div className="p-8 lg:p-12">
                <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                  ⭐ Producto Destacado
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {productsData[0].name}
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {productsData[0].description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Características principales:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {productsData[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
                  <p className="text-gray-700">
                    <strong className="text-gray-900">Ingredientes:</strong> {productsData[0].ingredients}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3" onClick={(e) => e.preventDefault()}>
                  <a
                    href={getProductWhatsAppLink(productsData[0].name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="btn-whatsapp text-lg w-full justify-center">
                      <FaWhatsapp className="text-2xl" />
                      Consultar
                    </button>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Toda Nuestra Línea
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Productos especializados para cada necesidad
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group"
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
                      {product.protein}
                    </div>
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse">
                        ⭐ Destacado
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-6">
                  <Link to={`/productos/${product.slug}`}>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/productos/${product.slug}`} className="flex-1">
                      <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded-lg transition-all w-full text-sm">
                        Ver Detalles
                      </button>
                    </Link>
                    <a
                      href={getProductWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="btn-whatsapp w-full justify-center text-sm py-2">
                        <FaWhatsapp className="text-lg" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              ¿No sabés cuál elegir?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contactanos por WhatsApp y te asesoramos sobre el mejor producto según el tamaño, edad y necesidades de tu mascota
            </p>
            <a
              href={getProductWhatsAppLink("Necesito asesoramiento sobre qué producto elegir para mi mascota")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-primary hover:bg-green-50 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
                <FaWhatsapp className="text-3xl" />
                Recibir Asesoramiento
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
