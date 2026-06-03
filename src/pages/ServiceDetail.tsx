import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, CheckCircle, Shield, Phone } from 'lucide-react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <PageHeader title="Service Not Found" breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Not Found' }]} variant="services">
        <Link to="/services" className="text-white/80 hover:text-accent mt-4 inline-block">
          ← Back to Services
        </Link>
      </PageHeader>
    )
  }

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.category.charAt(0).toUpperCase() + service.category.slice(1), href: `/services#${service.category}` },
          { label: service.title },
        ]}
        variant="services"
      >
        {service.price && (
          <span className="inline-block mt-4 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium">
            From {service.price}
          </span>
        )}
      </PageHeader>

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display mb-6">
                About This Treatment
              </h2>
              <div className="prose prose-lg text-text-light max-w-none">
                <p className="leading-relaxed">{service.description}</p>
              </div>

              {service.features && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 bg-neutral rounded-xl p-4">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-text-light text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-neutral rounded-2xl p-6 sm:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-primary mb-4">Book Your Consultation</h3>
                <p className="text-text-light text-sm mb-6">
                  Take the first step towards your perfect smile. Contact us to schedule your appointment.
                </p>
                <div className="space-y-3">
                  <Link to="/contact">
                    <Button variant="accent" className="w-full">Book Appointment</Button>
                  </Link>
                  <a href="tel:01273779377">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4" />
                      01273 779377
                    </Button>
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-dark/30">
                  <div className="flex items-start gap-3 text-sm text-text-light">
                    <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Opening Hours</p>
                      <p>Mon-Thu: 9am-1pm, 2pm-6pm</p>
                      <p>Fri: 9am-1pm, 2pm-5pm</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-dark/30">
                  <div className="flex items-start gap-3 text-sm text-text-light">
                    <Shield className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-primary">GDC Registered</p>
                      <p>All dentists adhere to strict professional standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all treatments
          </Link>
        </Container>
      </Section>
    </>
  )
}
