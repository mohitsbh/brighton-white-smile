import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/98 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] -translate-y-1/2 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-60 h-60 border-r border-t border-white/[0.03] rounded-tr-[120px]" />
      </div>

      <Container className="relative z-10 pt-28 sm:pt-36 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-xs tracking-[0.2em] uppercase mb-6 bg-accent/10 px-4 py-2 rounded-full">
              Premium Dental Care in Brighton
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.08] tracking-tight"
          >
            Your Smile,{' '}
            <span className="text-accent">Our Passion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-5 text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed"
          >
            Expert cosmetic and general dentistry in the heart of Brighton.
            Personalised care with state-of-the-art techniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 mt-8 justify-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-accent-dark transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:01273779377"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/80 px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
            >
              <Phone className="w-4 h-4" />
              01273 779377
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center justify-center gap-6 mt-10 text-white/25 text-[11px] tracking-wide"
          >
            <span>Denplan Accepted</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>0% Finance Available</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>New Patients Welcome</span>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
