import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SecondaryButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SecondaryButton({
  children,
  to,
  href,
  onClick,
  className = '',
  size = 'md'
}: SecondaryButtonProps): JSX.Element {
  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-xs font-bold',
    md: 'px-6 py-3.5 text-sm font-bold',
    lg: 'px-8 py-4 text-base font-bold'
  }

  // Pure white button with crisp solid blue border - No gradients
  const baseClasses: string = `group relative inline-flex items-center justify-center gap-2 rounded-xl text-[#2391FF] bg-white hover:bg-slate-50 border-2 border-[#2391FF] hover:border-[#157ee8] hover:text-[#157ee8] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 font-sans tracking-wide cursor-pointer shadow-sm ${sizeClasses[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={baseClasses}>
      {children}
    </button>
  )
}
