import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ecom from '../../Assets/ecom.png'
import htl from '../../Assets/htl img.png'
import music from '../../Assets/music img.png'
import glry from '../../Assets/glry img.png'
import calci from '../../Assets/calci1.png'
import './Projects.css'

const projects = [
  {
    id: "01",
    title: 'Clothing E-Commerce Platform',
    category: 'Full Stack MERN',
    description: 'A full-stack modern fashion e-commerce application equipped with user authentication, product catalog filters, dynamic shopping cart, and Stripe payment integration for secure checkout.',
    image: ecom,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: 'https://github.com/rohitvidhate7/Clothing-E-commerce.git',
    githubLink: 'https://github.com/rohitvidhate7/Clothing-E-commerce.git'
  },
  {
    id: "02",
    title: 'Restaurant & Hospitality Portal',
    category: 'Full Stack Web App',
    description: 'A comprehensive hotel reservation and dining management platform with real-time table availability, order tracking, responsive booking workflows, and an admin management dashboard.',
    image: htl,
    tags: ['React', 'Express', 'MySQL', 'Node.js', 'REST API'],
    liveLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project.git',
    githubLink: 'https://github.com/rohitvidhate7/React-Restaurant-Project.git'
  },
  {
    id: "03",
    title: 'BeatStream Music Player',
    category: 'Frontend & APIs',
    description: 'Feature-rich streaming music player featuring customizable playlists, audio visualizer canvas, Spotify API integration, volume modulation, and persistent queue state.',
    image: music,
    tags: ['React', 'Redux Toolkit', 'Firebase', 'Spotify API'],
    liveLink: 'https://github.com/rohitvidhate7/MyMusic.git',
    githubLink: 'https://github.com/rohitvidhate7/MyMusic.git'
  },
  {
    id: "04",
    title: 'Aura Interactive Gallery',
    category: 'Motion & Visual UI',
    description: 'Curated image gallery application with smart categorization, instant search, responsive fluid grid layouts, and buttery smooth lightbox transitions using Framer Motion.',
    image: glry,
    tags: ['React', 'Framer Motion', 'CSS Grid', 'Vite'],
    liveLink: 'https://github.com/rohitvidhate7/MyGallery',
    githubLink: 'https://github.com/rohitvidhate7/MyGallery'
  },
  {
    id: "05",
    title: 'Precision Scientific Calculator',
    category: 'Vanilla JavaScript',
    description: 'Responsive desktop-grade scientific calculator with memory registers, trigonometry functions, live history logs, and instant keyboard navigation.',
    image: calci,
    tags: ['JavaScript (ES6+)', 'Modern UI', 'CSS3', 'HTML5'],
    liveLink: 'https://github.com/rohitvidhate7/MyCalculator',
    githubLink: 'https://github.com/rohitvidhate7/MyCalculator'
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
