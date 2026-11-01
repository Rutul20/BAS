import { Link } from 'react-router-dom'
import {
  Target,
  Sparkles,
  Shield,
  Award,
  ArrowRight,
  Upload,
  Package,
  Microscope,
  CheckCircle2
} from 'lucide-react'
import {
  Navbar,
  Footer,
  HeroSection,
  GradedCardSlab,
  BackToTop
} from '../components'
import { featuredGradedCards, type GradedCardItem } from '../data/gradedCardsData'

interface ProcessStepItem {
  num: string
  title: string
  desc: string
  icon: typeof Upload
  bgClass: string
  textClass: string
  descClass: string
  iconWrapClass: string
  shadowClass: string
}

interface FactorItem {
  title: string
  subtitle: string
  tolerance: string
  desc: string
  icon: typeof Target
  headerBg: string
  headerText: string
  badgeBg: string
  shadowClass: string
}

interface CategoryPill {
  name: string
  dotColor: string
}

export default function HomePage(): JSX.Element {
  // 4 steps styled with solid vibrant colors and high-impact numbers
  const steps: ProcessStepItem[] = [
    {
      num: '01',
      title: 'Submit Card Details',
      desc: 'Fill out card specifications and upload clear front & reverse photographs via our online intake portal.',
      icon: Upload,
      bgClass: 'bg-[#2391FF]',
      textClass: 'text-white',
      descClass: 'text-blue-50',
      iconWrapClass: 'bg-white text-slate-950 border-2 border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_rgba(2,6,23,1)]'
    },
    {
      num: '02',
      title: 'Ship Securely',
      desc: 'Place cards into penny sleeves and semi-rigid holders, then dispatch via insured courier to our laboratory.',
      icon: Package,
      bgClass: 'bg-[#00CC66]',
      textClass: 'text-slate-950',
      descClass: 'text-slate-950',
      iconWrapClass: 'bg-white text-slate-950 border-2 border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_rgba(2,6,23,1)]'
    },
    {
      num: '03',
      title: 'Laboratory Evaluation',
      desc: 'Dual certified evaluators examine centering, corners, edges, and surface under calibrated magnification.',
      icon: Microscope,
      bgClass: 'bg-[#FFF83F]',
      textClass: 'text-slate-950',
      descClass: 'text-slate-950',
      iconWrapClass: 'bg-white text-slate-950 border-2 border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_rgba(2,6,23,1)]'
    },
    {
      num: '04',
      title: 'Sonic Encasement & Return',
      desc: 'Your collectible is sonically sealed in an archival UV-resistant acrylic holder and returned insured.',
      icon: CheckCircle2,
      bgClass: 'bg-[#F70063]',
      textClass: 'text-white',
      descClass: 'text-rose-50',
      iconWrapClass: 'bg-white text-slate-950 border-2 border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_rgba(2,6,23,1)]'
    }
  ]

  // The 4 grading factors mapped explicitly to the palette with vibrant banners
  const factors: FactorItem[] = [
    {
      title: 'Centering',
      subtitle: 'Artwork & Border Symmetry',
      tolerance: '55/45 or better for 10',
      desc: 'Measured using sub-pixel optical micrometers. Dual-axis 55/45 front & 60/40 reverse calibration.',
      icon: Target,
      headerBg: 'bg-[#2391FF]',
      headerText: 'text-white',
      badgeBg: 'bg-[#2391FF] text-white',
      shadowClass: 'shadow-[6px_6px_0px_0px_#2391FF]'
    },
    {
      title: 'Corners',
      subtitle: 'Sharpness & Geometry',
      tolerance: '4 Razor-Sharp Points',
      desc: 'Inspected under 10x-40x stereomicroscopy for clean laser-cut points, fraying, and microscopic wear.',
      icon: Sparkles,
      headerBg: 'bg-[#FFF83F]',
      headerText: 'text-slate-950',
      badgeBg: 'bg-[#FFF83F] text-slate-950 border border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_#FFF83F]'
    },
    {
      title: 'Edges',
      subtitle: 'Perimeter Smoothness',
      tolerance: 'Zero Whitening or Chipping',
      desc: 'Inspected for chipping, whitening, micro-creases, and rough cuts across all four perimeters.',
      icon: Shield,
      headerBg: 'bg-[#00CC66]',
      headerText: 'text-slate-950',
      badgeBg: 'bg-[#00CC66] text-slate-950 border border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_#00CC66]'
    },
    {
      title: 'Surface',
      subtitle: 'Gloss & Print Integrity',
      tolerance: '395nm UV Blacklight Clean',
      desc: 'Scrutinized under 395nm UV blacklight to identify scratches, print defects, roller lines, or stains.',
      icon: Award,
      headerBg: 'bg-[#F70063]',
      headerText: 'text-white',
      badgeBg: 'bg-[#F70063] text-white',
      shadowClass: 'shadow-[6px_6px_0px_0px_#F70063]'
    }
  ]

  // Categories with 4-color dot indicators
  const categories: CategoryPill[] = [
    { name: 'Pokémon Cards (Vintage & Modern)', dotColor: 'bg-[#FFF83F]' },
    { name: 'Sports Cards (Baseball, Basketball, Football)', dotColor: 'bg-[#2391FF]' },
    { name: 'Magic: The Gathering', dotColor: 'bg-[#00CC66]' },
    { name: 'Yu-Gi-Oh! TCG', dotColor: 'bg-[#F70063]' },
    { name: 'One Piece Card Game', dotColor: 'bg-[#2391FF]' },
    { name: 'Disney Lorcana', dotColor: 'bg-[#FFF83F]' },
    { name: 'Marvel & Pop Culture Collectibles', dotColor: 'bg-[#F70063]' },
    { name: 'Japanese & Foreign Language Sets', dotColor: 'bg-[#00CC66]' }
  ]

  // Showcase 3 cards side-by-side
  const showcaseCards: GradedCardItem[] = featuredGradedCards.slice(0, 3)

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Bold Modernist Hero Section */}
        <HeroSection />

        {/* 1. Featured Graded Collectibles Gallery - Direct Card Showcase (like CGC) */}
        <section className="py-20 sm:py-24 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight">
                  Featured Graded Collectibles
                </h2>
                <p className="text-base text-slate-600 mt-3 max-w-xl">
                  Inspect certified trading cards preserved in the official BAS Sonic Slab with optical clarity, tamper-proof seals, and certified sub-grades.
                </p>
              </div>

              <Link
                to="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-white bg-[#F70063] hover:bg-[#d60055] transition-all self-start md:self-auto shadow-sm"
              >
                <span>Submit Your Cards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Graded Slabs Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {showcaseCards.map((card: GradedCardItem) => (
                <div key={card.id} className="flex flex-col items-center">
                  <GradedCardSlab card={card} />
                  <div className="text-center mt-4">
                    <span className="text-sm font-black uppercase tracking-tight text-slate-950 block">
                      {card.cardTitle}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 block mt-1">
                      {card.rarity} • Grade {card.grade} {card.gradeName}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. How It Works - Clean 4-Step Row with Bold Modernist Cards */}
        <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b-2 border-slate-950 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight">
                How Card Grading Works
              </h2>
              <p className="text-base text-slate-600 mt-3">
                A transparent four-stage journey from photo submission to your returned certified slab.
              </p>
            </div>

            {/* Colorful 4-Step Cards: Solid vibrant colors across all 4 steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step: ProcessStepItem) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={step.num}
                    className={`${step.bgClass} border-2 border-slate-950 ${step.shadowClass} p-6 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b-2 border-slate-950/20">
                        <span className={`text-5xl font-black font-mono tracking-tight ${step.textClass}`}>
                          {step.num}
                        </span>
                        <div className={`p-2.5 ${step.iconWrapClass} shadow-sm`}>
                          <IconComponent className="w-6 h-6 stroke-[2.5]" />
                        </div>
                      </div>
                      <h3 className={`text-xl font-black tracking-tight mt-4 ${step.textClass}`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-medium leading-relaxed mt-2 ${step.descClass}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. The Four Grading Factors - Featuring all 4 Colors */}
        <section className="py-20 sm:py-24 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight">
                The Four Grading Criteria
              </h2>
              <p className="text-base text-slate-600 mt-3">
                Every collectible card is independently assessed across four fundamental condition factors.
              </p>
            </div>

            {/* Colorful 4-Criteria Cards: Solid colored header banners, tolerance badges, and colored solid shadows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {factors.map((factor: FactorItem) => {
                const FactorIcon = factor.icon
                return (
                  <div
                    key={factor.title}
                    className={`bg-white border-2 border-slate-950 ${factor.shadowClass} flex flex-col justify-between overflow-hidden transition-all hover:-translate-y-1`}
                  >
                    <div>
                      {/* Vibrant Solid Color Header Banner */}
                      <div className={`${factor.headerBg} ${factor.headerText} p-4 border-b-2 border-slate-950 flex items-center justify-between`}>
                        <h3 className="text-xl font-black uppercase tracking-tight">
                          {factor.title}
                        </h3>
                        <div className="p-1.5 bg-white text-slate-950 shadow-sm">
                          <FactorIcon className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Card Content with colorful tolerance pill */}
                      <div className="p-5 space-y-3">
                        <span className={`inline-block px-2.5 py-1 text-[11px] font-mono font-black uppercase tracking-wide ${factor.badgeBg}`}>
                          {factor.tolerance}
                        </span>
                        <p className="text-xs font-black uppercase tracking-wider text-slate-500 pt-1">
                          {factor.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {factor.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-700">
                Want to see the complete 10-point benchmark descriptions and centering tolerances?
              </p>
              <Link
                to="/grading-scale"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-slate-950 hover:text-white transition-all shrink-0"
              >
                <span>View Full 10-Point Scale</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Accepted Collectibles - Bold Architectural Tags */}
        <section className="py-20 sm:py-24 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight">
                Cards We Grade
              </h2>
              <p className="text-base text-slate-600 mt-3">
                We accept standard-size and thick relic cards up to 180pt across all major trading card categories.
              </p>
            </div>

            {/* Clean architectural tags with solid colored indicator dots */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat: CategoryPill) => (
                <span
                  key={cat.name}
                  className="inline-flex items-center gap-2.5 px-4 py-3 bg-white border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 shadow-sm"
                >
                  <span className={`w-3 h-3 rounded-full ${cat.dotColor} border border-slate-950`} />
                  <span>{cat.name}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Direct Call to Action with Bauhaus Buttons */}
        <section className="py-20 sm:py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.035em] leading-tight">
              Ready to Grade Your Cards?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Upload clear photos for a direct intake evaluation. No registration or upfront account fees required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FFF83F] border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-[#eae32f] transition-all shadow-sm"
              >
                <span>Submit Your Card Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/grading-scale"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-all"
              >
                <span>View 10-Point Scale</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
