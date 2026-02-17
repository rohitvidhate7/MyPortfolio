import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa'
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

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleBlur = (fieldName) => {
    setFocusedField(null)
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
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const contactInfo = [
    { icon: FaUser, label: 'Name', value: 'Rohit Vidhate', subValue: 'Full Stack Developer' },
    { icon: FaEnvelope, label: 'Email', value: 'rohitvidhate3@gmail.com', href: 'mailto:rohitvidhate3@gmail.com' },
    { icon: FaPhone, label: 'Phone', value: '+91 7709284647', href: 'tel:7709284647' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Pune, India' }
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-bg">
        <div className="contact-bg-gradient"></div>
        <div className="contact-bg-glow"></div>
      </div>

      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in touch for collaborations or just a friendly hello
        </motion.p>
      </div>

      <div className="contact-container">
        {/* Left Column - Contact Info */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-info-header">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out 
              through any of the platforms below.
            </p>
          </div>

          <motion.div 
            className="contact-details"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="contact-detail-item"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="contact-detail-icon">
                  <info.icon />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">{info.label}</span>
                  {info.href ? (
                    <a href={info.href} className="contact-detail-value">{info.value}</a>
                  ) : (
                    <span className="contact-detail-value">{info.value}</span>
                  )}
                  {info.subValue && (
                    <span className="contact-detail-sub">{info.subValue}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <motion.div 
              className="form-group"
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  placeholder=" "
                  required
                />
                <label htmlFor="name" className={focusedField === 'name' || formData.name ? 'active' : ''}>
                  Your Name
                </label>
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className={focusedField === 'email' || formData.email ? 'active' : ''}>
                  Your Email
                </label>
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={() => handleBlur('phone')}
                  placeholder=" "
                />
                <label htmlFor="phone" className={focusedField === 'phone' || formData.phone ? 'active' : ''}>
                  Phone Number (Optional)
                </label>
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.div 
              className="form-group"
              variants={formFieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="input-wrapper textarea-wrapper">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  placeholder=" "
                  rows="5"
                  required
                ></textarea>
                <label htmlFor="message" className={focusedField === 'message' || formData.message ? 'active' : ''}>
                  Your Message
                </label>
                <div className="input-border"></div>
              </div>
            </motion.div>

            <motion.button 
              type="submit" 
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 10px 40px rgba(0, 255, 255, 0.4)' } : {}}
              whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
            >
              <AnimatePresence mode="wait">
                {status === 'sending' && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content"
                  >
                    <span className="loading-spinner"></span>
                    Sending...
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content success-content"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <FaCheck />
                    </motion.div>
                    Message Sent!
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span
                    key="error"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="btn-content error-content"
                  >
                    <FaTimes />
                    Try Again
                  </motion.span>
                )}
                {status === '' && (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content"
                  >
                    Send Message
                    <FaPaperPlane className="send-icon" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
