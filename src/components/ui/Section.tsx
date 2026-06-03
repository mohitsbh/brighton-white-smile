import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
  accent?: boolean
}

export default function Section({ children, className = '', id, dark = false, accent = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-24 ${
        dark ? 'bg-primary text-white' :
        accent ? 'bg-accent text-white' :
        'bg-white'
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
