export default function Features() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "High-Speed Counting",
      description: "Process up to 1,000 notes per minute with our advanced counting technology"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Advanced Security",
      description: "Multi-layer detection systems including UV, MG, IR for counterfeit prevention"
    },
    {
      icon: "fas fa-cogs",
      title: "Reliable Performance",
      description: "Engineered for durability and consistent performance in demanding environments"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DuCash Ghana</h2>
          <p className="text-xl text-gray-600">
            We provide cutting-edge currency processing solutions with unmatched reliability and precision
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}