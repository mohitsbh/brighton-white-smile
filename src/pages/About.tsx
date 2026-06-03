import { motion } from 'framer-motion'
import { Shield, Heart, Target, Sparkles } from 'lucide-react'
import Container from '../components/ui/Container'
import Section from '../components/ui/Section'
import PageHeader from '../components/ui/PageHeader'
import TeamCard from '../components/ui/TeamCard'
import { teamMembers } from '../data/team'

const values = [
  { icon: Heart, title: 'Patient-Centred Care', description: 'We prioritise your comfort, understanding that dental visits can be daunting. Our compassionate approach ensures every patient feels at ease.' },
  { icon: Shield, title: 'Clinical Excellence', description: 'All our dentists adhere to strict GDC guidelines and regularly attend training courses worldwide to stay at the forefront of dental innovation.' },
  { icon: Target, title: 'Minimum Intervention', description: 'We believe in preserving natural teeth wherever possible using the latest minimally invasive techniques and modern dentistry.' },
  { icon: Sparkles, title: 'Comprehensive Care', description: 'From need-based treatments to cosmetic enhancements, we offer complete dental solutions tailored to your individual requirements.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Discover the story behind Brighton White Dental Studio and meet our dedicated team."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 font-display">
                Brighton White Dental Studio
              </h2>
              <div className="mt-6 space-y-4 text-text-light leading-relaxed">
                <p>
                  We are pleased to introduce ourselves and welcome you to our Dental Studio. 
                  Brighton White Dental Studio is located at 2 Hampton Place in Brighton, 
                  situated opposite Waitrose parking space. It is our desire to provide you 
                  with the highest level of care that enhances the quality of your life.
                </p>
                <p>
                  We are pleased to offer you complete dental care in one convenient location. 
                  Our dentists provide two services: <strong>NEED-based dentistry</strong> and{' '}
                  <strong>WISH-based dentistry</strong>. If your gums are bleeding or you have 
                  a toothache, you see the dentist out of need. If your teeth are chipped or 
                  crooked or your smile is not white enough, your goal is probably to better 
                  your appearance — this is WISH-based. But to enhance your appearance, 
                  you must achieve and maintain basic health. The two go hand in hand.
                </p>
                <p>
                  At Brighton White Dental Studio we bring both dental pieces together. 
                  We are focused on dental services that make a difference in your life; 
                  our dental studio provides full service with highly skilled professionals 
                  offering a wide range of dental treatments with state-of-the-art techniques.
                </p>
                <p>
                  For many patients fear is a real issue, so our objective is to make your 
                  dental visits as free from discomfort as possible. Cost is another factor, 
                  so we try to keep our costs within reason and financial arrangements can be made.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img src="/images/dentistry-7.png" alt="Brighton White Dental Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-accent/10 -z-10" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-neutral">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 font-display">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-neutral-dark/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-text-light text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 font-display">
              Meet the Team
            </h2>
            <p className="mt-4 text-text-light text-lg">
              All our dentists adhere to the rules governing the profession under strict guidance 
              from the General Dental Council (GDC) "Standards for Dental Professionals."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={member.id}
                {...member}
                index={i}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
