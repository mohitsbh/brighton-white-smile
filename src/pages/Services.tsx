import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Shield, ShieldCheck, Eye, Stethoscope, ArrowRight } from 'lucide-react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import PageHeader from '../components/ui/PageHeader'
import ServiceCard from '../components/ui/ServiceCard'
import { services, serviceCategories } from '../data/services'

const categoryIconMap: Record<string, React.ElementType> = {
  cosmetic: Sparkles,
  restorative: Shield,
  preventive: ShieldCheck,
  facial: Eye,
  general: Stethoscope,
}

const categoryGradients: Record<string, string> = {
  cosmetic: 'from-pink-50 to-white',
  restorative: 'from-blue-50 to-white',
  preventive: 'from-green-50 to-white',
  facial: 'from-purple-50 to-white',
  general: 'from-amber-50 to-white',
}

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Treatments"
        description="Comprehensive dental care in one convenient location. From cosmetic enhancements to restorative treatments and facial rejuvenation."
        breadcrumbs={[{ label: 'Treatments' }]}
        variant="services"
      />

      {serviceCategories.map((cat) => {
        const Icon = categoryIconMap[cat.id] || Sparkles
        const catServices = services.filter(s => s.category === cat.id)
        if (catServices.length === 0) return null

        return (
          <Section key={cat.id} className={`bg-gradient-to-b ${categoryGradients[cat.id] || 'bg-white'}`} id={cat.id}>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display">{cat.name}</h2>
                  <p className="text-text-muted text-sm mt-0.5">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {catServices.map((service, i) => {
                  const SvcIcon = categoryIconMap[service.icon] || Sparkles
                  return (
                    <ServiceCard
                      key={service.id}
                      icon={SvcIcon}
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
            </Container>
          </Section>
        )
      })}

      <Section accent className="!py-16">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Book a consultation with our expert team and we will create a personalised treatment plan tailored to your needs.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral hover:shadow-lg transition-all mt-6"
            >
              Book a Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
