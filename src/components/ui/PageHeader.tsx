import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Sparkles, Shield, Smile, Phone } from 'lucide-react'
import Container from './Container'

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href?: string }[]
  children?: ReactNode
  variant?: 'default' | 'services' | 'team' | 'contact' | 'gallery' | 'info'
}

const variantStyles: Record<string, { icon: typeof Sparkles | null; badge: string }> = {
  default: { icon: null, badge: '' },
  services: { icon: Sparkles, badge: 'All Treatments' },
  team: { icon: Shield, badge: 'Our Team' },
  contact: { icon: Phone, badge: 'Get in Touch' },
  gallery: { icon: Smile, badge: 'Patient Gallery' },
  info: { icon: null, badge: '' },
}

export default function PageHeader({ title, description, breadcrumbs, children, variant = 'default' }: PageHeaderProps) {
  const v = variantStyles[variant]
  const Icon = v.icon

  return (
    <div className="relative bg-primary pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary to-primary" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/[0.07] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-40 h-40 border-r border-t border-white/[0.03] rounded-tr-[100px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {breadcrumbs && (
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-5 tracking-wide" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/60">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="flex items-start gap-5">
            {Icon && (
              <div className="hidden sm:flex w-12 h-12 rounded-xl bg-accent/10 items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-5 h-5 text-accent" />
              </div>
            )}
            <div className="min-w-0">
              {v.badge && (
                <span className="inline-flex items-center gap-1.5 text-accent text-[11px] tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 rounded-full">
                  {v.badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-tight">
                {title}
              </h1>
              {description && (
                <p className="mt-4 text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>

          {children}
        </motion.div>
      </Container>
    </div>
  )
}
