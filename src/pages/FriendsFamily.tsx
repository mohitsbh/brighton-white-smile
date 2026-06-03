import { Percent, Gift, Users } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import { Link } from 'react-router-dom'

export default function FriendsFamily() {
  return (
    <>
      <PageHeader
        title="Friends & Family"
        description="Share the love. Recommend Brighton White Dental Studio to your friends and family."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }, { label: 'Friends & Family' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-10 mb-10">
              <Gift className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary font-display mb-4">Refer a Friend</h2>
              <p className="text-text-light text-lg mb-6">
                Love your smile? Share the experience! Refer your friends and family to 
                Brighton White Dental Studio and help them achieve the smile they deserve.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-dark transition-all"
              >
                Refer Now
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-neutral rounded-2xl p-6 text-left">
                <Users className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">For Our Patients</h3>
                <p className="text-text-light text-sm">
                  We appreciate your trust and loyalty. Tell your friends and family about your 
                  positive experience at Brighton White.
                </p>
              </div>
              <div className="bg-neutral rounded-2xl p-6 text-left">
                <Percent className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-semibold text-primary mb-2">Special Offers</h3>
                <p className="text-text-light text-sm">
                  Contact us to learn about our current referral offers and how you can 
                  both benefit from recommending Brighton White.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
