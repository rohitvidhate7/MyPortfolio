import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheck, 
  FaTimes,
  FaClock
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b34da8bb-c168-4c43-9e46-4e32b855c70b',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 4000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 4000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      {/* Step 4: Dotted SVG Globe / Particle Matrix Background */}
      <div className="contact-globe-bg" aria-hidden="true">
        <svg className="dotted-globe-svg" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle latitude / longitude rings */}
          <ellipse cx="500" cy="300" rx="420" ry="210" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 8" />
          <ellipse cx="500" cy="300" rx="360" ry="170" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 6" />
          <ellipse cx="500" cy="300" rx="260" ry="110" stroke="rgba(196,255,0,0.08)" strokeDasharray="5 7" />
          <ellipse cx="500" cy="300" rx="150" ry="55" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
          <line x1="500" y1="50" x2="500" y2="550" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 6" />
          <line x1="100" y1="300" x2="900" y2="300" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 6" />
          
          {/* Constellation dots */}
          <circle cx="500" cy="300" r="4" fill="#c4ff00" opacity="0.8" />
          <circle cx="420" cy="240" r="3" fill="#ffffff" opacity="0.6" />
          <circle cx="580" cy="240" r="3" fill="#ffffff" opacity="0.6" />
          <circle cx="380" cy="320" r="2.5" fill="#c4ff00" opacity="0.5" />
          <circle cx="630" cy="320" r="3" fill="#ffffff" opacity="0.4" />
          <circle cx="470" cy="380" r="2.5" fill="#ffffff" opacity="0.5" />
          <circle cx="540" cy="370" r="3" fill="#c4ff00" opacity="0.6" />
          <circle cx="280" cy="280" r="2" fill="#ffffff" opacity="0.3" />
          <circle cx="720" cy="290" r="2" fill="#ffffff" opacity="0.3" />
        </svg>
        <div className="contact-radial-glow" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>04 / Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="neon-text">Great</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an internship or full-time opportunity, or just want to connect? My inbox is always open.
          </p>
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-card glass-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-desc">
                Feel free to reach out directly via email, phone, or connect with me across professional networks.
              </p>

              <div className="contact-methods-list">
                <a href="mailto:rohitvidhate3@gmail.com" className="contact-method-item">
                  <div className="method-icon-box">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <span className="method-val">rohitvidhate3@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+918624921303" className="contact-method-item">
                  <div className="method-icon-box">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="method-label">Phone / WhatsApp</span>
                    <span className="method-val">+91 8624921303</span>
                  </div>
                </a>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-val">Nashik, Maharashtra, India</span>
                  </div>
                </div>

                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <FaClock />
                  </div>
                  <div>
                    <span className="method-label">Availability</span>
                    <span className="method-val">Full-Time / Relocation / Remote</span>
                  </div>
                </div>
              </div>

              {/* Social connect pills */}
              <div className="contact-social-row">
                <span className="social-connect-label">Find Me Online:</span>
                <div className="social-pill-group">
                  <a 
                    href="https://github.com/rohitvidhate7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="connect-pill"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub /> <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rohit-vidhate-323b3a282" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="connect-pill"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Dark Form */}
          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="contact-floating-form glass-card">
              <div className="form-inner-header">
                <h3>Send a Message</h3>
                <p>Fill out the fields below and I'll get back to you within 24 hours.</p>
              </div>

              {/* Floating Input: Name */}
              <div className={`floating-group ${focusedField === 'name' || formData.name ? 'is-focused' : ''}`}>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="floating-input"
                  placeholder=" "
                />
                <label htmlFor="form-name" className="floating-label">
                  Your Full Name *
                </label>
                <div className="input-focus-line" />
              </div>

              {/* Floating Input: Email */}
              <div className={`floating-group ${focusedField === 'email' || formData.email ? 'is-focused' : ''}`}>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="floating-input"
                  placeholder=" "
                />
                <label htmlFor="form-email" className="floating-label">
                  Email Address *
                </label>
                <div className="input-focus-line" />
              </div>

              {/* Floating Input: Phone */}
              <div className={`floating-group ${focusedField === 'phone' || formData.phone ? 'is-focused' : ''}`}>
                <input
                  type="tel"
                  id="form-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="floating-input"
                  placeholder=" "
                />
                <label htmlFor="form-phone" className="floating-label">
                  Phone Number (Optional)
                </label>
                <div className="input-focus-line" />
              </div>

              {/* Floating Textarea: Message */}
              <div className={`floating-group ${focusedField === 'message' || formData.message ? 'is-focused' : ''}`}>
                <textarea
                  id="form-message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="floating-input floating-textarea"
                  placeholder=" "
                />
                <label htmlFor="form-message" className="floating-label">
                  Your Message or Project Details *
                </label>
                <div className="input-focus-line" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`btn-neon form-submit-btn ${status === 'sending' ? 'is-sending' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {status === 'sending' && (
                    <motion.span 
                      key="sending" 
                      className="submit-status-msg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="spinner-mini" />
                      <span>Transmitting...</span>
                    </motion.span>
                  )}

                  {status === 'success' && (
                    <motion.span 
                      key="success" 
                      className="submit-status-msg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaCheck />
                      <span>Message Received!</span>
                    </motion.span>
                  )}

                  {status === 'error' && (
                    <motion.span 
                      key="error" 
                      className="submit-status-msg error-msg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaTimes />
                      <span>Failed to Send. Try Again</span>
                    </motion.span>
                  )}

                  {status === '' && (
                    <motion.span 
                      key="idle" 
                      className="submit-status-msg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span>Send Message</span>
                      <FaPaperPlane />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
