import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'
import Container from '../ui/Container'
import { faqItems } from '../../data/faq'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-text-light text-lg">
            Everything you need to know about visiting Brighton White Dental Studio.
          </p>
        </motion.div>

        <div className="relative max-w-md mx-auto mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-dark/50 bg-neutral focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-text placeholder:text-text-muted transition-all"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                openId === item.id ? 'border-accent/30 shadow-sm' : 'border-neutral-dark/30'
              }`}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  openId === item.id ? 'bg-accent/5' : 'bg-white hover:bg-neutral'
                }`}
                aria-expanded={openId === item.id}
              >
                <span className="font-medium text-primary text-sm pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-text-light text-sm leading-relaxed border-t border-accent/10 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </Container>
    </section>
  )
}
