import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaDownload, FaEnvelope, FaGraduationCap, FaHeart } from 'react-icons/fa'
import rohit2 from '../../Assets/rohit2.jpg'
import './About.css'

const About = () => {
  const containerRef = useRef(null)
  
  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30])
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -20])
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const borderVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // Stats data
  const stats = [
    { number: "10+", label: "Projects" },
    { number: "2+", label: "Years" },
    { number: "5+", label: "Skills" }
  ]

  return (
    <section id="about" className="about" ref={containerRef}>
      {/* Animated Background */}
      <div className="about-bg">
        <motion.div className="neon-orb orb-1" style={{ y: y1 }}></motion.div>
        <motion.div className="neon-orb orb-2" style={{ y: y2 }}></motion.div>
        <motion.div className="neon-orb orb-3" style={{ y: y3 }}></motion.div>
        <div className="grid-pattern"></div>
      </div>

      <motion.div 
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ opacity, scale }}
      >
        {/* Left Column - Image with Animated Border */}
        <motion.div className="about-image-wrapper" variants={borderVariants}>
          <div className="image-border-container">
            <div className="gradient-border">
              <div className="gradient-border-inner"></div>
            </div>
            <div className="image-container">
              <img 
                src={rohit2} 
                alt="Rohit Vidhate" 
              />
              <div className="image-glow"></div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="stats-container">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div className="about-content" variants={itemVariants}>
          {/* Section Label */}
          <motion.div className="section-label" variants={itemVariants}>
            <span className="label-dot"></span>
            <span className="label-text">About Me</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 className="about-title" variants={itemVariants}>
            Building <span className="neon-text">Digital Experiences</span> That Inspire
          </motion.h2>

          {/* Description */}
          <motion.div className="about-description" variants={itemVariants}>
            <p>
              I'm a <strong>Full-Stack Developer</strong> passionate about creating modern, 
              responsive, and user-friendly web applications. With expertise in the MERN stack, 
              I transform ideas into elegant digital solutions.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving, 
              ensuring every project delivers exceptional user experiences and measurable value.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards" variants={itemVariants}>
            <motion.div 
              className="info-card education"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <div className="card-content">
                <h4>Education</h4>
                <p className="degree">BE in Electronic and Computer Engineering</p>
                <p className="university">Pune University</p>
                <span className="year">2024 - 2027</span>
              </div>
            </motion.div>

            <motion.div 
              className="info-card interests"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="card-icon">
                <FaHeart />
              </div>
              <div className="card-content">
                <h4>Interests</h4>
                <div className="interest-tags">
                  <span>Reading</span>
                  <span>Sport</span>
                  <span>Music</span>
                  <span>Fitness</span>
                  <span>Learning New Technologys</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="cta-container" variants={itemVariants}>
            <motion.a 
              href="./src/Assets/RohitVidhate CV.pdf" 
              className="cta-button primary"
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload /> Download CV
            </motion.a>
            <motion.a 
              href="#contact" 
              className="cta-button secondary"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(138, 43, 226, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope /> Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
