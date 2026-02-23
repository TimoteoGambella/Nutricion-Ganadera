import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-primary hover:bg-primary-light text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 animate-fadeIn"
          aria-label="Volver arriba"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  )
}

export default BackToTop
