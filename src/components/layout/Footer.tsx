import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'
import Container from '../ui/Container'

const footerSections = [
  {
    title: 'Cosmetic',
    links: [
      { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
      { label: 'Teeth Whitening', href: '/services/teeth-whitening' },
      { label: 'Porcelain Veneers', href: '/services/porcelain-veneers' },
      { label: 'White Fillings', href: '/services/white-fillings' },
      { label: 'Teeth Straightening', href: '/services/teeth-straightening' },
      { label: 'Gum Contouring', href: '/services/gum-contouring' },
    ],
  },
  {
    title: 'Restorative',
    links: [
      { label: 'Crowns', href: '/services/crowns' },
      { label: 'Bridges', href: '/services/bridges' },
      { label: 'Dentures', href: '/services/dentures' },
      { label: 'Dental Implants', href: '/services/dental-implants' },
      { label: 'Oral Surgery', href: '/services/oral-surgery' },
      { label: 'Root Canal', href: '/services/root-canal' },
    ],
  },
  {
    title: 'Preventive & Facial',
    links: [
      { label: 'Dental Hygiene', href: '/services/dental-hygiene' },
      { label: "Children's Dentistry", href: '/services/childrens-dentistry' },
      { label: 'Gum Disease', href: '/services/gum-disease' },
      { label: 'Mouth Cancer Screening', href: '/services/mouth-cancer-screening' },
      { label: 'Facial Rejuvenation', href: '/services/facial-rejuvenation' },
      { label: 'Emergency Dentistry', href: '/services/emergency' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(247,92,12,0.08),_transparent_50%)]" />

        <Container className="relative z-10 pt-16 lg:pt-20 pb-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-5">
                <img src="/images/logo04-removebg-preview.png" alt="Brighton White Dental Studio" className="h-12 sm:h-16 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(96%) saturate(2162%) hue-rotate(349deg) brightness(101%) contrast(101%)' }} />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
                Premium cosmetic and general dentistry in the heart of Brighton. Expert care for your most confident smile since 2000.
              </p>

              <div className="space-y-3 mb-6">
                <a href="tel:01273779377" className="flex items-center gap-3 text-white/70 hover:text-accent text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </span>
                  01273 779377
                </a>
                <a href="mailto:info@brightonwhite.net" className="flex items-center gap-3 text-white/70 hover:text-accent text-sm transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </span>
                  info@brightonwhite.net
                </a>
                <div className="flex items-start gap-3 text-white/70 text-sm group">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </span>
                  <span>2 Hampton Place<br />Brighton, BN1 3DD</span>
                </div>
                <div className="flex items-start gap-3 text-white/70 text-sm group">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-accent" />
                  </span>
                  <div>
                    <p>Mon-Thu: 9am-1pm, 2pm-6pm</p>
                    <p>Fri: 9am-1pm, 2pm-5pm</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="http://www.facebook.com/BrightonWhite" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://twitter.com/brightonwhite1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-all hover:scale-110" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="text-white/60 hover:text-accent text-sm transition-colors flex items-center gap-1.5 group">
                        <ChevronRight className="w-3 h-3 text-accent/0 group-hover:text-accent transition-all -ml-4 group-hover:ml-0" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="border-t border-white/5">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} Brighton White Dental Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/new-patients" className="hover:text-accent transition-colors">New Patients</Link>
            <span>|</span>
            <Link to="/feedback" className="hover:text-accent transition-colors">Feedback</Link>
            <span>|</span>
            <span>Website by <strong className="text-white/40">TechUniverse</strong></span>
          </div>
        </Container>
      </div>
    </footer>
  )
}
