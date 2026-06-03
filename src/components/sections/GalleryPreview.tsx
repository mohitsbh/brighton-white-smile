import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'

const galleryImages = [
  { src: '/images/patientsix7.jpg', alt: 'Before - Inman Aligner treatment', category: 'Before & After' },
  { src: '/images/patientsix8.jpg', alt: 'After - Inman Aligner treatment', category: 'Before & After' },
  { src: '/images/patientsix9.jpg', alt: 'Before - Inman Aligner treatment', category: 'Before & After' },
  { src: '/images/patientsix10.jpg', alt: 'After - Inman Aligner treatment', category: 'Before & After' },
  { src: '/images/thumbnail1.jpg', alt: 'Patient Smile', category: 'Smile Gallery' },
  { src: '/images/thumbnail2.jpg', alt: 'Patient Smile', category: 'Smile Gallery' },
  { src: '/images/thumbnail3.jpg', alt: 'Patient Smile', category: 'Smile Gallery' },
  { src: '/images/thumbnail4.jpg', alt: 'Patient Smile', category: 'Smile Gallery' },
]

export default function GalleryPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Smile Gallery</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-3 font-display">
            Real Transformations
          </h2>
          <p className="mt-4 text-text-light text-lg">
            See the beautiful smiles we have created for our patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {galleryImages.slice(0, 4).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="aspect-square rounded-2xl overflow-hidden bg-neutral relative group cursor-pointer"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-medium">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View full gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
