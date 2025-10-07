// src/components/sections/Services.jsx
export default function Services() {
  const services = [
    {
      icon: "fas fa-shopping-cart",
      title: "Sales",
      description: "We offer a wide range of currency counting machines from leading manufacturers to meet various business needs."
    },
    {
      icon: "fas fa-tools", 
      title: "Service & Maintenance",
      description: "Our expert technicians provide comprehensive maintenance and repair services to keep your equipment running smoothly."
    },
    {
      icon: "fas fa-headset",
      title: "Support", 
      description: "We offer ongoing technical support and training to ensure you get the most out of your currency counting equipment."
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your currency processing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 group"
            >
              <div className="text-4xl text-blue-600 mb-4 group-hover:text-white">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}