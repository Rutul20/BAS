// Featured Graded Cards for BAS Grading Authority Showcase

export interface GradedCardItem {
  id: string
  category: 'Pokemon' | 'Sports' | 'Magic' | 'Anime'
  tabLabel: string
  shortName: string
  yearSet: string
  cardTitle: string
  subtitle: string
  serialNumber: string
  grade: string
  gradeName: string
  gradeBadgeBg: string
  gradeBadgeText: string
  subgrades: {
    centering: string
    corners: string
    edges: string
    surface: string
  }
  imageSrc: string
  accentColor: string
  rarity: string
  description: string
}

export const featuredGradedCards: GradedCardItem[] = [
  {
    id: 'charizard',
    category: 'Pokemon',
    tabLabel: 'Pokémon • Charizard 10',
    shortName: 'Charizard',
    yearSet: '1999 POKÉMON BASE SET',
    cardTitle: '#4 CHARIZARD - 1ST EDITION',
    subtitle: 'SHADOWLESS • HOLO FOIL',
    serialNumber: '#BAS-982410',
    grade: '10',
    gradeName: 'GEM MINT',
    gradeBadgeBg: 'bg-[#FFF83F]',
    gradeBadgeText: 'text-slate-950',
    subgrades: {
      centering: '10',
      corners: '10',
      edges: '9.5',
      surface: '10'
    },
    imageSrc: '/cards/charizard.png',
    accentColor: '#FFF83F',
    rarity: 'Ultra Rare Holo',
    description: 'Flawless 50/50 centering, razor-sharp factory-cut corners, pristine foil gloss, and zero whitening.'
  },
  {
    id: 'jordan',
    category: 'Sports',
    tabLabel: 'Basketball • Jordan RC 10',
    shortName: 'Jordan',
    yearSet: '1986 FLEER BASKETBALL',
    cardTitle: '#57 MICHAEL JORDAN ROOKIE',
    subtitle: 'PREMIER RED / WHITE / BLUE BORDER',
    serialNumber: '#BAS-739102',
    grade: '10',
    gradeName: 'GEM MINT',
    gradeBadgeBg: 'bg-[#FFF83F]',
    gradeBadgeText: 'text-slate-950',
    subgrades: {
      centering: '9.5',
      corners: '10',
      edges: '10',
      surface: '10'
    },
    imageSrc: '/cards/jordan.png',
    accentColor: '#2391FF',
    rarity: 'Hall of Fame Rookie',
    description: 'Legendary 1986 Fleer rookie card with immaculate red and blue borders, sharp corners, and deep ink saturation.'
  },
  {
    id: 'lotus',
    category: 'Magic',
    tabLabel: 'MTG • Black Lotus 9.5',
    shortName: 'Lotus',
    yearSet: '1993 MAGIC: THE GATHERING ALPHA',
    cardTitle: 'BLACK LOTUS - POWER NINE',
    subtitle: 'ORIGINAL ILLUSTRATION - C. RUSH',
    serialNumber: '#BAS-512944',
    grade: '9.5',
    gradeName: 'MINT+',
    gradeBadgeBg: 'bg-[#2391FF]',
    gradeBadgeText: 'text-white',
    subgrades: {
      centering: '9.5',
      corners: '9.5',
      edges: '10',
      surface: '9.5'
    },
    imageSrc: '/cards/lotus.png',
    accentColor: '#FFF83F',
    rarity: 'Alpha Artifact Mythic',
    description: 'The pinnacle of trading card game lore. Sub-pixel verified borders, rich dark ink pigmentation, and immaculate surface.'
  },
  {
    id: 'luffy',
    category: 'Anime',
    tabLabel: 'One Piece • Luffy Manga 10',
    shortName: 'Luffy',
    yearSet: '2023 ONE PIECE CARD GAME',
    cardTitle: 'MONKEY D. LUFFY (OP05-119)',
    subtitle: 'SECRET MANGA BACKGROUND • FOIL',
    serialNumber: '#BAS-883190',
    grade: '10',
    gradeName: 'GEM MINT',
    gradeBadgeBg: 'bg-[#F70063]',
    gradeBadgeText: 'text-white',
    subgrades: {
      centering: '10',
      corners: '10',
      edges: '10',
      surface: '9.5'
    },
    imageSrc: '/cards/luffy.png',
    accentColor: '#F70063',
    rarity: 'Super Parallel Manga Rare',
    description: 'Hyper-rare modern Japanese card featuring serialized laser-engraved foil background and immaculate surface clarity.'
  }
]

