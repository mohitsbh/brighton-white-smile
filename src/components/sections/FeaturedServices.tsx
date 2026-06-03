import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Heart, Smile, Award, Eye, Scissors, Zap, Droplets, Wind, ShieldCheck, Ambulance, Circle } from 'lucide-react'
import Container from '../ui/Container'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

const iconMap: Record<string, React.ElementType> = {
  Sparkles, Shield, Heart, Smile, Award, Eye, Scissors, Zap, Droplets, Wind, ShieldCheck, Ambulance, Circle,
}

export default function FeaturedServices() {
  const featured = services.slice(0, 6)

  return (
    <section className="bg-neutral py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Treatments</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
            Comprehensive Dental Care
          </h2>
          <p className="mt-4 text-text-light text-lg">
            From cosmetic enhancements to restorative treatments, we offer complete dental care 
            tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.summary}
                price={service.price}
                index={i}
              >
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors mt-2 group/link"
                >
                  Learn more <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </ServiceCard>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Treatments
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
