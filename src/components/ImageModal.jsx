import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const ImageModal = ({ image, alt, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Cerrar"
      >
        <FaTimes className="text-3xl" />
      </button>
      
      <div className="relative max-w-6xl max-h-[90vh] animate-zoomIn">
        <img
          src={image}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default ImageModal
