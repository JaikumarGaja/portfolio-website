import { ArrowUpRight, Layers3 } from 'lucide-react'
import { motion } from 'motion/react'
import type { Project } from '../config/site'
import { Reveal } from './Reveal'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const title = <div className="project-title-row"><h3>{project.title}</h3>{project.repo && <motion.a whileHover={{ x: 3, y: -3 }} href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`} className="project-link"><ArrowUpRight size={19} /></motion.a>}</div>
  const summary = <p className="project-description">{project.description}</p>
  const technologies = <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>

  return <Reveal className={`project-card ${project.featured ? 'project-featured' : ''}`} delay={index * 0.07}>
    <div className="project-top"><div className="project-index">0{index + 1} <span>—</span> {project.subtitle}</div><span className={`status ${project.status === 'Planned' ? 'planned' : ''}`}><i />{project.status}</span></div>
    {project.featured ? <div className="project-featured-body"><div className="project-overview">{title}{summary}{technologies}</div><div className="project-evidence"><p className="evidence-label">WHAT’S IN THE REPOSITORY</p><ul className="project-details">{project.details.map(item => <li key={item}>{item}</li>)}</ul></div></div> : <>{title}{summary}<div className="project-note"><Layers3 size={15} /><span>{project.details[0]}</span></div>{technologies}</>}
  </Reveal>
}
