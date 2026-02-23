import { useParams, useNavigate, Link } from 'react-router-dom'
import { FaWhatsapp, FaChevronLeft, FaCheckCircle } from 'react-icons/fa'
import productsData from '../data/products.json'
import { getProductWhatsAppLink } from '../utils/whatsapp'
import ImageGallery from '../components/ImageGallery'

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = productsData.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Producto no encontrado</h2>
          <Link to="/productos" className="text-primary hover:text-primary-light font-semibold">
            Ver todos los productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/productos" className="text-gray-600 hover:text-primary transition-colors">
              Productos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="container-custom pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium group"
        >
          <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Volver
        </button>
      </div>

      {/* Product Detail */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-24 h-fit">
              <ImageGallery images={product.gallery || [product.image]} alt={product.name} />
            </div>

            {/* Product Info */}
            <div>
              {/* Header */}
              <div className="mb-6">
                {product.featured && (
                  <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
                    ⭐ Producto Destacado
                  </span>
                )}
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-white px-6 py-3 rounded-full font-bold text-xl">
                    {product.protein} Proteínas
                  </span>
                  <span className="text-gray-600 text-lg">{product.category.replace('-', ' ')}</span>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Consultar Disponibilidad y Precio
                </h3>
                <p className="text-gray-600 mb-4">
                  Contactanos por WhatsApp para recibir información sobre precios, presentaciones disponibles y puntos de venta.
                </p>
                <a
                  href={getProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-whatsapp text-lg w-full justify-center">
                    <FaWhatsapp className="text-2xl" />
                    Consultar por WhatsApp
                  </button>
                </a>
              </div>

              {/* Detailed Description */}
              {product.detailedDescription && (
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Descripción Completa
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </div>
              )}

              {/* Benefits */}
              {product.benefits && (
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Beneficios Principales
                  </h2>
                  <div className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary text-xl mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Nutritional Info */}
              {product.nutritionalInfo && (
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Información Nutricional
                  </h2>
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-3xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key === 'protein' ? 'Proteína' :
                             key === 'fat' ? 'Grasa' :
                             key === 'fiber' ? 'Fibra' :
                             key === 'moisture' ? 'Humedad' :
                             key === 'ash' ? 'Cenizas' : key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Feeding Guide */}
              {product.feedingGuide && (
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Guía de Alimentación Diaria
                  </h2>
                  <div className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-primary text-white">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold">Peso del Perro</th>
                          <th className="px-6 py-4 text-left font-semibold">Cantidad Diaria</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.feedingGuide.map((guide, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-6 py-4 font-medium text-gray-900">{guide.weight}</td>
                            <td className="px-6 py-4 text-gray-700">{guide.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    * Estas son recomendaciones generales. Ajustar según edad, actividad y condición corporal.
                  </p>
                </div>
              )}

              {/* Ingredients */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ingredientes</h3>
                <p className="text-gray-700">{product.ingredients}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Características Principales
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary text-white px-4 py-2 rounded-full font-medium text-lg"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Otros Productos que te Pueden Interesar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/productos/${relatedProduct.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover transform group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full font-bold text-sm">
                      {relatedProduct.protein}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
