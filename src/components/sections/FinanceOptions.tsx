import { motion } from 'framer-motion'
import { CreditCard, Percent, Shield, Calendar } from 'lucide-react'
import Container from '../ui/Container'

const financeOptions = [
  {
    icon: Percent,
    title: '0% Interest Free Finance',
    description: 'Spread the cost of your treatment with 0% interest free credit over 12 months. Subject to status, terms and conditions apply.',
  },
  {
    icon: CreditCard,
    title: 'Denplan Essentials',
    description: 'Join Denplan Essentials for affordable monthly payments covering your routine examinations, hygiene treatment, and x-rays.',
  },
  {
    icon: Shield,
    title: 'Denplan Insurance',
    description: 'Denplan supplementary insurance covers dental injury, emergency worldwide cover, and out-of-hours emergency treatment.',
  },
  {
    icon: Calendar,
    title: 'Personalised Payment Plans',
    description: 'Working in partnership with Advance Dental Care, we offer personalised finance schemes to make your treatment affordable. Minimum £450 for interest-free plans.',
  },
]

export default function FinanceOptions() {
  return (
    <section className="relative bg-primary text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(247,92,12,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(247,92,12,0.05),_transparent_50%)]" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Finance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 font-display">
            Flexible Payment Options
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Quality dental care should be accessible. We offer a range of finance options 
            to suit your budget, including interest-free credit.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {financeOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{option.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
