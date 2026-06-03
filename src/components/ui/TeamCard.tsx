import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TeamCardProps {
  name: string
  role: string
  qualifications?: string
  bio: string
  specialties?: string[]
  image?: string
  index?: number
  children?: ReactNode
}

export default function TeamCard({ name, role, qualifications, bio, specialties, image, index = 0, children }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-dark/30 hover:border-accent/20"
    >
      <div className="relative h-48 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,92,12,0.15),_transparent_50%)]" />
            <div className="relative w-24 h-24 rounded-full bg-white/10 flex items-center justify-center border-2 border-white/20">
              <span className="text-3xl font-bold text-white font-display">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="text-accent font-medium text-sm mt-1">{role}{qualifications ? `, ${qualifications}` : ''}</p>
        <p className="text-text-light mt-4 leading-relaxed text-sm line-clamp-4">{bio}</p>
        {specialties && specialties.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {specialties.map((s, i) => (
              <span key={i} className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </motion.div>
  )
}
