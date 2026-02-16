import { motion } from 'framer-motion'
import './Certificates.css'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      image: "./src/Assets/cert1.jpg",
      title: "Full Stack Web Development",
      issuer: "Coursera",
      description: "Comprehensive MERN stack development certification"
    },
    {
      id: 2,
      image: "./src/Assets/cert2.jpg",
      title: "React.js Fundamentals",
      issuer: "Udemy",
      description: "Mastering React.js for modern web applications"
    },
    {
      id: 3,
      image: "./src/Assets/cert3.jpg",
      title: "JavaScript Advanced Concepts",
      issuer: "freeCodeCamp",
      description: "Deep dive into JavaScript ES6+ features"
    },
    {
      id: 4,
      image: "./src/Assets/cert4.jpg",
      title: "Node.js & Express",
      issuer: "Codecademy",
      description: "Backend development with Node.js"
    },
    {
      id: 5,
      image: "./src/Assets/cert5.jpg",
      title: "MongoDB Certification",
      issuer: "MongoDB University",
      description: "Database design and management with MongoDB"
    },
    {
      id: 6,
      image: "./src/Assets/cert6.jpg",
      title: "Google Cloud Fundamentals",
      issuer: "Google",
      description: "Introduction to cloud computing with GCP"
    },
    {
      id: 7,
      image: "./src/Assets/cert7.jpg",
      title: "Data Analytics Bootcamp",
      issuer: "DataCamp",
      description: "Data analysis and visualization with Python"
    },
    {
      id: 8,
      image: "./src/Assets/cert8.jpg",
      title: "Git & GitHub Essentials",
      issuer: "GitHub",
      description: "Version control and collaboration best practices"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="certificates" className="certificates">
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

      <div className="certificates-container">
        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(138, 43, 226, 0.3)",
                borderColor: "rgba(138, 43, 226, 0.5)"
              }}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="view-btn">
                    View Certificate
                  </a>
                </div>
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
