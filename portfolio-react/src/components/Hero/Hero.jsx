import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './Hero.css'
import { assets } from './assets'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const texts = ['Full Stack Developer', 'Frontend Specialist', 'React Developer']
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    let charIndex = 0
    let isDeleting = false
    const currentText = texts[textIndex]

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        setTypedText(currentText.substring(0, charIndex + 1))
        charIndex++
        if (charIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true
          }, 2000)
        }
      } else {
        setTypedText(currentText.substring(0, charIndex - 1))
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearInterval(typeInterval)
  }, [textIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello! 👋 I'm
          </motion.p>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="name-highlight">Rohit</span> Vidhate
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Passionate Full Stack Developer with hands-on experience in MERN stack, 
            frontend development, cloud basics, and data analytics. Building modern, 
            responsive, and user-friendly web experiences.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="./src/Assets/RohitVidhate CV.pdf" 
              className="btn-secondary"
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <motion.a 
              href="https://www.linkedin.com/in/rohit-vidhate-323b3a282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, color: '#0A66C2' }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://github.com/rohitvidhate7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ y: -5, color: '#000000' }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="mailto:rohitvidhate3@gamil.com" 
              className="social-icon"
              whileHover={{ y: -5, color: '#EA4335' }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img 
              src={assets.hero} 
              alt="Rohit Vidhate" 
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}

export default Hero
