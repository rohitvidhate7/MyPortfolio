import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Active section observer
      const sections = navLinks.map(link => document.getElementById(link.id))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(navLinks[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (id) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={() => handleLinkClick('home')}>
          <div className="brand-badge">RV</div>
          <span className="brand-title">Rohit Vidhate</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav-menu">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`desktop-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeNavIndicator" 
                      className="nav-active-dot" 
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-cta-group">
          <a href="#contact" className="navbar-contact-btn">
            <span>Contact</span>
            <FiArrowUpRight />
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Slide-Down Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-slide-down-menu"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-inner">
              <ul className="mobile-links-list">
                {navLinks.map((link, idx) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className={`mobile-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      <span className="mobile-link-num">0{idx + 1}</span>
                      <span className="mobile-link-text">{link.name}</span>
                      <FiArrowUpRight className="mobile-link-arrow" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu-bottom">
                <a href="#contact" className="btn-neon mobile-talk-btn" onClick={() => handleLinkClick('contact')}>
                  <span>Let's Talk</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
