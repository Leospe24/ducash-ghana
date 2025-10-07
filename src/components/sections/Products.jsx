import { products } from '../../data/products'

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">
            Discover our range of high-quality currency counting machines designed for accuracy and durability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {product.badge}
                  </div>
                )}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">
                  GHS {product.price.toLocaleString()}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <a 
                    href="#contact" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg"
                  >
                    Inquire Now
                  </a>
                  <button className="w-12 h-12 border-2 border-gray-300 hover:border-blue-600 text-gray-600 hover:text-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <i className="fas fa-info"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}