import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear()

  return (
    <footer className="bg-white border-t-2 border-slate-950 text-slate-900 py-16 relative">
      {/* 4-Color Palette Brand Stripe */}
      <div className="flex h-1.5 w-full absolute top-0 left-0 right-0">
        <div className="flex-1 bg-[#2391FF]" />
        <div className="flex-1 bg-[#00CC66]" />
        <div className="flex-1 bg-[#FFF83F]" />
        <div className="flex-1 bg-[#F70063]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b-2 border-slate-950">
          {/* Brand Info */}
          <div className="space-y-3">
            <Link to="/" aria-label="BAS Grading Authority Home">
              <BrandLogo />
            </Link>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
              Independent collectible card authentication, rigorous 10-point condition evaluation, and museum-grade archival protection.
            </p>
          </div>

          {/* Direct Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950">
            <Link to="/" className="hover:text-[#2391FF] transition-colors">
              Home
            </Link>
            <Link to="/grading-scale" className="hover:text-[#2391FF] transition-colors">
              Grading Scale
            </Link>
            <Link to="/submit" className="hover:text-[#F70063] transition-colors">
              Submit Your Card
            </Link>
            <a
              href="mailto:submissions@basgrading.com"
              className="inline-flex items-center gap-1.5 text-slate-950 hover:text-[#2391FF] transition-colors lowercase"
            >
              <Mail className="w-4 h-4 text-[#2391FF]" />
              <span>submissions@basgrading.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-bold">© {currentYear} BAS Grading Authority. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Independent authentication authority. Not affiliated with CGC, PSA, or third-party card manufacturers.
          </p>
        </div>
      </div>
    </footer>
  )
}
