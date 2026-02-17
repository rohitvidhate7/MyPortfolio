import { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  
  const lastScrollY = useRef(0);
  const mobileMenuRef = useRef(null);

  // Navigation links - PRESERVED as per requirements
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/show navbar based on scroll direction
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;

      // Update active link based on scroll position - PRESERVED logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveLink(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  // Close mobile menu on link click
  const handleLinkClick = (linkId) => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
    setActiveLink(linkId);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        const toggleButton = document.querySelector('.mobile-menu-toggle');
        if (toggleButton && !toggleButton.contains(event.target)) {
          setIsMobileMenuOpen(false);
          document.body.style.overflow = '';
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-container">
        {/* Logo - PRESERVED */}
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick('home')}>
          <img sizes='32x32'
            src="https://media.craiyon.com/2025-10-21/QL2tLFMvRXqA_hz68FeGeA.webp" 
            alt="Rohit" 
          />
          <span className="logo-text">RV</span>
        </a>

        {/* Desktop Navigation - PRESERVED links and IDs */}
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle - PRESERVED */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay - PRESERVED links and IDs */}
      <div 
        className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        ref={mobileMenuRef}
      >
        <ul className="mobile-nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
