import { Link } from 'react-router-dom'
import { Shield, Target, Sparkles, Award, Info, ArrowRight } from 'lucide-react'
import { Navbar, Footer, BackToTop } from '../components'
import { gradingScale, type Grade } from '../data/gradingScaleData'

interface FactorSummary {
  name: string
  tolerance: string
  desc: string
  icon: typeof Target
  headerBg: string
  headerText: string
  badgeBg: string
  shadowClass: string
}

interface TierLegendItem {
  tierName: string
  grades: string
  badgeBg: string
}

export default function GradingScalePage(): JSX.Element {
  // 4 factors mapped explicitly to the palette with vibrant banners
  const factorSummaries: FactorSummary[] = [
    {
      name: 'Centering',
      tolerance: '55/45 or better for 10',
      desc: 'Precision digital measurement of artwork borders front and reverse.',
      icon: Target,
      headerBg: 'bg-[#2391FF]',
      headerText: 'text-white',
      badgeBg: 'bg-[#2391FF] text-white',
      shadowClass: 'shadow-[6px_6px_0px_0px_#2391FF]'
    },
    {
      name: 'Corners',
      tolerance: 'Four razor-sharp points',
      desc: '10x-40x stereomicroscopic check for whitening, fraying, or blunting.',
      icon: Sparkles,
      headerBg: 'bg-[#FFF83F]',
      headerText: 'text-slate-950',
      badgeBg: 'bg-[#FFF83F] text-slate-950 border border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_#FFF83F]'
    },
    {
      name: 'Edges',
      tolerance: 'No chipping or silvering',
      desc: 'Perimeter examination for rough cuts, dents, or edge wear.',
      icon: Shield,
      headerBg: 'bg-[#00CC66]',
      headerText: 'text-slate-950',
      badgeBg: 'bg-[#00CC66] text-slate-950 border border-slate-950',
      shadowClass: 'shadow-[6px_6px_0px_0px_#00CC66]'
    },
    {
      name: 'Surface',
      tolerance: 'Flawless original gloss',
      desc: '395nm UV blacklight detection for scratches, print defects, or creases.',
      icon: Award,
      headerBg: 'bg-[#F70063]',
      headerText: 'text-white',
      badgeBg: 'bg-[#F70063] text-white',
      shadowClass: 'shadow-[6px_6px_0px_0px_#F70063]'
    }
  ]

  // The key grade tiers mapped explicitly to the 4 palette colors
  const tierLegends: TierLegendItem[] = [
    {
      tierName: 'Pristine & Gem Tier',
      grades: '10 - 9.5',
      badgeBg: 'bg-[#FFF83F] text-slate-950 font-black'
    },
    {
      tierName: 'Mint Tier',
      grades: '9 - 8.5',
      badgeBg: 'bg-[#2391FF] text-white font-black'
    },
    {
      tierName: 'Near Mint Tier',
      grades: '8 - 7',
      badgeBg: 'bg-[#00CC66] text-slate-950 font-black'
    },
    {
      tierName: 'Played & Vintage',
      grades: '6.5 - 1',
      badgeBg: 'bg-[#F70063] text-white font-black'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#2391FF]/20 selection:text-[#2391FF]">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32">
        {/* Header - Bold Modernist Style */}
        <section className="py-16 sm:py-20 bg-white border-b-2 border-slate-950 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.035em] leading-tight">
              10-Point Card Grading Scale
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              Standardized condition benchmarks for collectible trading cards. Each grade corresponds to specific laboratory tolerances across centering, corners, edges, and surface.
            </p>
          </div>
        </section>

        {/* The 4 Criteria Summary */}
        <section className="py-16 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-8">
              The Four Evaluation Criteria
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {factorSummaries.map((f: FactorSummary) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={f.name}
                    className={`bg-white border-2 border-slate-950 ${f.shadowClass} flex flex-col justify-between overflow-hidden transition-all hover:-translate-y-1`}
                  >
                    <div>
                      {/* Vibrant Solid Color Header Banner */}
                      <div className={`${f.headerBg} ${f.headerText} p-4 border-b-2 border-slate-950 flex items-center justify-between`}>
                        <h3 className="text-xl font-black uppercase tracking-tight">
                          {f.name}
                        </h3>
                        <div className="p-1.5 bg-white text-slate-950 shadow-sm">
                          <IconComponent className="w-5 h-5 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Card Content with colorful tolerance pill */}
                      <div className="p-5 space-y-3">
                        <span className={`inline-block px-2.5 py-1 text-[11px] font-mono font-black uppercase tracking-wide ${f.badgeBg}`}>
                          {f.tolerance}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Complete 10-Point Scale Comparison Table */}
        <section className="py-16 sm:py-20 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Grading Hierarchy Reference
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  All 19 official grades from Gem Mint 10 down to Poor 1
                </p>
              </div>

              <Link
                to="/submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFF83F] border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-[#eae32f] transition-all self-start sm:self-auto shadow-sm"
              >
                <span>Submit Cards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5-Color Tier Badges Legend Bar */}
            <div className="mb-8 p-6 bg-white border-2 border-slate-950 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-slate-950 block mb-4">
                Condition Tier Color Classification:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                {tierLegends.map((tier: TierLegendItem) => (
                  <div key={tier.tierName} className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-1 text-xs font-black min-w-[48px] text-center ${tier.badgeBg}`}>
                      {tier.grades}
                    </span>
                    <span className="font-bold text-slate-900">{tier.tierName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-contrast architectural table */}
            <div className="overflow-x-auto border-2 border-slate-950 shadow-sm">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white font-black text-xs uppercase tracking-wider">
                    <th className="py-4 px-4 w-28">Grade</th>
                    <th className="py-4 px-4 w-48">Name</th>
                    <th className="py-4 px-4 w-40 font-mono">Centering (F/B)</th>
                    <th className="py-4 px-4">Condition Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {gradingScale.map((grade: Grade) => (
                    <tr
                      key={grade.displayNumber}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      {/* Grade Badge */}
                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-2.5 py-1 text-xs font-black text-center min-w-[50px] ${grade.badgeColor}`}>
                          {grade.displayNumber}
                        </span>
                      </td>

                      {/* Grade Name */}
                      <td className="py-3.5 px-4 font-black text-slate-950 text-sm">
                        {grade.name}
                      </td>

                      {/* Centering Limit */}
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                        {grade.centering}
                      </td>

                      {/* Condition Description */}
                      <td className="py-3.5 px-4 text-slate-600 leading-relaxed font-normal">
                        {grade.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quiet Disclaimer Box */}
            <div className="mt-8 p-5 bg-white border-2 border-slate-950 flex items-start gap-3 text-xs text-slate-700">
              <Info className="w-5 h-5 text-slate-950 shrink-0 mt-0.5" />
              <p>
                <strong>Professional Evaluation Disclaimer:</strong> Card grading is a professional condition assessment based on scientific examination at the time of submission. Descriptions are reference guidelines and do not guarantee prospective grades. BAS Grading Authority is an independent grading authority and is not affiliated with CGC or third-party card manufacturers.
              </p>
            </div>
          </div>
        </section>

        {/* Clean Bottom Submission Banner */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Ready to Submit Your Cards?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
              Upload photos of your front and reverse card surfaces for an intake consultation.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FFF83F] border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-[#eae32f] transition-all shadow-sm"
              >
                <span>Submit Your Card</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-all"
              >
                <span>Back to Home</span>
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
