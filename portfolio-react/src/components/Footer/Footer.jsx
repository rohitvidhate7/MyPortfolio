import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiMailSendFill } from 'react-icons/ri'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/rohitvidhate7',
      icon: <FaGithub />,
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohit-vidhate-323b3a282',
      icon: <FaLinkedin />,
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      href: 'mailto:rohitvidhate3@gamil.com',
      icon: <RiMailSendFill />,
      ariaLabel: 'Send me an email'
    }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      {/* Background decoration */}
      <div className="footer-glow footer-glow-1" />
      <div className="footer-glow footer-glow-2" />
      
      {/* Top gradient line with animation */}
      <motion.div 
        className="footer-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <div className="footer-container">
        {/* Main content grid */}
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="logo-text">Rohit Vidhate</span>
              <span className="logo-dot" />
            </motion.div>
            <p className="footer-tagline">
              Full Stack Developer <span className="separator">|</span> Building modern, responsive & 
              user-friendly web experiences.
            </p>
            <motion.div 
              className="footer-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#contact" 
                className="cta-button"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contact')
                }}
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div className="footer-links" variants={itemVariants}>
            <h3 className="footer-heading">
              <span className="heading-icon">◈</span>
              Quick Links
            </h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <a 
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    <span className="link-text">{link.name}</span>
                    <span className="link-arrow">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Section */}
          <motion.div className="footer-social" variants={itemVariants}>
            <h3 className="footer-heading">
              <span className="heading-icon">◈</span>
              Connect With Me
            </h3>
            <p className="social-description">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <motion.div 
              className="social-icons"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  variants={socialVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="footer-bottom-content">
          <p className="copyright">
            © {currentYear} <span className="highlight">Rohit Vidhate</span>. All Rights Reserved.
          </p>
          <p className="footer-credit">
            Built with <span className="heart">♥</span> using React
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
