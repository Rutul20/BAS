import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

interface NavigationItem {
  name: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Grading Scale', href: '/grading-scale' }
]

export default function Navbar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const location = useLocation()

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu whenever location changes
  useEffect((): void => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (href: string): void => {
    if (href.startsWith('/#')) {
      const targetId: string = href.replace('/#', '')
      if (location.pathname === '/') {
        const element: HTMLElement | null = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        scrolled
          ? 'border-b-2 border-slate-950 py-3 shadow-sm'
          : 'border-b border-slate-200 py-4 sm:py-5'
      }`}
    >
      {/* 4-Color Palette Brand Stripe - Solid Colors, Zero Gradients */}
      <div className="flex h-1.5 w-full absolute top-0 left-0 right-0">
        <div className="flex-1 bg-[#2391FF]" />
        <div className="flex-1 bg-[#00CC66]" />
        <div className="flex-1 bg-[#FFF83F]" />
        <div className="flex-1 bg-[#F70063]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" aria-label="BAS Grading Authority Home">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links & Single Action Button - Clean, Zero Duplication */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-7">
              {navigationItems.map((item: NavigationItem) => {
                const isAnchor: boolean = item.href.startsWith('/#')
                const isActive: boolean = !isAnchor && location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(): void => handleNavClick(item.href)}
                    className={`py-1 text-sm font-bold transition-colors relative ${
                      isActive
                        ? 'text-slate-950'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {item.name}
                    {/* Active page underline indicator */}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-slate-950" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Single Primary Action Button - No Duplication */}
            <div className="flex items-center">
              <Link
                to="/submit"
                className={`px-6 py-2.5 border-2 border-slate-950 text-xs font-black uppercase tracking-wider transition-all text-center shadow-sm ${
                  location.pathname === '/submit'
                    ? 'bg-slate-950 text-white'
                    : 'bg-[#FFF83F] text-slate-950 hover:bg-[#eae32f]'
                }`}
              >
                Submit Card
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={(): void => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-950 border-2 border-slate-950 hover:bg-slate-950 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-slate-950 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navigationItems.map((item: NavigationItem) => {
            const isAnchor: boolean = item.href.startsWith('/#')
            const isActive: boolean = !isAnchor && location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={(): void => handleNavClick(item.href)}
                className={`block px-3 py-2 text-sm font-bold transition-colors ${
                  isActive
                    ? 'text-slate-950 border-l-4 border-slate-950 pl-3'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          <div className="pt-3 border-t border-slate-200">
            <Link
              to="/submit"
              className={`block w-full text-center py-2.5 border-2 border-slate-950 text-xs font-black uppercase tracking-wider transition-colors ${
                location.pathname === '/submit'
                  ? 'bg-slate-950 text-white'
                  : 'bg-[#FFF83F] text-slate-950 hover:bg-[#eae32f]'
              }`}
            >
              Submit Card
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
