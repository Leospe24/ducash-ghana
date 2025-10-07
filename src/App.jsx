import Header from './components/common/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Products from './components/sections/Products'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/common/Footer'
import WhatsAppFloat from './components/common/WhatsAppFloat' // Make sure this line exists

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat /> {/* Make sure this line exists */}
    </div>
  )
}

export default App