import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import nexus from '../../Assets/project-management-software-blog-1024x578-1.jpeg'
import HMS from '../../Assets/HMSimg.png'
import RMS from '../../Assets/RMSimg.webp'
import './Projects.css'

const projects = [
  {
    id: "01",
    title: 'NexusAI – AI-Powered Smart Project Management & Team Collaboration Platform',
    category: 'Full Stack MERN',
    description: 'Developed a MERN-based project management platform with AI-powered task assistance, team collaboration, authentication, and real-time features.',
    image: nexus,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Gemini AI','Socket.IO'],
    liveLink: 'https://nexusai-pm.vercel.app/auth/login',
    githubLink: 'https://github.com/rohitvidhate7/NexusAI'
  },
  {
    id: "02",
    title: 'Hospital Management System',
    category: 'Full Stack Web App',
    description: 'Developed a full-stack hospital management system to manage patients, doctors, appointments, and billing using MongoDB.',
    image: HMS,
    tags: ['React', 'Express', 'MongoDB', 'Node.js', 'REST API'],
    liveLink: 'https://github.com/rohitvidhate7/Hospital-Management-System',
    githubLink: 'https://github.com/rohitvidhate7/Hospital-Management-System'
  },
  {
    id: "03",
    title: 'Restaurant Management System',
    category: 'Full Stack Web App ',
    description: 'Developed a restaurant management system for handling orders, billing, inventory, and menu management with MongoDB.',
    image: RMS,
    tags: ['React', 'Express', 'MongoDB', 'Node.js', 'REST API'],
    liveLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project',
    githubLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>03 / Selected Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A hand-picked selection of full-stack web applications, interactive experiments, and production-ready platforms.
          </p>
        </div>

        {/* Alternating Zigzag Project Showcase */}
        <div className="projects-zigzag-container">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0

            return (
              <motion.article 
                key={project.id}
                className={`project-zigzag-item ${isReversed ? 'is-reversed' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Mockup Preview Column */}
                <div className="project-preview-col">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="preview-browser-frame"
                  >
                    <div className="browser-header">
                      <div className="browser-dots">
                        <span className="dot dot-red" />
                        <span className="dot dot-yellow" />
                        <span className="dot dot-green" />
                      </div>
                      <span className="browser-url">rohit.dev/projects/{project.id}</span>
                    </div>

                    <div className="preview-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="preview-img" 
                      />
                      <div className="preview-hover-overlay">
                        <span className="preview-view-btn">
                          View Project <FaExternalLinkAlt />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Content & Details Column */}
                <div className="project-details-col">
                  <div className="project-meta-top">
                    <span className="project-counter-tag">{project.id}</span>
                    <span className="project-category-badge">{project.category}</span>
                  </div>

                  <h3 className="project-main-title">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  <div className="project-desc-card">
                    <p>{project.description}</p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="project-pills-list">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dual Action Buttons: Live Demo (Accent pill) + GitHub link */}
                  <div className="project-actions-row">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-neon project-cta"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="cta-icon" />
                    </a>

                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-dark project-github-cta"
                    >
                      <FaGithub className="cta-icon" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
