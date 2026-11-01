import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface PrimaryButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  icon?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  icon = true,
  className = '',
  size = 'md'
}: PrimaryButtonProps): JSX.Element {
  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-xs font-bold',
    md: 'px-6 py-3.5 text-sm font-bold',
    lg: 'px-8 py-4 text-base font-bold'
  }

  // Pure solid blue button - No gradients
  const baseClasses: string = `group relative inline-flex items-center justify-center gap-2 rounded-xl text-white bg-[#2391FF] hover:bg-[#157ee8] shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans tracking-wide cursor-pointer ${sizeClasses[size]} ${className}`

  const content: JSX.Element = (
    <span className="relative z-10 flex items-center gap-2 font-bold">
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {content}
    </button>
  )
}
