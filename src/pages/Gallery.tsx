import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'

interface GalleryImage {
  id: string
  src: string
  title: string
  category: string
  description?: string
}

const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/patientsix7.jpg', title: 'Inman Aligner Before', category: 'Before & After', description: 'Before Inman Aligner treatment' },
  { id: '2', src: '/images/patientsix8.jpg', title: 'Inman Aligner After', category: 'Before & After', description: 'After Inman Aligner treatment' },
  { id: '3', src: '/images/patientsix9.jpg', title: 'Inman Aligner Before', category: 'Before & After', description: 'Before Inman Aligner treatment' },
  { id: '4', src: '/images/patientsix10.jpg', title: 'Inman Aligner After', category: 'Before & After', description: 'After Inman Aligner treatment' },
  { id: '5', src: '/images/thumbnail1.jpg', title: 'Patient Smile 1', category: 'Smile Gallery' },
  { id: '6', src: '/images/thumbnail2.jpg', title: 'Patient Smile 2', category: 'Smile Gallery' },
  { id: '7', src: '/images/thumbnail3.jpg', title: 'Patient Smile 3', category: 'Smile Gallery' },
  { id: '8', src: '/images/thumbnail4.jpg', title: 'Patient Smile 4', category: 'Smile Gallery' },
  { id: '9', src: '/images/thumbnail5.jpg', title: 'Patient Smile 5', category: 'Smile Gallery' },
  { id: '10', src: '/images/thumbnail6.jpg', title: 'Patient Smile 6', category: 'Smile Gallery' },
  { id: '11', src: '/images/thumbnail7.jpg', title: 'Patient Smile 7', category: 'Smile Gallery' },
  { id: '12', src: '/images/thumbnail8.jpg', title: 'Patient Smile 8', category: 'Smile Gallery' },
]

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filtered = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  )

  return (
    <>
      <PageHeader
        title="Smile Gallery"
        description="Real transformations from our patients. See the beautiful smiles we've created."
        breadcrumbs={[{ label: 'Gallery' }]}
        variant="gallery"
      />

      <Section className="bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-neutral text-text-light hover:bg-neutral-dark/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => { setCurrentIndex(i); setLightboxOpen(true) }}
                className="aspect-square rounded-2xl overflow-hidden bg-neutral relative group cursor-pointer w-full"
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-white font-medium">{img.title}</span>
                  {img.description && <span className="text-white/70 text-sm">{img.description}</span>}
                </div>
              </motion.button>
            ))}
          </div>
        </Container>
      </Section>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2" aria-label="Close lightbox">
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex(prev => (prev === 0 ? filtered.length - 1 : prev - 1)) }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex(prev => (prev === filtered.length - 1 ? 0 : prev + 1)) }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <img src={filtered[currentIndex]?.src} alt={filtered[currentIndex]?.title} className="w-full aspect-square object-cover rounded-2xl" />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{filtered[currentIndex]?.title}</p>
                <p className="text-white/60 text-sm">{filtered[currentIndex]?.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
