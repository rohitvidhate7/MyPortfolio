import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  return (
    <div className="app">
      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 9,
          y: mousePosition.y - 9
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.08 }}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Big Bold Brand Footer */}
      <Footer />
    </div>
  )
}

export default App
