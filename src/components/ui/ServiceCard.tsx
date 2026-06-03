import { type ReactNode, type ElementType } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: ElementType
  title: string
  description: string
  price?: string
  children?: ReactNode
  index?: number
}

export default function ServiceCard({ icon: Icon, title, description, price, children, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-dark/30 hover:border-accent/20"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-text-light text-sm leading-relaxed mb-4">{description}</p>
      {price && (
        <p className="text-sm font-bold text-accent mb-4 bg-accent/5 inline-block px-3 py-1 rounded-full">{price}</p>
      )}
      {children}
    </motion.div>
  )
}
