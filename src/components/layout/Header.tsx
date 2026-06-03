import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown, Clock, Mail, MapPin, Sparkles, Shield, ShieldCheck, Eye, Stethoscope, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import { services, serviceCategories } from '../../data/services'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', mega: true },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const catIcons: Record<string, React.ElementType> = {
  cosmetic: Sparkles, restorative: Shield, preventive: ShieldCheck, facial: Eye, general: Stethoscope,
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMegaOpen, setIsMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsMegaOpen(false)
  }, [location])

  const isActive = (href: string) => location.pathname === href || (href !== '/' && location.pathname.startsWith(href))

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`hidden lg:block transition-all duration-300 ${
        scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-9 opacity-100'
      }`}>
        <div className="bg-primary/95 backdrop-blur-sm border-b border-white/5">
          <Container className="h-full flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a href="tel:01273779377" className="flex items-center gap-1.5 text-white/60 hover:text-accent text-[11px] transition-colors">
                <Phone className="w-3 h-3 text-accent" /> 01273 779377
              </a>
              <a href="mailto:info@brightonwhite.net" className="flex items-center gap-1.5 text-white/60 hover:text-accent text-[11px] transition-colors">
                <Mail className="w-3 h-3 text-accent" /> info@brightonwhite.net
              </a>
              <span className="flex items-center gap-1.5 text-white/40 text-[11px]">
                <MapPin className="w-3 h-3 text-accent" /> 2 Hampton Place, Brighton
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-[11px]">
              <Clock className="w-3 h-3 text-accent" />
              <span>Mon-Thu 9-6 · Fri 9-5</span>
            </div>
          </Container>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/images/logo04-removebg-preview.png"
                alt="Brighton White Dental Studio"
                className="h-10 sm:h-14 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(96%) saturate(2162%) hue-rotate(349deg) brightness(101%) contrast(101%)' }}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {mainNav.map((item) => (
                <div key={item.href} className="relative"
                  onMouseEnter={() => item.mega && setIsMegaOpen(true)}
                  onMouseLeave={() => item.mega && setIsMegaOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={`px-3 xl:px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-transform after:duration-200 ${
                      isActive(item.href)
                        ? `after:scale-x-100 ${scrolled ? 'text-accent after:bg-accent' : 'text-white after:bg-white'}`
                        : `after:scale-x-0 hover:after:scale-x-100 ${scrolled ? 'text-text hover:text-accent after:bg-accent' : 'text-white/70 hover:text-white after:bg-white'}`
                    }`}
                  >
                    {item.label}
                    {item.mega && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isMegaOpen ? 'rotate-180' : ''}`} />}
                  </Link>

                  {item.mega && (
                    <AnimatePresence>
                      {isMegaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[780px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
                          onMouseEnter={() => setIsMegaOpen(true)}
                          onMouseLeave={() => setIsMegaOpen(false)}
                        >
                          <div className="grid grid-cols-5 gap-5">
                            {serviceCategories.filter(c => services.some(s => s.category === c.id)).map((cat) => {
                              const catServices = services.filter(s => s.category === cat.id)
                              const Icon = catIcons[cat.id] || Sparkles
                              return (
                                <div key={cat.id}>
                                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                                      <Icon className="w-3.5 h-3.5 text-accent" />
                                    </div>
                                    <Link to={`/services#${cat.id}`} className="text-xs font-semibold text-primary uppercase tracking-wider hover:text-accent transition-colors">
                                      {cat.name}
                                    </Link>
                                  </div>
                                  <ul className="space-y-0.5">
                                    {catServices.map((s) => (
                                      <li key={s.id}>
                                        <Link
                                          to={s.href}
                                          className="text-xs text-text-light hover:text-accent hover:bg-accent/5 transition-colors block py-1.5 px-2 rounded-lg"
                                          onClick={() => setIsMegaOpen(false)}
                                        >
                                          {s.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            })}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <p className="text-xs text-text-muted">Can't find what you're looking for?</p>
                            <Link
                              to="/contact"
                              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dark transition-colors bg-accent/5 px-4 py-2 rounded-lg hover:bg-accent/10"
                              onClick={() => setIsMegaOpen(false)}
                            >
                              Book a Consultation
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:01273779377"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled ? 'text-accent hover:text-accent-dark' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                01273 779377
              </a>
              <Link
                to="/contact"
                className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-dark transition-all"
              >
                Book Appointment
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <Container className="py-6">
              <nav className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive(item.href) ? 'bg-accent/10 text-accent' : 'text-text hover:bg-neutral'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3 px-4">All Treatments</p>
                <div className="space-y-3 max-h-[50vh] overflow-y-auto px-2">
                  {serviceCategories.filter(c => services.some(s => s.category === c.id)).map((cat) => {
                    const catServices = services.filter(s => s.category === cat.id)
                    const Icon = catIcons[cat.id] || Sparkles
                    return (
                      <div key={cat.id}>
                        <div className="flex items-center gap-2 px-2 py-1.5">
                          <Icon className="w-3.5 h-3.5 text-accent" />
                          <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">{cat.name}</span>
                        </div>
                        <div className="ml-5 space-y-0.5">
                          {catServices.map((s) => (
                            <Link
                              key={s.id}
                              to={s.href}
                              className="block px-3 py-1.5 text-sm text-text-light hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-4">
                <a
                  href="tel:01273779377"
                  className="flex items-center justify-center gap-2 bg-accent/10 text-accent font-semibold px-5 py-3 rounded-xl text-sm"
                >
                  <Phone className="w-4 h-4" />
                  01273 779377
                </a>
                <Link
                  to="/contact"
                  className="bg-accent text-white px-5 py-3 rounded-xl text-sm font-semibold text-center hover:bg-accent-dark transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
