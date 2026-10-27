import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '', delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string }) {
  const reduce = useReducedMotion()
  return <motion.div id={id} className={className} initial={reduce ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: reduce ? 0 : 0.42, delay: reduce ? 0 : Math.min(delay, 0.14), ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}
