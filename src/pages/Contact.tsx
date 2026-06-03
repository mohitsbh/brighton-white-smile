import { Phone, Mail, MapPin, Clock, AlertTriangle } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with Brighton White Dental Studio. We're here to help you achieve your perfect smile."
        breadcrumbs={[{ label: 'Contact' }]}
        variant="contact"
      />

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display mb-6">
                Get In Touch
              </h2>
              <p className="text-text-light mb-8">
                Ready to transform your smile? Contact us to book a consultation or ask any questions.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Address</h3>
                    <p className="text-text-light text-sm">
                      Brighton White Dental Studio<br />
                      2 Hampton Place<br />
                      Brighton<br />
                      BN1 3DD
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <a href="tel:01273779377" className="text-accent hover:underline text-sm">01273 779377</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a href="mailto:info@brightonwhite.net" className="text-accent hover:underline text-sm">info@brightonwhite.net</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Opening Hours</h3>
                    <div className="text-sm text-text-light mt-1">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <span>Monday</span><span>9am-1pm, 2pm-6pm</span>
                        <span>Tuesday</span><span>9am-1pm, 2pm-6pm</span>
                        <span>Wednesday</span><span>9am-1pm, 2pm-6pm</span>
                        <span>Thursday</span><span>9am-1pm, 2pm-6pm</span>
                        <span>Friday</span><span>9am-1pm, 2pm-5pm</span>
                        <span>Saturday</span><span className="text-red-400">Closed</span>
                        <span>Sunday</span><span className="text-red-400">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 text-sm">Covid Update</h3>
                    <p className="text-amber-700 text-sm mt-1">
                      Following our most recent risk assessment, we ask that our patients continue to wear a face mask 
                      while waiting in the practice. We currently don't have a patient toilet facility available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-neutral rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text placeholder:text-text-muted transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text placeholder:text-text-muted transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text placeholder:text-text-muted transition-all"
                      placeholder="01273 779377"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text mb-1">Interested In</label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text transition-all"
                    >
                      <option value="">Select a treatment...</option>
                      <option value="teeth-whitening">Teeth Whitening</option>
                      <option value="veneers">Porcelain Veneers</option>
                      <option value="implants">Dental Implants</option>
                      <option value="invisalign">Teeth Straightening</option>
                      <option value="general">General Dentistry</option>
                      <option value="emergency">Emergency Dentistry</option>
                      <option value="facial">Facial Rejuvenation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text placeholder:text-text-muted transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button variant="accent" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary font-display mb-8 text-center">
                            Find Us
          </h2>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-primary/5">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                <p className="text-text-light">2 Hampton Place, Brighton, BN1 3DD</p>
                <p className="text-text-muted text-sm mt-1">Opposite Waitrose parking space</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-accent">
        <Container className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-white" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">Dental Emergency?</h2>
          </div>
          <p className="text-white/80 max-w-2xl mx-auto">
            We offer emergency dental services for instant pain relief. Please call the practice early in the morning. 
            For out-of-hours emergencies, our answer phone message will provide details of emergency provisions.
          </p>
          <a
            href="tel:01273779377"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl text-lg font-semibold hover:bg-neutral transition-all shadow-lg mt-6"
          >
            <Phone className="w-5 h-5" />
            Call 01273 779377
          </a>
        </Container>
      </Section>
    </>
  )
}
