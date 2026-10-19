import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiArrowUp, FiCheckCircle } from 'react-icons/fi'
import './Services.css'

const services = [
  {
    id: "01",
    title: "Full Stack MERN Development",
    tagline: "Scalable end-to-end web apps with modern database and API architectures.",
    desc: "Complete architectural development of web applications using MongoDB, Express, React, and Node.js. From secure JWT/OAuth authentication to robust database schema design and optimized query execution.",
    deliverables: ["Full-Scale Web Applications", "RESTful & GraphQL APIs", "Secure Authentication & Payments", "Admin Dashboards"],
    tools: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT"]
  },
  {
    id: "02",
    title: "Modern Frontend & Motion Design",
    tagline: "Pixel-perfect, high-contrast user interfaces with fluid animations.",
    desc: "Transforming creative ideas into responsive, accessible, and breathtaking user interfaces. I employ Framer Motion, modern CSS architectures, and micro-interactions that elevate user delight without compromising speed.",
    deliverables: ["Interactive Single Page Apps", "Design System Components", "Smooth Micro-animations", "Mobile-First Responsiveness"],
    tools: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS", "Vanilla CSS"]
  },
  {
    id: "03",
    title: "API Engineering & Backend Architecture",
    tagline: "High-throughput server logic, database design, and microservices.",
    desc: "Designing clean, scalable RESTful API endpoints, server-side data validation, third-party payment gateways (Stripe, PayPal), and real-time sockets for instantaneous communication.",
    deliverables: ["Custom API Endpoints", "Database Modeling & Indexing", "Webhook & Third-Party Integrations", "Secure Data Pipelines"],
    tools: ["Node.js", "Express", "MySQL", "MongoDB", "Postman", "REST APIs"]
  },
  {
    id: "04",
    title: "AI & LLM Integration",
    tagline: "Integrating intelligent LLMs and generative capabilities into web platforms.",
    desc: "Bridging modern full-stack web applications with state-of-the-art AI models. Building conversational agents, intelligent prompt engineering pipelines, and smart automation workflows.",
    deliverables: ["LLM & Chatbot Workflows", "OpenAI & Gemini API Integrations", "Automated Content Pipelines", "Vector Search Solutions"],
    tools: ["LangChain", "OpenAI API", "Google Gemini API", "Python", "Vercel AI SDK"]
  },
  {
    id: "05",
    title: "Cloud Deployment & DevOps Basics",
    tagline: "Containerization, automated CI/CD, and rock-solid cloud hosting.",
    desc: "Streamlining application deployment with Docker containerization, cloud infrastructure basics on AWS, and edge deployments on Vercel/Netlify for low latency and high availability.",
    deliverables: ["Docker Containerization", "Automated CI/CD Pipelines", "SSL & Domain Setup", "Cloud Deployment on AWS & Vercel"],
    tools: ["Docker", "AWS (EC2/S3)", "Vercel", "Netlify", "GitHub Actions", "Firebase"]
  },
  {
    id: "06",
    title: "Web Performance & Technical SEO",
    tagline: "Ultra-fast load times, Core Web Vitals optimization, and clean indexability.",
    desc: "Auditing and optimizing web applications to achieve 95+ scores on Google Lighthouse. Eliminating layout shifts, code splitting bundles, and structuring semantic markup for top search engine visibility.",
    deliverables: ["Core Web Vitals Optimization", "Lighthouse 95+ Audits", "Asset & Bundle Compression", "Technical SEO & Meta Tags"],
    tools: ["Google Lighthouse", "Web Vitals", "Chrome DevTools", "Semantic HTML5", "Vite"]
  }
]

const Services = () => {
  const [active, setActive] = useState(0) // Open first service by default for immediate visual impact

  const toggleAccordion = (idx) => {
    setActive(active === idx ? null : idx)
  }

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>02 / Capabilities</span>
          </div>
          <h2 className="section-title">
            What We <span className="neon-text">Can Do</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive full-stack solutions tailored for modern businesses, startups, and innovative digital products.
          </p>
        </div>

        {/* Step 3: Accordion Services with Framer Motion */}
        <div className="services-accordion-list">
          {services.map((item, idx) => {
            const isOpen = active === idx

            return (
              <motion.div
                key={item.id}
                onClick={() => toggleAccordion(idx)}
                className={`service-row ${isOpen ? 'active-row' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Header Row */}
                <div className="service-row-header">
                  <div className="service-header-left">
                    <span className="service-number">{item.id}</span>
                    <h3 className="service-title">{item.title}</h3>
                  </div>
                  
                  <div className="service-header-right">
                    <span className="service-tagline-preview">{item.tagline}</span>
                    <div className="service-arrow-btn">
                      {isOpen ? <FiArrowUp /> : <FiArrowUpRight />}
                    </div>
                  </div>
                </div>

                {/* Expanding Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="service-expand-content"
                    >
                      <div className="service-body-grid">
                        <div className="service-desc-col">
                          <p className="service-full-desc">{item.desc}</p>
                          <div className="service-deliverables">
                            <span className="service-sub-label">Key Deliverables:</span>
                            <ul className="deliverables-list">
                              {item.deliverables.map((deliv, dIdx) => (
                                <li key={dIdx}>
                                  <FiCheckCircle className="check-icon" />
                                  <span>{deliv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="service-tools-col">
                          <span className="service-sub-label">Core Tech & Tools:</span>
                          <div className="service-tool-pills">
                            {item.tools.map((tool, tIdx) => (
                              <span key={tIdx} className="service-tool-pill">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
