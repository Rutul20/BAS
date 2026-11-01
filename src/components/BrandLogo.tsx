interface BrandLogoProps {
  className?: string
}

export default function BrandLogo({ className = '' }: BrandLogoProps): JSX.Element {
  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* 4-Factor Laboratory Security Shield & Gem Mint Hallmark */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* 1. Heavy Archival Shield - Solid Obsidian Base */}
        <path
          d="M22 3.5L7 8.5V21C7 31.5 13.8 38.8 22 41C30.2 38.8 37 31.5 37 21V8.5L22 3.5Z"
          fill="#020617"
        />

        {/* 2. Micro-precision Engraving Line */}
        <path
          d="M22 6.5L10 11V21C10 29 15.2 35.5 22 37.5C28.8 35.5 34 29 34 21V11L22 6.5Z"
          stroke="#1E293B"
          strokeWidth="1.2"
          fill="none"
        />

        {/* 3. The 4-Factor Gemological Diamond Hallmark (The 4 Grading Pillars) */}
        {/* Top-Right: Centering (Optical Azure Blue) */}
        <polygon
          points="22,11 31.5,21 22,21"
          fill="#2391FF"
        />
        {/* Bottom-Right: Edges (Perimeter Emerald Green) */}
        <polygon
          points="31.5,21 22,31 22,21"
          fill="#00CC66"
        />
        {/* Bottom-Left: Corners (Razor Sharp Rose Pink) */}
        <polygon
          points="22,31 12.5,21 22,21"
          fill="#F70063"
        />
        {/* Top-Left: Surface (Flawless Luster Lemon Yellow) */}
        <polygon
          points="12.5,21 22,11 22,21"
          fill="#FFF83F"
        />

        {/* 4. Precision Crosshair Calipers */}
        <line x1="22" y1="8" x2="22" y2="34" stroke="#020617" strokeWidth="1.5" />
        <line x1="9" y1="21" x2="35" y2="21" stroke="#020617" strokeWidth="1.5" />

        {/* 5. Central Certified Optical Loupe Core */}
        <polygon
          points="22,17.5 25.5,21 22,24.5 18.5,21"
          fill="#FFFFFF"
          stroke="#020617"
          strokeWidth="1.5"
        />
        <circle cx="22" cy="21" r="1.5" fill="#020617" />
      </svg>

      {/* Brand Identity & Trust Subtitle */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-slate-950 tracking-[-0.04em] font-sans">
            BAS
          </span>
          <span className="text-[11px] font-black uppercase tracking-wider text-[#2391FF] font-sans">
            CERTIFIED
          </span>
        </div>
        <span className="text-[9px] font-mono font-black uppercase tracking-[0.24em] text-slate-500 mt-1">
          Grading Authority
        </span>
      </div>
    </div>
  )
}

