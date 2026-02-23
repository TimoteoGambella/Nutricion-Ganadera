import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import ImageModal from './ImageModal'

const ImageGallery = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!images || images.length === 0) return null

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative group">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-square bg-gray-100">
          <img
            src={images[currentIndex]}
            alt={`${alt} - Imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
            onClick={openModal}
          />
          
          {/* Expand Button */}
          <button
            onClick={openModal}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Ver imagen completa"
          >
            <FaExpand className="text-xl" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Imagen siguiente"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative overflow-hidden rounded-lg aspect-square transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-primary shadow-lg scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={image}
                alt={`${alt} - Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      <ImageModal
        image={images[currentIndex]}
        alt={`${alt} - Imagen ${currentIndex + 1}`}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default ImageGallery
