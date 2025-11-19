import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
