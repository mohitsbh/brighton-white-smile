import { motion } from 'framer-motion'
import { Download, CreditCard } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import { Link } from 'react-router-dom'

const priceCategories = [
  {
    title: 'Diagnostics',
    items: [
      { service: 'Cosmetic check-up', price: '£75' },
      { service: 'Private Examination (not including x-rays)', price: '£75' },
      { service: 'Emergency Same day Appointment (inc. X-rays)', price: '£80' },
      { service: 'Small x-ray (each)', price: '£10' },
      { service: 'Study Model', price: '£60' },
      { service: 'Waxed-up Models (per tooth)', price: '£35' },
    ],
  },
  {
    title: 'Hygienist Services',
    items: [
      { service: 'Hygienist appointment', price: '£62' },
      { service: 'Hygienist (1 hour)', price: '£124' },
      { service: 'Airflow polish with calculus removed', price: '£79' },
    ],
  },
  {
    title: 'Restorations',
    items: [
      { service: 'White fillings (1 surface)', price: 'From £120' },
      { service: 'White Filling (2 surfaces)', price: 'From £140' },
      { service: 'White Fillings (3 surfaces)', price: 'From £160' },
      { service: 'White Fillings (V. Large)', price: 'From £180' },
    ],
  },
  {
    title: 'Root Canal Therapy',
    items: [
      { service: 'Front tooth', price: '£375' },
      { service: 'Pre-molar', price: '£375' },
      { service: 'Molar', price: '£450' },
    ],
  },
  {
    title: 'Crown & Bridge',
    items: [
      { service: 'Full Ceramic Crown (per tooth)', price: '£565' },
      { service: 'Full Gold (per tooth)', price: '£465' },
      { service: 'Porcelain Bonded (Precious)', price: '£465' },
      { service: 'Porcelain Bonded (Non-precious)', price: '£399' },
      { service: 'Bridge (per tooth)', price: '£465 (discount on several teeth)' },
      { service: 'Veneer (per tooth)', price: '£465 (discount on several teeth)' },
    ],
  },
  {
    title: 'Whitening',
    items: [
      { service: 'Home Kit with Bleaching trays', price: '£299' },
      { service: 'Zoom in-chair Whitening (inc. Airflow & Take home trays)', price: '£550' },
      { service: 'Bleaching trays (replacement)', price: '£150' },
      { service: 'Peroxide syringe (10ml)', price: '£29.99' },
    ],
  },
  {
    title: 'Orthodontics',
    items: [
      { service: 'Inman Aligner consultation', price: 'Free' },
      { service: 'Inman Aligner', price: 'From £1,600' },
      { service: 'Inman Aligner + Home Whitening', price: 'From £1,700' },
      { service: 'Invisalign consultation', price: '£45 (deductable)' },
      { service: 'Invisalign treatment', price: 'From £1,999' },
      { service: 'Clearstep', price: 'From £1,800' },
    ],
  },
  {
    title: 'Implants',
    items: [
      { service: 'Implant consultation', price: 'Free (T&C apply)' },
    ],
  },
  {
    title: 'Dentures',
    items: [
      { service: 'Full Acrylic (top or bottom)', price: 'From £519' },
      { service: 'Partial Acrylic', price: 'From £479' },
      { service: 'Valplast Partial Denture', price: 'From £850' },
      { service: 'Chrome metal denture', price: 'From £850' },
    ],
  },
]

export default function Fees() {
  return (
    <>
      <PageHeader
        title="Fees & Finance"
        description="Affordable, high-quality dental care with flexible payment options including 0% interest-free credit."
        breadcrumbs={[{ label: 'Fees & Finance' }]}
        variant="info"
      />

      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-accent text-white rounded-2xl p-8">
              <CreditCard className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-bold font-display mb-3">0% Interest Free Finance</h3>
              <p className="text-white/80 mb-4">
                Spread the cost of your treatment with 0% interest free credit over 12 months. 
                Subject to status, terms and conditions apply. Minimum £450 for interest-free plans.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-xl font-semibold hover:bg-neutral transition-all"
              >
                Apply Now
              </Link>
            </div>
            <div className="bg-primary text-white rounded-2xl p-8">
              <img src="/images/denplan.png" alt="Denplan" className="h-10 mb-4" />
              <h3 className="text-2xl font-bold font-display mb-3">Denplan Essentials</h3>
              <p className="text-white/70 mb-4">
                Join Denplan Essentials for affordable monthly payments covering routine examinations, 
                hygiene treatment and x-rays. Includes dental injury and emergency worldwide cover.
              </p>
              <a
                href="https://www.denplan.co.uk/dashboard/applications/onlineapplication/index.aspx?edl=1&sid=7588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-dark transition-all"
              >
                Sign Up Now
              </a>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary font-display mb-4">Price List</h2>
            <p className="text-text-light mb-4">All finance applications need to be above £450 to qualify for an interest-free yearly plan.</p>
            <a
              href="/images/fees.pdf"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              <Download className="w-4 h-4" /> Download our price list
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {priceCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-neutral rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{cat.title}</h3>
                <div className="space-y-2">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-dark/30 last:border-0">
                      <span className="text-text-light text-sm">{item.service}</span>
                      <span className="font-semibold text-primary text-sm whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
