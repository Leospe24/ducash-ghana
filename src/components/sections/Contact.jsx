import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productInterest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formDataEncoded = new URLSearchParams({
        'form-name': 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        productInterest: formData.productInterest,
        message: formData.message
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          productInterest: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-blue-100 mb-8">
              Reach out to us for inquiries, support, or to place an order. Our team is ready to assist you with the best currency counting solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-300"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                  <p className="text-blue-200">PO Box 676 Adum, Kumasi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-location-arrow text-blue-300"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-blue-200">East Legon Hills, Accra</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-blue-300"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-blue-200">
                    +233 550 621 006<br />
                    024 613 8417
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-blue-300"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-blue-200">neonspezzy@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-blue-200 mb-2">Quick responses via WhatsApp</p>
                  <a 
                    href="https://wa.me/233207946237?text=Hello! I'm interested in your currency counting machines."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
                  >
                    <i className="fab fa-whatsapp"></i>
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <form 
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              {/* Netlify Form Hidden Fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-check-circle"></i>
                    <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
                  </div>
                  <p className="text-green-100 text-sm mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-exclamation-circle"></i>
                    <span>Sorry, there was an error sending your message.</span>
                  </div>
                  <p className="text-red-100 text-sm mt-1">
                    Please try again or contact us directly via phone or WhatsApp.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/15 transition-colors"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/15 transition-colors"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Your Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/15 transition-colors"
                    placeholder="Enter your phone"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="productInterest" className="block text-white font-medium mb-2">
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-900/80 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-300 focus:bg-blue-800 transition-colors"
                    disabled={isSubmitting}
                  >
                    <option value="" className="bg-blue-900 text-white">Select a product</option>
                    <option value="BellCount S515" className="bg-blue-900 text-white">BellCount S515</option>
                    <option value="AL-5500 Bill Counter" className="bg-blue-900 text-white">AL-5500 Bill Counter</option>
                    <option value="Mixed Value Counter" className="bg-blue-900 text-white">Mixed Value Counter</option>
                    <option value="CashMaster 5000" className="bg-blue-900 text-white">CashMaster 5000</option>
                    <option value="Other" className="bg-blue-900 text-white">Other/General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/15 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              <p className="text-blue-200 text-sm text-center">
                We typically respond within 1-2 hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}