import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../config/site'

const links = [['About', 'about'], ['Skills', 'skills'], ['AI Tools', 'ai-tools'], ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const nodes = links.map(([, id]) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, .2, .5] })
    nodes.forEach(node => observer.observe(node))
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', key)
    return () => { observer.disconnect(); window.removeEventListener('keydown', key) }
  }, [])
  return <header className="site-header"><div className="nav-wrap">
    <a className="brand" href="#top" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}><span className="brand-mark">JK</span><span className="brand-name">{site.name}</span></a>
    <nav id="mobile-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
      {links.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s connect <span aria-hidden="true">↗</span></a>
    </nav>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}><span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>{open ? <X size={21} /> : <Menu size={21} />}</button>
  </div></header>
}
