import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import StudentPortal from './components/StudentPortal'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-midnight text-slate-100 overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none bg-hero-glow opacity-70" />
      <div className="relative z-10">
        <Navbar />
        <main className="space-y-32 px-4 pb-16 pt-6 sm:px-6 lg:px-10">
          <Hero />
          <About />
          <Services />
          <StudentPortal />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
