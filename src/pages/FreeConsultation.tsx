import { Calendar, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function FreeConsultation() {
  return (
    <>
      <PageHeader
        title="Free Consultation"
        description="Book your free consultation for Inman Aligner or dental implants today."
        breadcrumbs={[{ label: 'Free Consultation' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-accent text-white rounded-2xl p-10 mb-10">
              <h2 className="text-3xl font-bold font-display mb-4">Your Free Consultation Awaits</h2>
              <p className="text-white/80 text-lg mb-6">
                Take the first step towards your dream smile. Book a free consultation 
                with our expert team to discuss your treatment options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    <Calendar className="w-5 h-5" /> Book Now
                  </Button>
                </Link>
                <a href="tel:01273779377">
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5" /> 01273 779377
                  </Button>
                </a>
              </div>
            </div>
            <p className="text-text-muted text-sm">*Terms & conditions apply. Free consultation for Inman Aligner and implant assessments.</p>
          </div>
        </Container>
      </Section>
    </>
  )
}
