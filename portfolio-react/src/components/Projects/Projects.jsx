import { motion } from 'framer-motion'
import ecom from '../../Assets/ecom.png'
import htl from '../../Assets/htl img.png'
import music from '../../Assets/music img.png'
import glry from '../../Assets/glry img.png'
import calci from '../../Assets/calci1.png'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Clothing-E-commerce Project',
      description: 'A full-stack e-commerce application with user authentication, shopping cart, and payment integration.',
      image: ecom,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://github.com/rohitvidhate7/Clothing-E-commerce.git',
      githubLink: 'https://github.com/rohitvidhate7/Clothing-E-commerce.git'
    },
    {
      id: 2,
      title: 'Restaurant Project',
      description: 'Hotel reservation system with room selection, booking management, and admin dashboard.',
      image: htl,
      tags: ['React', 'Express', 'MySQL'],
      liveLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project.git',
      githubLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project.git'
    },
    {
      id: 3,
      title: 'Music Player App',
      description: 'Feature-rich music player with playlist management, audio visualization, and dark mode.',
      image: music,
      tags: ['React', 'Redux', 'Firebase', 'Spotify API'],
      liveLink: 'https://github.com/rohitvidhate7/MyMusic.git',
      githubLink: 'https://github.com/rohitvidhate7/MyMusic.git'
    },
    {
      id: 4,
      title: 'Gallery App',
      description: 'Image gallery application with categories, search functionality, and lightbox view.',
      image: glry,
      tags: ['React', 'CSS Grid', 'Framer Motion'],
      liveLink: 'https://github.com/rohitvidhate7/MyGallery',
      githubLink: 'https://github.com/rohitvidhate7/MyGallery'
    },
    {
      id: 5,
      title: 'Calculator App',
      description: 'Modern calculator with scientific functions, history tracking, and responsive design.',
      image: calci,
      tags: ['JavaScript', 'HTML', 'CSS'],
      liveLink: 'https://github.com/rohitvidhate7/MyCalculator',
      githubLink: 'https://github.com/rohitvidhate7/MyCalculator'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Some of My Recent Works
        </motion.p>
      </div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ 
              y: -12,
              scale: 1.02
            }}
          >
            <div className="project-card-inner">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
