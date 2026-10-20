import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaArrowRight, FaCode } from 'react-icons/fa'
import { assets } from './assets'
import resumePDF from '../../Assets/Rohit_Vidhate_Resume.pdf'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Ambient Radial Glow & Grid Background */}
      <div className="hero-ambient-glow" />
      <div className="hero-dot-grid" />

      {/* Hero Stage with 3D Layering */}
      <div className="hero-stage">
        {/* Step 1: Perfectly Centered Massive Metallic Background Text */}
        <div className="hero-giant-text-container">
          <motion.h1 
            className="hero-giant-text select-none"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            PORTFOLIO
          </motion.h1>
        </div>

        {/* Step 2: Cutout Portrait Layer Intersecting in Front of Text */}
        <motion.div 
          className="hero-portrait-wrapper"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img 
            src={assets.heroRemoveBg} 
            alt="Rohit Vidhate - Software Developer" 
            className="hero-portrait-img"
          />
          {/* Bottom vignette blending portrait cleanly into dark background */}
          <div className="hero-portrait-vignette" />
        </motion.div>

        {/* Step 3: Foreground Floating Badges */}
        {/* Role Badge - Left */}
        <motion.div 
          className="hero-floating-badge badge-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ y: -4, scale: 1.02 }}
        >
          <div className="badge-status-dot" />
          <div>
            <span className="badge-subtitle">Available For Opportunities</span>
            <h3 className="badge-title">Software Developer</h3>
          </div>
        </motion.div>

        {/* Tech Stack Badge - Right */}
        <motion.div 
          className="hero-floating-badge badge-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ y: -4, scale: 1.02 }}
        >
          <div className="badge-icon-box">
            <FaCode />
          </div>
          <div>
            <span className="badge-subtitle">Specialization</span>
            <h3 className="badge-title">MERN & Full Stack</h3>
          </div>
        </motion.div>

        {/* Developer Name Pill - Exactly Centered at the Base of the Photo */}
        <div className="hero-dev-tag-container">
          <motion.div 
            className="hero-dev-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span className="hero-name-pill">ROHIT VIDHATE</span>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Action Controls */}
      <motion.div 
        className="hero-bottom-bar"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="hero-cta-group">
          <a href="#contact" className="btn-neon">
            <span>Contact Me</span>
            <FaArrowRight className="btn-arrow" />
          </a>
          <a href="#projects" className="btn-dark">
            <span>Selected Work</span>
          </a>
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Rohit_Vidhate_Resume.pdf"
            className="btn-dark btn-icon-only"
            title="Download Resume"
          >
            <FaFileDownload />
            <span>CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-social-strip">
          <a 
            href="https://github.com/rohitvidhate7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-pill"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/rohit-vidhate-323b3a282" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-pill"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:rohitvidhate3@gmail.com" 
            className="social-pill"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Subtle Scroll Cue */}
      <div className="hero-scroll-cue">
        <span className="scroll-label">SCROLL</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  )
}

export default Hero
