import { FaWhatsapp } from 'react-icons/fa'
import { getWhatsAppLink } from '../../utils/whatsapp'

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Contact WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}

export default WhatsAppButton
