import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import FeaturedServices from '../components/sections/FeaturedServices'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TeamPreview from '../components/sections/TeamPreview'
import GalleryPreview from '../components/sections/GalleryPreview'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FinanceOptions from '../components/sections/FinanceOptions'
import FAQ from '../components/sections/FAQ'
import ContactCTA from '../components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <WhyChooseUs />
      <TeamPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <FinanceOptions />
      <FAQ />
      <ContactCTA />
    </>
  )
}
