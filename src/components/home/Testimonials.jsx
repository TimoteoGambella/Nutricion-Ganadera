import { useState, useEffect } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import testimonialsData from '../../data/testimonials.json'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="section bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
          <div className="w-24 h-1 bg-green-300 mx-auto mt-4 rounded-full" />
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <FaQuoteLeft className="text-5xl text-green-300 mb-6 opacity-50" />

            <div className="mb-6">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl" />
                ))}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 text-center italic">
              "{currentTestimonial.text}"
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold text-white">{currentTestimonial.name}</p>
                <p className="text-green-200">{currentTestimonial.location}</p>
                <p className="text-sm text-green-100">
                  Dueño de {currentTestimonial.petName} • {currentTestimonial.petBreed}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/30"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-white'
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/30"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
