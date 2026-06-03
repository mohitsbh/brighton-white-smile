import { motion } from 'framer-motion'
import { Shield, Award } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import TeamCard from '../components/ui/TeamCard'
import { teamMembers } from '../data/team'

export default function Team() {
  return (
    <>
      <PageHeader
        title="Our Team"
        description="Meet the skilled professionals dedicated to providing exceptional dental care at Brighton White Dental Studio."
        breadcrumbs={[{ label: 'Team' }]}
        variant="team"
      />

      <Section className="bg-neutral">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              GDC Registered Professionals
            </div>
            <p className="text-text-light text-lg">
              All our dentists adhere to the rules governing the profession under strict guidance 
              from the <a href="http://www.gdc-uk.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">General Dental Council</a>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={member.id}>
                <TeamCard {...member} index={i} />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mt-4 bg-white rounded-2xl p-5 border border-neutral-dark/30 flex items-start gap-3"
                >
                  <Shield className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm">GDC Registration</p>
                    <p className="text-text-muted text-xs mt-0.5">GDC No: {member.gdcNo} — Registered with the General Dental Council</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
