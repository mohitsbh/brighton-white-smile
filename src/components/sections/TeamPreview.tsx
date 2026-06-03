import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import TeamCard from '../ui/TeamCard'
import { teamMembers } from '../../data/team'

export default function TeamPreview() {
  return (
    <section className="bg-neutral py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Our Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
            Meet Your Dental Experts
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Highly skilled professionals dedicated to providing exceptional dental care 
            in a comfortable, welcoming environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              qualifications={member.qualifications}
              bio={member.bio}
              specialties={member.specialties}
              index={i}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Meet the full team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
