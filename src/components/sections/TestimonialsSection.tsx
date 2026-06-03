import { motion } from 'framer-motion'
import Container from '../ui/Container'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="bg-neutral py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Real feedback from real patients. We pride ourselves on delivering exceptional care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} {...t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
