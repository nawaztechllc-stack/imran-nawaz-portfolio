import { useState, useEffect } from 'react'
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Award, 
  Briefcase, 
  Code, 
  Shield, 
  Cloud,
  FileText,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['about', 'skills', 'projects', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <h2>
              <strong>Business-Aligned GRC. Trusted Outcomes.</strong>
              <br />
              Helping teams move fast, securely, compliantly, and with measurable risk reduction.
            </h2>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {['about', 'skills', 'projects', 'certifications', 'contact'].map(section => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/profile-picture.jpg" alt="Imran Nawaz" className="profile-pic" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Imran Nawaz</h1>
            <p className="hero-subtitle">Senior GRC Manager | Cloud | Security | AI | Privacy</p>
            <div className="hero-location">
              <MapPin size={18} />
              <span>Clifton, VA</span>
            </div>
            <div className="hero-actions">
              <a href="mailto:Imran.Nawaz@gmail.com" className="btn btn-primary">
                <Mail size={18} />
                Get in Touch
              </a>
              <a href="#about" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}>
                Learn More
              </a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/nawaz-imran/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="hero-tagline">
              <span>Trust. Built daily</span>
              <span className="bullet">•</span>
              <span>Risk. Made actionable</span>
              <span className="bullet">•</span>
              <span>Business goals. Aligned always</span>
              <span className="bullet">•</span>
              <span>Governance. Enabling growth.</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} className="bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                A security, governance, risk, and compliance leader who's spent my career building programs that actually work in the real world—and stand up to audits. I've led cross-functional teams through the implementation and maturation of frameworks like NIST, CMMC, ISO 27001, ISO 42001, NIST AI RMF, FedRAMP, and DoD IL4/5/6. In addition I'm comfortable navigating HIPAA, SOC 2, PCI-DSS, and SOX requirements.
              </p>
              <p>
                A big part of my work has been risk management, audit readiness, third party risk management, 
                process improvement, maturity security programs, and aligning security strategy with business 
                objectives.
              </p>
              <p>
                More recently, I've been focused on AI governance and responsible AI, helping organizations 
                make sure their AI initiatives are not only innovative, but also compliant, explainable, and 
                aligned with ethical and regulatory expectations. I care about helping teams meet their security, 
                compliance, and AI governance goals without slowing the business down.
              </p>
              <p>
                I'm known for breaking down complex security and AI risks into plain language so leaders can 
                make informed decisions and prioritize what matters. I genuinely enjoy collaborating with people 
                across the organization to meet requirements, build trust, and still keep the business moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">
                <Cloud size={32} />
              </div>
              <h3>Cloud Platforms</h3>
              <ul>
                <li>AWS Security Hub</li>
                <li>Azure Security Center</li>
              </ul>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Shield size={32} />
              </div>
              <h3>Security & Compliance</h3>
              <ul>
                <li>ISO 42001</li>
                <li>ISO 27001</li>
                <li>NIST CSF</li>
                <li>NIST 800-53</li>
                <li>FedRAMP</li>
                <li>GDPR</li>
                <li>EU AI Act</li>
              </ul>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Code size={32} />
              </div>
              <h3>Tools & Technologies</h3>
              <ul>
                <li>AWS Security Hub</li>
                <li>Tenable Nessus</li>
                <li>eMass</li>
                <li>CSAM</li>
                <li>ServiceNow</li>
                <li>Jira</li>
                <li>Confluence</li>
              </ul>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <FileText size={32} />
              </div>
              <h3>GRC Frameworks</h3>
              <ul>
                <li>NIST RMF</li>
                <li>NIST CSF 2.0</li>
                <li>ISO 27001</li>
                <li>ISO 42001</li>
                <li>NIST AI RMF</li>
                <li>CIS Controls</li>
                <li>CMMC</li>
              </ul>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Briefcase size={32} />
              </div>
              <h3>Core Competencies</h3>
              <ul>
                <li>Risk Assessment</li>
                <li>Security Auditing</li>
                <li>Policy Development</li>
                <li>Vendor Risk Management</li>
                <li>Third Party Risk Management</li>
                <li>Process Improvement</li>
                <li>AI Governance</li>
                <li>Responsible AI</li>
              </ul>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Award size={32} />
              </div>
              <h3>Leadership & Collaboration</h3>
              <ul>
                <li>Cross-functional Collaboration</li>
                <li>Stakeholder Engagement</li>
                <li>Business Unit Collaboration</li>
                <li>Process Improvement & Automation</li>
                <li>Vendor Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Enterprise GRC & Secure SDLC Program</h3>
              <p className="project-description">
                Led a Governance, Risk, and Compliance (GRC) team focused on policy management, certifications, 
                and enterprise risk assessments, translating identified gaps into actionable remediation plans 
                aligned to the NIST Risk Management Framework (RMF). Embedded security into the CI/CD process 
                by assessing deployment risk and enforcing policies across the SDLC so that releases were safer 
                without slowing delivery teams down.
              </p>
              <div className="project-tech">
                <span className="tech-tag">NIST RMF/800-53</span>
                <span className="tech-tag">DHS 4300A</span>
                <span className="tech-tag">GRC Platforms</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">Secure SDLC</span>
              </div>
              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Led the build-out of an enterprise GRC function focused on policy, certification, and risk assessments</li>
                  <li>Embedded security into CI/CD and the SDLC without impacting delivery timelines</li>
                  <li>Standardized policy, control, and A&A/ATO artifact library, streamlining audits</li>
                  <li>Designed executive risk and compliance dashboards for leadership visibility</li>
                </ul>
              </div>
            </div>

            <div className="project-card">
              <h3>Multi-Cloud GRC & Third-Party Risk Management Program</h3>
              <p className="project-description">
                Led GRC initiatives across multiple AWS and Azure environments (IL-5/IL-6), ensuring controls 
                met NIST 800-53, FISMA, FedRAMP, ISO 27001, and Army policy requirements. Managed and mentored 
                a team of five, prioritizing risk reduction and audit readiness. Stood up and ran the third-party 
                continuous monitoring program end-to-end.
              </p>
              <div className="project-tech">
                <span className="tech-tag">AWS</span>
                <span className="tech-tag">Azure</span>
                <span className="tech-tag">NIST 800-53</span>
                <span className="tech-tag">FedRAMP</span>
                <span className="tech-tag">ISO 27001</span>
                <span className="tech-tag">IL-5/IL-6</span>
              </div>
              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Led GRC for multi-cloud IL-5/IL-6 environments ensuring continuous compliance alignment</li>
                  <li>Worked with cross-functional teams to build a third-party continuous monitoring program</li>
                  <li>Cleared 300+ items in risk register through structured remediation planning</li>
                  <li>Reduced audit response time with improved dashboards, metrics, and SLAs</li>
                  <li>Maintained ISO 27001:2013 documentation for surveillance and recertification audits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>ISC2 – Certified Information Systems Security Professional (CISSP)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>ISACA – Certified Information Security Manager (CISM)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>ISACA – Certified Information System Auditor (CISA)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>ISACA – Certified in Risk and Information Systems Control (CRISC)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>IAPP – Artificial Intelligence Governance Professional (AIGP)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>PMI – Project Management Professional (PMP)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>ISC2 – Certified in Governance Risk and Compliance (CGRC)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>CSA – Certificate of Cloud Security Knowledge (CCSK)</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>PECB – ISO/IEC 27001 Lead Implementer</span>
            </a>
            <a href="https://www.credly.com/users/imran-nawaz.69e433a6/badges#credly" target="_blank" rel="noopener noreferrer" className="cert-card">
              <Award size={24} />
              <span>PECB – ISO/IEC 42001 Lead Implementer</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-text">
              I'm always open to discussing new opportunities, collaborations, or just connecting 
              with fellow professionals in the GRC and security space.
            </p>
            <div className="contact-methods">
              <a href="mailto:Imran.Nawaz@gmail.com" className="contact-method">
                <Mail size={32} />
                <span>Imran.Nawaz@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/nawaz-imran/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <Linkedin size={32} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            <div className="cta-buttons">
              <a href="mailto:Imran.Nawaz@gmail.com" className="btn btn-primary">
                Contact for Opportunities
              </a>
              <a href="/ImranNawazresume.pdf" download className="btn btn-secondary">
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Imran Nawaz. All rights reserved.</p>
          <p className="footer-note">Built with React & deployed on AWS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
