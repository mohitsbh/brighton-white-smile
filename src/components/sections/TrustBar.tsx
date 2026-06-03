import { motion } from 'framer-motion'
import { Award, Star, Shield, Users } from 'lucide-react'
import Container from '../ui/Container'

const stats = [
  { icon: Award, label: 'Years Experience', value: '25+' },
  { icon: Users, label: 'Happy Patients', value: '5,000+' },
  { icon: Star, label: 'Patient Satisfaction', value: '98%' },
  { icon: Shield, label: 'GDC Registered', value: 'Certified' },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-neutral-dark/30">
      <Container className="py-8 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs sm:text-sm text-text-muted">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
