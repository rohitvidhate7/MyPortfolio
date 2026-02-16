import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: 'Restaurant Website',
      description: 'Restaurant website design with menu, animations and responsive layout.',
      image: '/src/Assets/htl img.png',
      github: 'https://github.com/rohitvidhate7/MyRestaurantsProject',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive']
    },
    {
      id: 2,
      name: 'Gallery',
      description: 'Image gallery project with modern UI and smooth animations.',
      image: '/src/Assets/glry img.png',
      github: 'https://github.com/rohitvidhate7/MyGallery',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Animations']
    },
    {
      id: 3,
      name: 'Calculator App',
      description: 'Simple calculator built using JavaScript with clean UI.',
      image: '/src/Assets/calci1.png',
      github: 'https://github.com/rohitvidhate7/MyCalculator',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 4,
      name: 'Music Player',
      description: 'Music player application with modern UI and controls.',
      image: '/src/Assets/music img.png',
      github: 'https://github.com/rohitvidhate7/MyMusic',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Audio API']
    },
    {
      id: 5,
      name: 'Book Store',
      description: 'Book store website with responsive design and shopping cart.',
      image: '/src/Assets/book.png',
      github: 'https://github.com/rohitvidhate7/MyBookStore',
      technologies: ['HTML', 'CSS', 'JavaScript', 'E-commerce']
    },
    {
      id: 6,
      name: 'E-Commerce Website',
      description: 'MERN stack E-Commerce website with all features.',
      image: '/src/Assets/ecom.png',
      github: 'https://github.com/rohitvidhate7/E-Commerce-web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
          Some of my recent work
        </motion.p>
      </div>

      <div className="projects-container">
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.name}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                ×
              </button>
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.name} />
              </div>
              <div className="modal-info">
                <h3>{selectedProject.name}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
