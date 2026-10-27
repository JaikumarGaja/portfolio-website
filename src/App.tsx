import { ArrowDown, ArrowRight, ArrowUpRight, Check, Cloud, Mail, Server, Terminal, Workflow } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { site } from './config/site'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { Reveal } from './components/Reveal'
import { SocialIcon } from './components/SocialIcon'

function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return <Reveal className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</Reveal>
}

function HeroDiagram() {
  return <motion.div className="hero-visual" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .58, ease: [.22, 1, .36, 1] }} aria-label="Illustration of a software delivery path from code to cloud" role="img">
    <div className="visual-top"><span><i className="live-dot" /> DELIVERY PATH</span><span>CONCEPT / 01</span></div>
    <div className="diagram">
      <div className="node node-code"><div className="node-icon"><Terminal size={18} /></div><span>CODE</span><small>versioned</small></div>
      <span className="diagram-edge"><i /><small>commit</small></span>
      <div className="node node-ci"><div className="node-icon"><Workflow size={18} /></div><span>PIPELINE</span><small>repeatable</small></div>
      <span className="diagram-edge"><i /><small>validate</small></span>
      <div className="node node-cloud"><div className="node-icon"><Cloud size={19} /></div><span>INFRA</span><small>declarative</small></div>
      <span className="diagram-edge"><i /><small>provision</small></span>
      <div className="node node-runtime"><div className="node-icon"><Server size={18} /></div><span>RUNTIME</span><small>observable</small></div>
    </div>
    <div className="visual-footer"><span>CHANGE</span><span>→</span><span>REPEATABLE DELIVERY</span></div>
  </motion.div>
}

function ScrollSignal({ className }: { className: string }) {
  const target = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [22, -22])
  const opacity = useTransform(scrollYProgress, [0, .28, .72, 1], [0, .34, .34, 0])
  return <motion.div ref={target} className={className} aria-hidden="true" style={{ y: reduce ? 0 : y, opacity: reduce ? .18 : opacity }} />
}

function App() {
  const year = new Date().getFullYear()
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">
    <section className="hero section-shell" id="top"><ScrollSignal className="hero-signal" /><div className="hero-copy">
      <motion.p className="availability" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .32 }}><span className="availability-mark">↗</span> EXPLORING ENTRY-LEVEL CLOUD & DEVOPS OPPORTUNITIES</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .04, duration: .46, ease: [.22, 1, .36, 1] }}>Reliable systems.<br /><em>Automation with intent.</em></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .4 }}>I’m Jaikumar Gaja, an aspiring Cloud / DevOps Engineer with an IT background. I’m learning by building with infrastructure, containers, and delivery automation.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .36 }}><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={16} /></a><a className="button button-quiet" href={site.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" size={17} /> GitHub profile <ArrowUpRight size={14} /></a></motion.div>
      <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: .32 }}><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin" size={15} /> LinkedIn <ArrowUpRight size={12} /></a><span className="social-divider" /><a href={`mailto:${site.email}`}><Mail size={15} /> {site.email}</a></motion.div>
    </div><HeroDiagram /><a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a></section>

    <section className="about section-shell" id="about"><SectionHeading eyebrow="01 / PROFILE" title="Curiosity, made practical." note="A grounded starting point for a career in cloud operations and engineering." /><div className="about-grid"><Reveal className="about-main"><p className="lead">My foundation is in Information Technology. Today, I’m building toward cloud and DevOps work by understanding how applications are packaged, infrastructure is described, and changes move through a delivery pipeline.</p><p>My current hands-on project explores a three-tier application and its path toward Amazon EKS using Terraform and Argo CD. I value clear documentation and careful verification as much as getting a system to run.</p><p>Before this transition, I worked in customer support at Accenture. That experience strengthened habits I bring to technical work: listening closely, troubleshooting methodically, following defined processes, and communicating clearly.</p><a className="text-link" href="#experience">More about my journey <ArrowRight size={15} /></a></Reveal><Reveal className="profile-aside"><div className="aside-rule" /><div className="aside-entry"><span>EDUCATION</span><strong>{site.education.degree}</strong><small>{site.education.date}</small></div><div className="aside-entry"><span>FOCUS RIGHT NOW</span><strong>Cloud foundations<br />Infrastructure as Code<br />Delivery workflows</strong></div><div className="aside-entry"><span>APPROACH</span><strong>Learn by building.<br />Document what changes.</strong></div></Reveal></div></section>

    <section className="skills section-shell" id="skills"><SectionHeading eyebrow="02 / TOOLKIT" title="Tools I’m learning with." note="A working set of technologies across my projects and learning path. Not a proficiency rating." /><div className="skill-grid">{site.skills.filter(group => group.category !== 'AI-assisted development tools').map((group, i) => <Reveal key={group.category} className="skill-group" delay={i * .035}><div className="skill-meta"><span>0{i + 1}</span><h3>{group.category}</h3></div><div className="skill-items">{group.items.map((skill, index) => <span key={skill} className="skill-item"><i>{skillIcon(skill)}</i>{skill}{index < group.items.length - 1 && <b>·</b>}</span>)}</div></Reveal>)}</div><Reveal className="ai-toolset" id="ai-tools"><div className="ai-tool-copy"><p className="eyebrow">AI-ASSISTED DEVELOPMENT</p><h3>Tools I use to explore and build.</h3><p>Part of my day-to-day learning and development workflow. These are tools I use, not a claim of expertise in the models behind them.</p></div><div className="ai-tool-list">{(site.skills.find(group => group.category === 'AI-assisted development tools')?.items ?? []).map(tool => <span className="ai-tool" key={tool}><i>{skillIcon(tool)}</i>{tool}</span>)}</div></Reveal></section>

    <section className="projects section-shell" id="projects"><SectionHeading eyebrow="03 / SELECTED WORK" title="Building, one layer at a time." note="The featured project leads; future directions are clearly marked as planned." /><div className="projects-grid">{site.projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}</div><p className="project-footnote"><span className="footnote-mark">i</span> Project descriptions reflect repository contents and current scope. AWS configuration shown in code does not confirm that infrastructure is presently running.</p></section>

    <section className="experience section-shell" id="experience"><SectionHeading eyebrow="04 / EXPERIENCE" title="The work behind the work." /><div className="journey-grid"><div className="timeline">{site.experience.map((job, i) => <Reveal key={job.role} className="timeline-entry"><div className="timeline-marker">0{i + 1}<span /></div><div className="timeline-content"><div className="timeline-top"><div><h3>{job.role}</h3><p>{job.organization}</p></div><span className="period">{job.period}</span></div><p className="timeline-description">{job.description}</p></div></Reveal>)}</div><Reveal className="education-card"><div className="education-label">EDUCATION</div><div className="education-monogram">JG<span> / IT</span></div><h3>{site.education.degree}</h3><p>{site.education.date}</p><div className="education-line" /><span className="education-note">INFORMATION TECHNOLOGY</span></Reveal></div></section>

    <section className="principles section-shell"><SectionHeading eyebrow="05 / WORKING PRINCIPLES" title="How I want to engineer." note="Principles to practice, not claims of mastery." /><div className="principle-list">{site.principles.map(([number, title, description]) => <Reveal className="principle-row" key={number}><span className="principle-number">{number}</span><h3>{title}</h3><p>{description}</p><Check size={15} className="principle-check" /></Reveal>)}</div></section>

    <section className="contact section-shell" id="contact"><Reveal className="contact-frame"><ScrollSignal className="contact-signal" /><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><p className="eyebrow">06 / START A CONVERSATION</p><h2>Good systems start<br />with <em>a conversation.</em></h2><p className="contact-copy">I’m interested in entry-level DevOps, cloud support, cloud operations, and technical support opportunities with room to grow into cloud engineering.</p><a className="button button-primary contact-button" href={`mailto:${site.email}`}>Email me <ArrowUpRight size={16} /></a><div className="contact-socials"><a href={site.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" size={15} /> GitHub <ArrowUpRight size={12} /></a><span /><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin" size={15} /> LinkedIn <ArrowUpRight size={12} /></a></div></Reveal></section>
  </main><footer className="site-footer"><a className="footer-brand" href="#top"><span className="brand-mark">JG</span><span>{site.name}</span></a><span className="footer-copy">© {year} · Built with intention.</span><div className="footer-links"><a href={site.github} target="_blank" rel="noopener noreferrer"><SocialIcon kind="github" size={13} /> GitHub <ArrowUpRight size={12} /></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon kind="linkedin" size={13} /> LinkedIn <ArrowUpRight size={12} /></a><a href="#top">Back to top ↑</a></div></footer></>
}

function skillIcon(skill: string) {
  const initials: Record<string, string> = { AWS: 'a', Terraform: 'tf', Docker: 'dk', Kubernetes: 'k8s', 'GitHub Actions': 'gh', Jenkins: 'j', 'Argo CD': 'a', Python: 'py', Bash: '$', Linux: 'ln', Git: 'git', GitHub: 'gh', React: 'r', TypeScript: 'ts', HTML: '5', CSS: '3' }
  return initials[skill] ?? skill.slice(0, 2).toLowerCase()
}

export default App
