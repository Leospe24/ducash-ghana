import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo with Hover Effect */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
              isScrolled ? 'bg-blue-600 text-white' : 'bg-white/10 text-white backdrop-blur-sm'
            }`}>
              <i className="fas fa-eagle text-lg"></i>
            </div>
            <div className="leading-tight">
              <h1 className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>DuCash Ghana</h1>
              <span className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>Currency Counting</span>
            </div>
          </div>

          {/* Desktop Navigation with Enhanced Hover Effects */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <a 
                    href={item.href}
                    className={`font-medium transition-all duration-300 relative group text-sm ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white hover:text-white/90'
                    }`}
                  >
                    {/* Link Text */}
                    <span className="relative z-10">
                      {item.name}
                      
                      {/* Animated Underline */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    {/* Hover Background Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="group relative bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                >
                  <i className="fas fa-paper-plane text-xs group-hover:scale-110 transition-transform duration-300"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Tablet Navigation with Better Contact Button */}
          <nav className="hidden md:flex lg:hidden items-center gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-sm whitespace-nowrap flex items-center gap-2"
            >
              <i className="fas fa-paper-plane text-xs"></i>
              Contact
            </a>
            <button 
              className={`transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </nav>

          {/* Mobile Menu Button with Hover Effect */}
          <button 
            className={`md:hidden text-xl transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Tablet & Mobile Navigation Menu with Hover Effects */}
        {(isMenuOpen) && (
          <nav className="md:block lg:hidden mt-4 pt-4 border-t border-gray-200/20 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg -mx-4 px-4 pb-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="group flex items-center justify-between py-3 px-3 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <i className="fas fa-chevron-right text-xs text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform duration-300"></i>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}