import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Certificates.css'

// Certificate category icons (using emoji for simplicity - can be replaced with SVG icons)
const categoryIcons = {
  web: '🌐',
  cloud: '☁️',
  data: '📊',
  ai: '🤖',
  programming: '💻',
  internship: '💼',
  hackathon: '🏆'
  
}

const certificates = [
  {
    id: 1,
    title: "Front-End Web Development",
    issuer: "N.S.D.C",
    category: "web",
    year: "2025",
    description: "Comprehensive MERN stack development certification",
    image: "./src/Assets/cert1.jpg",
    credentialUrl: "./src/Assets/cert1.jpg"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    category: "cloud",
    year: "2025",
    description: "Cloud architecture and design principles",
    image: "./src/Assets/cert2.jpg",
    credentialUrl: "./src/Assets/cert2.jpg"
  },
  {
    id: 3,
    title: "Data Science & Analytics ",
    issuer: "Microsoft",
    category: "programming",
    year: "2025",
    description: "C# programming language certification",
    image: "./src/Assets/cert3.jpg",
    credentialUrl: "./src/Assets/cert3.jpg"
  },
  {
    id: 4,
    title: "Microsoft Certified: C# Fundamentals",
    issuer: "DataCamp",
    category: "data",
    year: "2025",
    description: "Data analysis and visualization with Python",
    image: "./src/Assets/cert4.jpg",
    credentialUrl: "./src/Assets/cert4.jpg"
  },
  {
    id: 5,
    title: "Solutions Architect",
    issuer: "Forage",
    category: "ai",
    year: "2025",
    description: "Generative AI and LLM implementation",
    image: "./src/Assets/cert5.jpg",
    credentialUrl: "./src/Assets/cert5.jpg"
  },
  {
    id: 6,
    title: "GenAI Job Simulation",
    issuer: "Udemy",
    category: "web",
    year: "2025",
    description: "Advanced React.js patterns and best practices",
    image: "./src/Assets/cert6.jpg",
    credentialUrl: "./src/Assets/cert6.jpg"
  },
  {
    id: 7,
    title: "Front-End Web Development ",
    issuer: "CodeAlpha",
    category: "internship",
    year: "2025",
    description: "Frontend Development Intern with hands-on experience in creating responsive and interactive web applications.",
    image: "./src/Assets/cert7.jpg",
    credentialUrl: "./src/Assets/cert7.jpg"
  },
  {
    id: 8,
    title: "Hackathon",
    issuer: "SIH-2025",
    category: "hackathon",
    year: "2025",
    description: "Participated in a hackathon to design and develop an innovative solution within a limited time",
    image: "./src/Assets/cert8.jpg",
    credentialUrl: "./src/Assets/cert8.jpg"
  }
]

const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Dev' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'data', label: 'Data' },
  { id: 'ai', label: 'AI' },
  { id: 'programming', label: 'Programming' },
  { id: 'internship', label: 'Internship' },
  { id: 'hackathon', label: 'Hackathon' }
]

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCertificates = activeFilter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter)

  return (
    <section id="certificates" className="certificates">
      {/* Animated Background */}
      <div className="certificates-bg">
        <div className="certificates-orb certificates-orb-1"></div>
        <div className="certificates-orb certificates-orb-2"></div>
        <div className="certificates-orb certificates-orb-3"></div>
        <div className="certificates-grid-overlay"></div>
      </div>
      
      <div className="certificates-glow"></div>
      
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional certifications and achievements
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <motion.div 
        className="filter-tabs"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {filterTabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`filter-tab ${activeFilter === tab.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
            {activeFilter === tab.id && (
              <motion.div 
                className="tab-indicator"
                layoutId="activeTab"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <div className="certificates-container">
        <motion.div 
          className="certificates-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div 
                key={cert.id}
                className="certificate-card"
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -12,
                }}
              >
                {/* Gradient Border Effect */}
                <div className="card-gradient-border">
                  <div className="card-inner">
                    {/* Certificate Image */}
                    <div className="certificate-image">
                      <img src={cert.image} alt={cert.title} />
                      <div className="certificate-overlay">
                        <a 
                          href={cert.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="verify-btn"
                        >
                          <span>View</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="category-badge">
                        <span className="category-icon">{categoryIcons[cert.category]}</span>
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="certificate-info">
                      <div className="cert-header">
                        <h3>{cert.title}</h3>
                        <span className="year-badge">{cert.year}</span>
                      </div>
                      <p className="issuer">{cert.issuer}</p>
                      <p className="description">{cert.description}</p>
                      
                      <div className="cert-footer">
                        <span className={`category-tag ${cert.category}`}>
                          {cert.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
