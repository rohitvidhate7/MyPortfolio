import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaArrowRight,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaPython,
  FaDatabase
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress, 
  SiRedux, 
  SiFirebase, 
  SiMysql,
  SiFramer
} from 'react-icons/si'
import rohit2 from '../../Assets/aboutrohit-img.png'
import './About.css'

const techBadges = [
  { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
  { name: 'Express', icon: <SiExpress color="#ffffff" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38BDF8" /> },
  { name: 'Framer Motion', icon: <SiFramer color="#EA4C89" /> },
  { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
  { name: 'Redux Toolkit', icon: <SiRedux color="#764ABC" /> },
  { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt color="#F05032" /> },
]

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>01 / Overview</span>
          </div>
          <h2 className="section-title">
            Passionate About <span className="neon-text">Engineering</span> & <span className="metallic-text">Design</span>
          </h2>
          <p className="section-subtitle">
            A developer who bridges the gap between sophisticated technical architecture and seamless visual interaction.
          </p>
        </div>

        {/* Two-Column Split Layout */}
        <div className="about-split-layout">
          {/* Left Column: Professional Photo Card */}
          <motion.div 
            className="about-photo-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-photo-frame">
              <img 
                src={rohit2} 
                alt="Rohit Vidhate" 
                className="about-portrait-img" 
              />
              <div className="photo-corner-decor tl" />
              <div className="photo-corner-decor tr" />
              <div className="photo-corner-decor bl" />
              <div className="photo-corner-decor br" />
              
              {/* Floating Status Card */}
              <div className="photo-status-badge">
                <span className="status-live-dot" />
                <div>
                  <span className="status-mini-label">Status</span>
                  <span className="status-main-text">Open for Full-Time & Freelance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Intro Card */}
          <motion.div 
            className="about-info-col"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="intro-card glass-card">
              <h3 className="intro-heading">
                Hello, I'm <span className="neon-text">Rohit Vidhate</span> — a developer obsessed with speed, modern aesthetics, and clean code.
              </h3>
              
              <div className="intro-paragraphs">
                <p>
                  I specialize in building full-stack web applications using the <strong>MERN stack</strong> and modern frontend ecosystems. I love creating digital products that don't just solve problems, but feel incredibly smooth and responsive.
                </p>
                <p>
                  Currently pursuing my <strong>BE in Electronic and Computer Engineering</strong> at Pune University (2024–2027), I bring hands-on experience developing full-scale e-commerce platforms, booking management systems, and interactive UI experiences.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="intro-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon"><FaGraduationCap /></div>
                  <div>
                    <span className="highlight-label">Degree</span>
                    <span className="highlight-value">BE Electronic & Computer Eng.</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon"><FaBriefcase /></div>
                  <div>
                    <span className="highlight-label">Experience</span>
                    <span className="highlight-value">Full Stack Web Development</span>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon"><FaAward /></div>
                  <div>
                    <span className="highlight-label">Achievements</span>
                    <span className="highlight-value">SIH Hackathon & Certifications</span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="about-stats-row">
                <div className="stat-pill">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">15+</span>
                  <span className="stat-label">Tech Stack Tools</span>
                </div>
                <div className="stat-pill">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Dedicated Focus</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="intro-actions">
                <a href="#services" className="btn-neon">
                  <span>Explore What I Do</span>
                  <FaArrowRight />
                </a>
                <a href="#contact" className="btn-dark">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Step 2: Infinite Tech Stack Marquee */}
        <div className="marquee-wrapper">
          <div className="marquee-header">
            <span className="marquee-label">Core Technologies & Ecosystem</span>
            <div className="marquee-line" />
          </div>

          <div className="marquee-container">
            <div className="marquee-track">
              {/* Track set 1 */}
              {techBadges.map((badge, idx) => (
                <div key={`track1-${idx}`} className="tech-marquee-badge">
                  <span className="tech-icon">{badge.icon}</span>
                  <span className="tech-name">{badge.name}</span>
                </div>
              ))}
              {/* Duplicate track set 2 for seamless infinite loop */}
              {techBadges.map((badge, idx) => (
                <div key={`track2-${idx}`} className="tech-marquee-badge">
                  <span className="tech-icon">{badge.icon}</span>
                  <span className="tech-name">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
