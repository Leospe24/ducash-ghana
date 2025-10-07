// src/components/common/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DuCash Ghana Ltd</h3>
            <p className="text-gray-400">
              Leading provider of currency processing solutions in Ghana, offering sales and service of durable desktop bank note counters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                PO Box 676 Adum, Kumasi
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-blue-400"></i>
                +233 550 621 006
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                info@ducashghana.com
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} DuCash Ghana Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}