import { useState } from 'react'
import { Link } from 'react-router-dom'
import GradedCardSlab from './GradedCardSlab'
import { featuredGradedCards, type GradedCardItem } from '../data/gradedCardsData'

export default function HeroSection(): JSX.Element {
  const [selectedCardId, setSelectedCardId] = useState<string>('charizard')

  const currentCard: GradedCardItem =
    featuredGradedCards.find((c: GradedCardItem) => c.id === selectedCardId) ||
    featuredGradedCards[0]

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold grotesque headline, editorial copy, and modernist stats */}
          <div className="lg:col-span-7 text-left">
            {/* Bold headline with solid Magenta / Hot Crimson (#F70063) accent */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black text-slate-950 tracking-[-0.035em] leading-[1.04] mb-6">
              Preserve Your <br />
              Collectibles with <br />
              Top <span className="text-[#F70063]">Card Grading</span>
            </h1>

            {/* Editorial body copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed mb-8">
              Dual-certified laboratory condition analysis, transparent quad-factor optical inspection, and tamper-evident sonic acrylic encasement designed for serious collectors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                to="/submit"
                className="px-7 py-3.5 bg-[#FFF83F] border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-[#eae32f] transition-all shadow-sm"
              >
                Submit Your Card
              </Link>
              <Link
                to="/grading-scale"
                className="px-7 py-3.5 border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-all"
              >
                Explore 10-Point Scale
              </Link>
            </div>

            {/* 3 Modernist Stats */}
            <div className="flex flex-wrap items-baseline gap-8 sm:gap-12 pt-6 border-t-2 border-slate-950">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight">
                  10.0
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  Gem Mint Standard
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-mono tracking-tight">
                  4-Factor
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  Quad Analysis
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#F70063] font-mono tracking-tight">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  Archival Sonic Slabs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Official Graded Card Slab Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              {/* Official BAS Graded Slab */}
              <div className="w-full">
                <GradedCardSlab card={currentCard} />
              </div>

              {/* Unified 4-Card Segmented Switcher - Single Row, Zero Wrapping */}
              <div className="w-full max-w-sm sm:max-w-md mt-4">
                <div className="grid grid-cols-4 border-2 border-slate-950 divide-x-2 divide-slate-950 bg-white shadow-sm">
                  {featuredGradedCards.map((c: GradedCardItem) => {
                    const isSelected: boolean = c.id === selectedCardId
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={(): void => setSelectedCardId(c.id)}
                        className={`py-2 px-1 text-center transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-slate-950 text-white'
                            : 'bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                      >
                        <span className="block text-xs font-black uppercase tracking-tight truncate">
                          {c.shortName}
                        </span>
                        <span
                          className={`block text-[10px] font-mono font-bold mt-0.5 truncate ${
                            isSelected ? 'text-[#FFF83F]' : 'text-slate-500'
                          }`}
                        >
                          Grade {c.grade}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
