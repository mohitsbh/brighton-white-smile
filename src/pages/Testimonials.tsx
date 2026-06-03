import { Star, Quote } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import TestimonialCard from '../components/ui/TestimonialCard'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const averageRating = Math.round(
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  )

  return (
    <>
      <PageHeader
        title="Patient Testimonials"
        description="Hear from our patients about their experience at Brighton White Dental Studio."
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 bg-neutral rounded-2xl p-8">
            <Quote className="w-10 h-10 text-accent/20 mx-auto mb-2" />
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < averageRating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-primary font-display">
              {averageRating}.0 out of 5
            </p>
            <p className="text-text-muted text-sm mt-1">
              Based on {testimonials.length} patient reviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} {...t} index={i} />
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-neutral rounded-2xl">
            <p className="text-text-light text-sm">
              If you are a patient and wish to contribute a testimonial, please{' '}
              <a href="mailto:info@brightonwhite.net" className="text-accent hover:underline">contact us</a>.
            </p>
            <p className="text-text-light text-sm mt-2">
              See Brighton White in the press:{' '}
              <a
                href="https://www.prbuzz.com/health-a-fitness/63427-brighton-white-inman-aligner-treatmen.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Read article →
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
