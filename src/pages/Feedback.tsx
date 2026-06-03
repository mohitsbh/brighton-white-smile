import { useState } from 'react'
import { Send, Star } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function Feedback() {
  const [rating, setRating] = useState(0)

  return (
    <>
      <PageHeader
        title="Patient Feedback"
        description="We value your opinion. Share your experience at Brighton White Dental Studio."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }, { label: 'Feedback' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral rounded-2xl p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-primary font-display mb-6">Share Your Experience</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-text mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRating(n)}
                        className="p-1 transition-colors"
                      >
                        <Star className={`w-8 h-8 ${n <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-text mb-1">Email</label>
                  <input type="email" id="feedback-email" className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="feedback-message" className="block text-sm font-medium text-text mb-1">Your Feedback</label>
                  <textarea id="feedback-message" rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-dark/50 bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-none" placeholder="Tell us about your experience..." />
                </div>
                <Button variant="accent" className="w-full">
                  <Send className="w-4 h-4" /> Submit Feedback
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
