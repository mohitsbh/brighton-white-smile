import { type ElementType, type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  as?: ElementType
  href?: string
  to?: string
  children?: ReactNode
}

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/20',
  secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  ghost: 'text-primary hover:bg-primary/5',
  accent: 'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/20',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, as: Component = 'button', ...props }, ref) => {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Component
          ref={ref}
          className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
          {...props}
        >
          {children}
        </Component>
      </motion.div>
    )
  }
)

Button.displayName = 'Button'

export default Button
