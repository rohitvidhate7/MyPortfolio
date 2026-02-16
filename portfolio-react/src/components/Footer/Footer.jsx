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

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span>Rohit Vidhate</span>
          </div>
          <p>
            Full Stack Developer | Building modern, responsive & 
            user-friendly web experiences.
          </p>
        </motion.div>

        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <motion.a
              href="https://github.com/rohitvidhate7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rohit-vidhate-323b3a282"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:rohitvidhate3@gamil.com"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <RiMailSendFill />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Rohit Vidhate | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
