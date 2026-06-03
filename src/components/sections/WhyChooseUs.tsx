import { motion } from 'framer-motion'
import { Shield, Heart, Target, Sparkles } from 'lucide-react'
import Container from '../ui/Container'

const reasons = [
  {
    icon: Shield,
    title: 'Expert-Led Care',
    description: 'Led by Dr Arash Jafari, who studied under Professor Brannemark, the founder of dental implantology, and trained at leading universities across Europe.',
  },
  {
    icon: Heart,
    title: 'Patient-Centred Approach',
    description: 'We understand dental anxiety and provide a comfortable, compassionate environment. Your comfort and confidence are our top priorities.',
  },
  {
    icon: Target,
    title: 'Minimum Intervention',
    description: 'We advocate for minimum intervention techniques, preserving your natural teeth wherever possible using the most modern and advanced dental techniques.',
  },
  {
    icon: Sparkles,
    title: 'Complete Care Under One Roof',
    description: 'From cosmetic dentistry and implants to facial rejuvenation and emergency care, we offer comprehensive treatments at our convenient Brighton location.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
              Dentistry That{' '}
              <span className="text-accent">Transforms</span> Lives
            </h2>
            <p className="mt-4 text-text-light text-lg leading-relaxed">
              At Brighton White Dental Studio, we provide both need-based and wish-based dentistry. 
              Whether you require treatment for dental issues or want to enhance your smile, 
              we bring both pieces together for comprehensive care.
            </p>
            <div className="mt-8 space-y-6">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center shrink-0 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary">{reason.title}</h3>
                    <p className="text-text-light text-sm mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img src="/images/dentistry-4.png" alt="Brighton White Dental Studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl bg-primary/5 -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
