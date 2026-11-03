import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, Award, Download, Github, Linkedin, Mail, MapPin, Menu, Moon, Sun, X } from 'lucide-react'
import { resume } from './data/resume'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const navItems = [
  ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Education', '#education'], ['Contact', '#contact'],
]

function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#about" onClick={() => setOpen(false)} aria-label="Bryant Serrano, home">Bryant Serrano</a>
    <nav className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {navItems.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight size={14} /></a>
    </nav>
    <div className="header-actions">
      <button className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} aria-pressed={theme === 'dark'} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
      </button>
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  </header>
}

function SectionHeading({ number, title, note }: { number: string; title: string; note?: string }) {
  return <div className="section-heading"><span className="section-number">{number}</span><h2>{title}</h2>{note && <p>{note}</p>}</div>
}

function Hero() {
  return <section className="hero section-wrap" id="about">
    <div className="hero-topline"><span>{resume.location}</span><span>6+ years in technology</span></div>
    <div className="hero-content">
      <div>
        <p className="hero-kicker">Backend · UI · Cloud · AI · Networks</p>
        <h1>{resume.name}</h1>
        <h2>{resume.title}</h2>
      </div>
      <div className="hero-aside">
        <p>{resume.summary}</p>
        <a className="text-link" href="#experience">Explore my experience <ArrowDown size={15} /></a>
      </div>
    </div>
    <div className="hero-footer">
      <div className="social-links">
        {resume.email && <a href={`mailto:${resume.email}`} aria-label="Email Bryant"><Mail size={16} /> Email</a>}
        {resume.linkedin && <a href={resume.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>}
        {resume.github && <a href={resume.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>}
      </div>
      <a className="cv-link" href={resume.cvUrl} download="bryant_serrano_cv.pdf"><Download size={16} /> Download CV <span>PDF</span></a>
    </div>
  </section>
}

function Skills() {
  return <section className="section-wrap content-section" id="skills">
    <SectionHeading number="01" title="Technical skills" note="Tools and technologies from my work." />
    <div className="skills-grid">
      {resume.skills.map(({ category, skills }) => <article className="skill-group" key={category}>
        <h3>{category}</h3><p>{skills.join(' · ')}</p>
      </article>)}
    </div>
  </section>
}

function Experience() {
  const groups = resume.experience.reduce<{ company: string; roles: typeof resume.experience }[]>((result, job) => {
    const last = result[result.length - 1]
    if (last?.company === job.company) last.roles.push(job)
    else result.push({ company: job.company, roles: [job] })
    return result
  }, [])

  return <section className="section-wrap content-section" id="experience">
    <SectionHeading number="02" title="Experience" note="A career built across software and network engineering." />
    <div className="timeline">
      {groups.map((group) => <article className="timeline-item" key={group.company}>
        <span className="timeline-node" aria-hidden="true" />
        <div className="company-heading"><h3>{group.company}</h3>{group.roles.length > 1 && <span>Career progression</span>}</div>
        <div className="timeline-roles">{group.roles.map((job) => <div className="timeline-role" key={job.role}>
          <div className="job-meta"><span>{job.period}</span></div>
          <h4>{job.role}</h4>
          <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </div>)}</div>
      </article>)}
    </div>
  </section>
}

function EducationAndMore() {
  return <section className="section-wrap content-section" id="education">
    <SectionHeading number="03" title="Education & languages" />
    <div className="credentials-grid">
      <div className="credential-block"><h3>Education</h3>{resume.education.map((item) => <article className="education-entry" key={item.institution}>
        <div className="credential-icon">⌂</div><div><h4>{item.degree}</h4><p>{item.institution}</p><div className="credential-meta">{item.period} <span>{item.detail}</span></div></div>
      </article>)}</div>
      <div className="credential-block"><h3>Certifications</h3>{resume.certifications.map((item) => <article className="cert-entry" key={item.name}>
        <Award size={17} /><div><h4>{item.name}</h4><p>{item.issuer} <span>{item.period}</span></p></div>
      </article>)}</div>
      <div className="credential-block language-block"><h3>Languages</h3>{resume.languages.map((language) => <div className="language-entry" key={language.name}><span>{language.name}</span><span>{language.proficiency}</span></div>)}</div>
    </div>
  </section>
}

function Contact() {
  return <footer className="contact-section" id="contact">
    <div className="section-wrap contact-inner">
      <div><p className="hero-kicker">Get in touch</p><h2>Let’s build something<br />useful together.</h2></div>
      <div className="contact-links">
        {resume.email && <a href={`mailto:${resume.email}`}><Mail size={17} />{resume.email}<ArrowUpRight size={15} /></a>}
        {resume.linkedin && <a href={resume.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15} /></a>}
        {resume.github && <a href={resume.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub<ArrowUpRight size={15} /></a>}
        <span className="contact-location"><MapPin size={16} />{resume.location}</span>
      </div>
    </div>
    <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} {resume.name}</span></div>
  </footer>
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      const nextSection = document.getElementById('skills')
      setVisible(Boolean(nextSection && window.scrollY >= nextSection.offsetTop - 100))
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!visible) return null

  return <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}>
    <ArrowUp size={16} /> Back to top
  </button>
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111a22' : '#f7f8f8')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return <><Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} /><main><Hero /><Skills /><Experience /><EducationAndMore /></main><Contact /><BackToTop /></>
}
