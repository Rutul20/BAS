import { useState, useEffect } from 'react'
import { Shield } from 'lucide-react'
import { type GradedCardItem } from '../data/gradedCardsData'

interface GradedCardSlabProps {
  card: GradedCardItem
  className?: string
}

export default function GradedCardSlab({ card, className = '' }: GradedCardSlabProps): JSX.Element {
  const [imageError, setImageError] = useState<boolean>(false)

  // Reset error state if the card or imageSrc changes
  useEffect((): void => {
    setImageError(false)
  }, [card.id, card.imageSrc])

  // Resolve image URL with Vite base URL so it loads properly on GitHub Pages and local dev
  const resolveImageUrl = (src: string): string => {
    if (!src) return ''
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src
    }
    const baseUrl: string = import.meta.env.BASE_URL || '/'
    const cleanBase: string = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    const cleanSrc: string = src.startsWith('/') ? src.slice(1) : src
    if (cleanBase !== '/' && cleanSrc.startsWith(cleanBase.slice(1))) {
      return `/${cleanSrc}`
    }
    return `${cleanBase}${cleanSrc}`
  }

  // SVG Fallback illustration when image is loading or unavailable
  const renderFallbackArt = (id: string): JSX.Element => {
    switch (id) {
      case 'charizard':
        return (
          <div className="w-full h-full bg-amber-500 flex flex-col items-center justify-between p-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FFF83F]/20 flex items-center justify-center">
              <span className="text-8xl opacity-20">🔥</span>
            </div>
            <div className="w-full flex items-center justify-between text-[10px] font-black text-slate-900 z-10">
              <span>CHARIZARD HP 120</span>
              <span className="px-1.5 py-0.5 bg-red-600 text-white font-mono text-[8px]">FIRE</span>
            </div>
            <div className="w-full flex-grow flex items-center justify-center my-2 relative z-10">
              <div className="w-32 h-32 bg-red-600 flex flex-col items-center justify-center shadow-inner">
                <span className="text-5xl">🐉</span>
                <span className="text-[9px] font-black text-white mt-1 uppercase tracking-wider">Fire Spin</span>
              </div>
            </div>
            <div className="w-full text-center text-[9px] font-black text-slate-900 bg-amber-300 py-1 z-10">
              1999 Base Set • 4/102 • Holo Rare
            </div>
          </div>
        )
      case 'jordan':
        return (
          <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-between p-3 relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-[10px] font-black text-white z-10">
              <span>1986 FLEER PREMIER</span>
              <span className="px-1.5 py-0.5 bg-red-600 text-white font-mono text-[8px]">GUARD</span>
            </div>
            <div className="w-full flex-grow flex items-center justify-center my-2 relative z-10">
              <div className="w-32 h-32 bg-slate-800 flex flex-col items-center justify-center">
                <span className="text-5xl">🏀</span>
                <span className="text-base font-black text-[#F70063] mt-1 font-mono">#23 CHICAGO</span>
              </div>
            </div>
            <div className="w-full text-center text-[9px] font-black text-white bg-blue-600 py-1 z-10">
              MICHAEL JORDAN • ROOKIE CARD #57
            </div>
          </div>
        )
      case 'lotus':
        return (
          <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-between p-3 relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-[10px] font-black text-amber-200 z-10">
              <span>BLACK LOTUS</span>
              <span className="font-mono text-[9px] text-amber-300">Cost: 0</span>
            </div>
            <div className="w-full flex-grow flex items-center justify-center my-2 relative z-10">
              <div className="w-32 h-32 bg-slate-900 flex flex-col items-center justify-center">
                <span className="text-5xl">🪷</span>
                <span className="text-[9px] font-mono text-amber-400 mt-1 uppercase">Artifact</span>
              </div>
            </div>
            <div className="w-full text-center text-[8px] font-mono text-slate-300 bg-slate-900 py-1 z-10">
              Tap, Sacrifice Black Lotus: Add 3 mana.
            </div>
          </div>
        )
      case 'luffy':
      default:
        return (
          <div className="w-full h-full bg-red-700 flex flex-col items-center justify-between p-3 relative overflow-hidden">
            <div className="w-full flex items-center justify-between text-[10px] font-black text-white z-10">
              <span>MONKEY D. LUFFY</span>
              <span className="px-1.5 py-0.5 bg-yellow-400 text-slate-950 font-black text-[8px]">LEADER</span>
            </div>
            <div className="w-full flex-grow flex items-center justify-center my-2 relative z-10">
              <div className="w-32 h-32 bg-red-900 flex flex-col items-center justify-center">
                <span className="text-5xl">🏴‍☠️</span>
                <span className="text-[9px] font-black text-yellow-300 mt-1 font-mono">POWER: 5000</span>
              </div>
            </div>
            <div className="w-full text-center text-[9px] font-black text-slate-950 bg-yellow-400 py-1 z-10">
              SUPER PARALLEL MANGA FOIL
            </div>
          </div>
        )
    }
  }

  return (
    <div className={`relative max-w-sm sm:max-w-md mx-auto ${className}`}>
      {/* Acrylic Polycarbonate Shell with architectural square border */}
      <div className="bg-slate-50/90 p-3.5 sm:p-4 border-2 border-slate-950 shadow-md relative overflow-hidden">
        {/* Optical Reflection Highlight Lines - Solid */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rotate-45 pointer-events-none" />

        {/* 1. Official BAS Top Slab Label - Clean Square Architectural Insert */}
        <div className="bg-white p-3.5 border border-slate-200/90 shadow-sm mb-3 relative z-10">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 bg-slate-950 flex items-center justify-center text-white">
                <Shield className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black tracking-wider text-slate-950 font-sans">
                BAS GRADING AUTHORITY
              </span>
            </div>

            {/* Serial Barcode Simulator */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 h-full bg-slate-900" />
                <span className="w-1 h-2.5 bg-slate-900" />
                <span className="w-0.5 h-full bg-slate-900" />
                <span className="w-1 h-2 bg-slate-900" />
                <span className="w-0.5 h-full bg-slate-900" />
              </div>
              <span className="text-[10px] font-mono text-slate-600 font-black">
                {card.serialNumber}
              </span>
            </div>
          </div>

          {/* Card Info and Big Grade Badge */}
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-black text-slate-950 tracking-tight truncate">
                {card.yearSet}
              </h4>
              <p className="text-xs font-black text-[#2391FF] truncate">
                {card.cardTitle}
              </p>
              <p className="text-[10px] text-slate-600 font-mono font-bold truncate">
                {card.subtitle}
              </p>
            </div>

            {/* Solid Grade Badge - Square Architectural Block */}
            <div className={`flex flex-col items-center justify-center px-3.5 py-1.5 ${card.gradeBadgeBg} ${card.gradeBadgeText} font-black shrink-0`}>
              <span className="text-2xl leading-none">{card.grade}</span>
              <span className="text-[8px] tracking-wider uppercase font-black">{card.gradeName}</span>
            </div>
          </div>

          {/* Quad Subgrades Bar - Clean Square Tiles */}
          <div className="mt-2.5 pt-2 border-t border-slate-100 grid grid-cols-4 gap-1.5 text-center text-[10px] font-mono font-black">
            <div className="py-1 px-1 bg-slate-100/90">
              <span className="block text-slate-500 text-[8px] uppercase font-bold tracking-wider">Cent</span>
              <span className="text-slate-950">{card.subgrades.centering}</span>
            </div>
            <div className="py-1 px-1 bg-slate-100/90">
              <span className="block text-slate-500 text-[8px] uppercase font-bold tracking-wider">Corn</span>
              <span className="text-slate-950">{card.subgrades.corners}</span>
            </div>
            <div className="py-1 px-1 bg-slate-100/90">
              <span className="block text-slate-500 text-[8px] uppercase font-bold tracking-wider">Edge</span>
              <span className="text-slate-950">{card.subgrades.edges}</span>
            </div>
            <div className="py-1 px-1 bg-slate-100/90">
              <span className="block text-slate-500 text-[8px] uppercase font-bold tracking-wider">Surf</span>
              <span className="text-slate-950">{card.subgrades.surface}</span>
            </div>
          </div>
        </div>

        {/* 2. Inner Recessed Card Well - Square Architecture */}
        <div className="bg-slate-200/80 p-2.5 relative flex items-center justify-center aspect-[2.5/3.5] max-h-[360px] overflow-hidden">
          {/* Collectible Card - Square Frame */}
          <div className="w-full h-full overflow-hidden shadow-md bg-white relative">
            {!imageError ? (
              <img
                src={resolveImageUrl(card.imageSrc)}
                alt={card.cardTitle}
                onError={(): void => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              renderFallbackArt(card.id)
            )}
          </div>
        </div>

        {/* 3. Bottom Security Hologram Foil Seal - Square Architecture */}
        <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-slate-500 px-1 font-black">
          <span className="tracking-wider">HERMETIC SONIC SEAL</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#FFF83F] text-slate-950 font-black text-[8px]">
            <span>BAS VERIFIED</span>
          </div>
          <span className="tracking-wider">UV PROTECTED</span>
        </div>
      </div>
    </div>
  )
}
