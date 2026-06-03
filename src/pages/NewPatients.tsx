import { Link } from 'react-router-dom'
import { Download, FileText } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NewPatients() {
  return (
    <>
      <PageHeader
        title="New Patients"
        description="Welcome to Brighton White Dental Studio. Here's what to expect during your first visit."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }, { label: 'New Patients' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral rounded-2xl p-8 sm:p-10 mb-10">
              <h2 className="text-2xl font-bold text-primary font-display mb-4">Your First Visit</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>When you first contact us, we'll make an appointment for your initial examination.</p>
                <p>
                  At this appointment we'll thoroughly check your teeth, gums and soft tissues (like your tongue). 
                  We might photograph your teeth with our tiny intra-oral camera for a clearer, close-up view. 
                  We only use the latest digital x-rays: not only are these highly accurate, but they only use 
                  about one-fifth of the dose of a conventional x-ray, which is considered an important safety benefit.
                </p>
                <p>
                  Your dentist will point out any problem or potential problem areas with you, and discuss all the 
                  options you have to solve them. Feel free to ask any questions at all about any aspect of your 
                  oral health. Finally, an individual treatment plan will be created and printed out for you, 
                  together with estimates of costs if appropriate.
                </p>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Medical History Form</h3>
              <p className="text-text-light mb-6">
                Please download and complete our medical history form before your first appointment.
              </p>
              <a
                href="/pdf/BW-Medical-History-Form.pdf"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-dark transition-all"
              >
                <Download className="w-4 h-4" /> Download Form
              </a>
            </div>

            <div className="text-center mt-10">
              <p className="text-text-light mb-4">Ready to book your first appointment?</p>
              <Link to="/contact">
                <Button variant="primary" size="lg">Book an Appointment</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
