export default function WhatsAppFloat() {
  const phoneNumber = "233207946237" // Your WhatsApp number without +
  const message = "Hello! I'm interested in your currency counting machines. Please send me more information."

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg z-50 transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      
      {/* Notification Dot */}
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </a>
  )
}