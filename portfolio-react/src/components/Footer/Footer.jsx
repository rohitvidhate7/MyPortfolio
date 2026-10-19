import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerNavLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top footer row */}
        <div className="footer-top-row">
          <div className="footer-brand-info">
            <div className="footer-status-pill">
              <span className="footer-pulse-dot" />
              <span>Available for Opportunities</span>
            </div>
            <h3 className="footer-tagline-text">
              Transforming complex engineering into sleek digital experiences.
            </h3>
          </div>

          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-grid">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-nav-item">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-col">
            <span className="footer-col-title">Socials</span>
            <div className="footer-social-list">
              <a 
                href="https://github.com/rohitvidhate7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/rohit-vidhate-323b3a282" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:rohitvidhate3@gmail.com" 
                className="footer-social-btn"
                aria-label="Email"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Step 5: Big Bold Brand Footer */}
        <div className="footer-giant-brand-banner">
          <h2 className="giant-brand-text select-none">
            ROHIT VIDHATE
          </h2>
        </div>

        {/* Bottom meta row */}
        <div className="footer-bottom-meta">
          <p className="copyright-text">
            © {currentYear} Rohit Vidhate. All Rights Reserved. Crafted with React & Framer Motion.
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
