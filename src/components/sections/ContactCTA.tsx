import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'

export default function ContactCTA() {
  return (
    <section className="relative bg-accent py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,42,67,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_50%)]" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
            Ready to Transform Your Smile?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Take the first step towards a confident, beautiful smile. 
            Book a consultation with our expert team today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral hover:shadow-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:01273779377"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
            >
              <Phone className="w-5 h-5" />
              01273 779377
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
