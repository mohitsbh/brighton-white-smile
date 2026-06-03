import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  content: string
  rating: number
  treatment?: string
  location?: string
  index?: number
}

export default function TestimonialCard({ name, content, rating, treatment, location, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-neutral-dark/30 hover:shadow-lg hover:border-accent/20 transition-all duration-300 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
        ))}
      </div>
      <blockquote className="text-text-light leading-relaxed mb-6 italic text-sm">&ldquo;{content}&rdquo;</blockquote>
      <div className="border-t border-neutral-dark/30 pt-4">
        <p className="font-semibold text-primary text-sm">{name}</p>
        <div className="flex items-center gap-2 text-xs text-text-muted mt-0.5">
          {treatment && <span className="text-accent font-medium">{treatment}</span>}
          {treatment && location && <span>·</span>}
          {location && <span>{location}</span>}
        </div>
      </div>
    </motion.div>
  )
}
