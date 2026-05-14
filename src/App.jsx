import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import StudentPortal from './components/StudentPortal'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

function LandingPage() {
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
