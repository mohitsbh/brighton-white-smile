import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'

export default function Privacy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="How Brighton White Dental Studio handles your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg text-text-light">
            <h2 className="text-2xl font-bold text-primary font-display">Our Privacy Policy</h2>
            <p>
              Brighton White Dental Studio is committed to protecting your privacy. This policy explains 
              how we collect, use, and safeguard your personal information.
            </p>
            <h3 className="text-xl font-semibold text-primary">Information We Collect</h3>
            <p>
              We collect personal information that you provide to us, including your name, address, 
              contact details, medical history, and dental treatment information.
            </p>
            <h3 className="text-xl font-semibold text-primary">How We Use Your Information</h3>
            <p>
              Your information is used to provide dental care services, process appointments, 
              and communicate with you about your treatment. We do not share your information 
              with third parties without your consent except where required by law.
            </p>
            <h3 className="text-xl font-semibold text-primary">Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information 
              from unauthorised access, alteration, disclosure, or destruction.
            </p>
            <h3 className="text-xl font-semibold text-primary">Your Rights</h3>
            <p>
              You have the right to access, correct, or request deletion of your personal information. 
              Please contact us to exercise these rights.
            </p>
            <h3 className="text-xl font-semibold text-primary">Contact</h3>
            <p>
              For questions about this privacy policy, please contact us at{' '}
              <a href="mailto:info@brightonwhite.net" className="text-accent">info@brightonwhite.net</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
