// Comprehensive Card Grading Data for BAS Grading Authority

export interface Grade {
  number: number
  displayNumber: string
  name: string
  tier: 'pristine' | 'mint' | 'near-mint' | 'excellent' | 'vintage'
  badgeColor: string
  description: string
  centering: string
  corners: string
  edges: string
  surface: string
  characteristics: string[]
  idealCondition: string
}

export interface GradingFactor {
  factor: 'Centering' | 'Corners' | 'Edges' | 'Surface'
  iconName: string
  subtitle: string
  description: string
  details: string
  inspectionMethod: string
  standards: {
    gradeTier: string
    tolerance: string
  }[]
  tips: string[]
}

export interface CardCategory {
  id: string
  name: string
  badge: string
  description: string
  eligibleExamples: string[]
  maxThickness: string
  iconName: string
  highlights: string[]
}

export interface FAQItem {
  id: string
  category: 'general' | 'submission' | 'grading' | 'shipping'
  question: string
  answer: string
}

// Complete 10-point scale with all 19 official grades as requested
export const gradingScale: Grade[] = [
  {
    number: 10,
    displayNumber: '10',
    name: 'Gem Mint',
    tier: 'pristine',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-black',
    description: 'The absolute pinnacle of card preservation. Pristine in every dimension under 10x magnification. No imperfections visible even to trained professional eyes.',
    centering: '50/50 front (or within 55/45), 60/40 or better reverse',
    corners: 'Four razor-sharp corners with flawless alignment and zero fraying',
    edges: 'Pristine, crisp edge cut with complete absence of whitening or chipping',
    surface: 'Immaculate gloss, zero scratches, print spots, roller lines, or blemishes',
    characteristics: [
      'Virtually perfect centering with balanced border borders',
      'Original factory gloss and foil sheen fully intact',
      'Zero microscopic whitening along any border or cut line',
      'Corners maintain original laser-cut sharpness',
      'Card stock rigid, completely flat with zero warping'
    ],
    idealCondition: 'Fewer than 3% of all inspected cards achieve this flawless distinction. Represents a museum-grade archival collectible.'
  },
  {
    number: 9.5,
    displayNumber: '9.5',
    name: 'Mint+',
    tier: 'pristine',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-black',
    description: 'An exceptional high-end card that missed Gem Mint 10 on only a solitary, microscopic sub-grade nuance detectable solely under laboratory magnification.',
    centering: '52/48 or better front, 65/35 or better reverse',
    corners: 'Sharp corners with at most one nearly imperceptible microscopic pinpoint',
    edges: 'Clean edges with almost zero handling evidence',
    surface: 'Flawless surface with perhaps a microscopic factory print dot',
    characteristics: [
      'Outstanding centering that approaches perfect symmetry',
      'Full original gloss and color vibrancy',
      'Corners sharp to the naked eye under normal daylight',
      'Card stock pristine with factory stiffness'
    ],
    idealCondition: 'A top-tier collector grade for modern ultra-modern and vintage specimens alike.'
  },
  {
    number: 9,
    displayNumber: '9',
    name: 'Mint',
    tier: 'mint',
    badgeColor: 'bg-[#2391FF] text-white font-black',
    description: 'A superb, clean, and sharp card with only minor minor flaws that do not detract from overall presentation and eye appeal.',
    centering: '55/45 or better front, 70/30 or better reverse',
    corners: 'Sharp corners; microscopic softness allowed on a single corner',
    edges: 'Clean edges with minimal factory rough cut or faint pinpoint speck',
    surface: 'High gloss with zero scratches; minor factory print imperfection permitted',
    characteristics: [
      'Strong centering within 55/45 parameters',
      'Vibrant original color and deep ink saturation',
      'Minimal handling evidence from pack opening',
      'Rigid, flat card stock'
    ],
    idealCondition: 'The standard benchmark for pristine modern pack-pulled cards.'
  },
  {
    number: 8.5,
    displayNumber: '8.5',
    name: 'Near Mint/Mint+',
    tier: 'mint',
    badgeColor: 'bg-[#2391FF] text-white font-black',
    description: 'A premium Near Mint/Mint card featuring superior eye appeal with slight factory or handling touches that prevent a straight Mint 9.',
    centering: '58/42 or better front, 75/25 reverse',
    corners: 'Sharp corners with subtle touch of wear on one corner',
    edges: 'Very clean edges with faint whitening on one side',
    surface: 'Smooth surface; minor factory print line or speck allowed',
    characteristics: [
      'Very appealing centering and border balance',
      'Original gloss preserved across both sides',
      'No creases, indentations, or heavy marks',
      'Corners sharp with minor softness under 10x magnification'
    ],
    idealCondition: 'High investment value with exceptional aesthetic appeal.'
  },
  {
    number: 8,
    displayNumber: '8',
    name: 'Near Mint/Mint',
    tier: 'near-mint',
    badgeColor: 'bg-[#00CC66] text-slate-950 font-black',
    description: 'An attractive, high-end card showing minor wear visible upon close inspection. Retains strong collector appeal and solid market standing.',
    centering: '60/40 or better front, 75/25 reverse',
    corners: 'Slight fraying or minor touch on two corners',
    edges: 'Minor edge chipping or whitening limited to small localized regions',
    surface: 'Minor surface scratch visible only under angled light; no creases',
    characteristics: [
      'Solid centering with acceptable visual balance',
      'Light handling wear consistent with careful sleeve removal',
      'Sharp overall impression in protective holder',
      'Card stock flat with clean borders'
    ],
    idealCondition: 'Standard grade for vintage cards from the 1980s to 1990s kept in protective binders.'
  },
  {
    number: 7.5,
    displayNumber: '7.5',
    name: 'Near Mint+',
    tier: 'near-mint',
    badgeColor: 'bg-[#00CC66] text-slate-950 font-black',
    description: 'A card that exceeds Near Mint 7 standards in eye appeal and centering, but exhibits subtle multi-factor wear that limits a grade of 8.',
    centering: '62/38 or better front, 80/20 reverse',
    corners: 'Minor corner touch visible under standard lighting',
    edges: 'Noticeable light whitening on two edges',
    surface: 'Minor surface friction or print defect; clean appearance',
    characteristics: [
      'Well-centered card with clear imagery and text',
      'Free of structural bends, creases, or surface indents',
      'Minor localized edge wear noticeable upon close inspection'
    ],
    idealCondition: 'A strong collectible grade for vintage and pre-modern gaming cards.'
  },
  {
    number: 7,
    displayNumber: '7',
    name: 'Near Mint',
    tier: 'near-mint',
    badgeColor: 'bg-[#00CC66] text-slate-950 font-bold',
    description: 'Shows slight handling wear such as minor corner fraying, small edge whitening, or faint surface scratches, yet retains great overall visual presentation.',
    centering: '65/35 or better front, 80/20 reverse',
    corners: 'Slight rounding on two corners or wear on all four',
    edges: 'Visible light chipping or whitening along multiple edges',
    surface: 'Minor scratches or scuffs; gloss remains evident',
    characteristics: [
      'Acceptable centering within 65/35 front borders',
      'No deep scratches or moisture damage',
      'Original color saturation remains sharp',
      'Card lies flat'
    ],
    idealCondition: 'A very respectable grade for vintage cards from the 1960s-1970s.'
  },
  {
    number: 6.5,
    displayNumber: '6.5',
    name: 'Excellent/Near Mint+',
    tier: 'excellent',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-bold border border-slate-400',
    description: 'Bridges Excellent and Near Mint. Eye appeal is above average, but noticeable corner softness or moderate edge whitening is present.',
    centering: '70/30 or better front, 85/15 reverse',
    corners: 'Noticeable corner softness or minor blunting',
    edges: 'Moderate edge chipping or continuous light whitening',
    surface: 'Surface may show minor scuffs, print lines, or small pressure point',
    characteristics: [
      'Good eye appeal from arm length',
      'Moderate edge wear visible without magnification',
      'No severe creases or structural tears'
    ],
    idealCondition: 'Popular for mid-tier vintage collectors seeking high eye appeal at affordable prices.'
  },
  {
    number: 6,
    displayNumber: '6',
    name: 'Excellent/Near Mint',
    tier: 'excellent',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-bold border border-slate-400',
    description: 'A solid card with obvious surface wear, moderate edge whitening, or slight corner rounding. Free from severe damage.',
    centering: '70/30 or better front, 90/10 reverse',
    corners: 'Moderate corner rounding or fuzziness on multiple corners',
    edges: 'Edge whitening noticeable along top and bottom edges',
    surface: 'Several light scratches or minor loss of original gloss',
    characteristics: [
      'Original artwork and text completely legible',
      'Visible handling wear from casual play or unsleeved storage',
      'No heavy creasing or peeling corners'
    ],
    idealCondition: 'Common grade for lightly played Pokémon or Magic cards from early sets.'
  },
  {
    number: 5.5,
    displayNumber: '5.5',
    name: 'Excellent+',
    tier: 'excellent',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-bold border border-slate-400',
    description: 'Displays multiple minor wear factors but maintains respectable eye appeal with no major creasing across the central artwork.',
    centering: '75/25 or better front, 90/10 reverse',
    corners: 'Visible corner rounding with fibers exposed',
    edges: 'Noticeable chipping and whitening across all borders',
    surface: 'Scuffs and minor indentations; no heavy paper breakdown',
    characteristics: [
      'Fairly centered with identifiable artwork',
      'No staining, handwriting, or severe moisture damage',
      'May have a faint micro-crease outside the central subject'
    ],
    idealCondition: 'Clean binder card that displays well in a protective slab.'
  },
  {
    number: 5,
    displayNumber: '5',
    name: 'Excellent',
    tier: 'excellent',
    badgeColor: 'bg-[#FFF83F] text-slate-950 font-bold border border-slate-400',
    description: 'Shows moderate wear across all areas. Corners have definite rounding, edges show noticeable chipping, and surface gloss is reduced.',
    centering: '75/25 or better front, 90/10 reverse',
    corners: 'Definite corner rounding across all four corners',
    edges: 'Whitening and slight roughness along edges',
    surface: 'Surface scratches, minor print defects, possible hairline crease',
    characteristics: [
      'Moderate play wear or binder album ring impressions',
      'Artwork colors may show slight fading from age',
      'No structural separation of card layers'
    ],
    idealCondition: 'Typical grade for vintage cards played without card sleeves in the 1970s and 1980s.'
  },
  {
    number: 4.5,
    displayNumber: '4.5',
    name: 'Very Good/Excellent+',
    tier: 'vintage',
    badgeColor: 'bg-slate-600 text-white font-bold',
    description: 'Exhibits wear typical of a card enjoyed in regular games or handled frequently, but still complete and structurally intact.',
    centering: '80/20 or better front, 90/10 reverse',
    corners: 'Rounded corners with light fraying',
    edges: 'Significant whitening along multiple borders',
    surface: 'Moderate scratches, loss of gloss, light surface crease',
    characteristics: [
      'Card is complete with original dimensions',
      'Surface wear evident in normal lighting',
      'No writing, tears, or major paper loss'
    ],
    idealCondition: 'Entry-level grade for holy grail vintage cards such as 1952 Mantle or Base Set Charizard.'
  },
  {
    number: 4,
    displayNumber: '4',
    name: 'Very Good/Excellent',
    tier: 'vintage',
    badgeColor: 'bg-slate-600 text-white font-bold',
    description: 'Evident handling wear including noticeable corner rounding, edge chipping, surface scratches, and a light crease that does not break paper fibers.',
    centering: '85/15 or better front, 90/10 reverse',
    corners: 'Heavily rounded corners without sharp points',
    edges: 'Widespread whitening and edge roughness',
    surface: 'Obvious surface scratches, slight soiling, light crease',
    characteristics: [
      'Clear subject visibility despite overall wear',
      'Lies reasonably flat in card slab',
      'Intact card structure without lamination peeling'
    ],
    idealCondition: 'Affordable collector grade for rare vintage cards.'
  },
  {
    number: 3.5,
    displayNumber: '3.5',
    name: 'Very Good+',
    tier: 'vintage',
    badgeColor: 'bg-[#F70063]/75 text-white font-bold',
    description: 'Shows significant wear but maintains better overall visual integrity than a straight Very Good 3.',
    centering: '85/15 or better front, 95/5 reverse',
    corners: 'Pronounced corner wear and blunting',
    edges: 'Substantial edge chipping and roughness',
    surface: 'Moderate creasing, scuffing, or light soiling',
    characteristics: [
      'All text and artwork remain discernible',
      'Creasing does not tear through the card core',
      'No missing pieces'
    ],
    idealCondition: 'Honest vintage survivor with character and history.'
  },
  {
    number: 3,
    displayNumber: '3',
    name: 'Very Good',
    tier: 'vintage',
    badgeColor: 'bg-slate-500 text-white font-bold',
    description: 'Shows heavy wear throughout. Corners are completely rounded, edges are rough with heavy whitening, and creasing is noticeable.',
    centering: '90/10 or better front, 95/5 reverse',
    corners: 'Rounded, blunt corners with fiber separation',
    edges: 'Extensive chipping, flaking, or whitening',
    surface: 'Multiple creases, scuff marks, surface dirt or faint staining',
    characteristics: [
      'Card has been extensively handled and played',
      'Creases may be visible across artwork',
      'Card remains intact without missing paper'
    ],
    idealCondition: 'Accessible grade for iconic vintage grail cards.'
  },
  {
    number: 2.5,
    displayNumber: '2.5',
    name: 'Good+',
    tier: 'vintage',
    badgeColor: 'bg-slate-400 text-slate-950 font-bold',
    description: 'A heavily worn card with pronounced defects, deep creases, or heavy edge fraying, but free from structural separation.',
    centering: '90/10 or better front, 95/5 reverse',
    corners: 'Severely rounded corners',
    edges: 'Rough, worn edges with possible small nick',
    surface: 'Heavy creasing, surface scuffing, loss of gloss',
    characteristics: [
      'Noticeable wear from across the room',
      'Card core remains structurally sound',
      'Original card identity is unmistakable'
    ],
    idealCondition: 'Valuable for complete set builders of rare vintage editions.'
  },
  {
    number: 2,
    displayNumber: '2',
    name: 'Good',
    tier: 'vintage',
    badgeColor: 'bg-slate-400 text-slate-950 font-bold',
    description: 'Heavily worn with obvious creasing, softened corners, widespread edge chipping, and surface soiling or loss of gloss.',
    centering: 'No centering minimum',
    corners: 'Completely blunt or worn corners',
    edges: 'Severe edge wear, chipping, and roughness',
    surface: 'Deep creases, scuffs, moderate staining, or pinholes',
    characteristics: [
      'Heavy signs of play or improper storage',
      'Artwork and text still identifiable',
      'No major missing pieces'
    ],
    idealCondition: 'Preserves authentic vintage treasures that survived playground trades.'
  },
  {
    number: 1.5,
    displayNumber: '1.5',
    name: 'Fair',
    tier: 'vintage',
    badgeColor: 'bg-slate-300 text-slate-950 font-bold',
    description: 'Extreme wear including multiple heavy creases, severe edge tears, heavy staining, or minor missing corner fragment.',
    centering: 'No minimum centering requirement',
    corners: 'Severely damaged, rounded, or torn',
    edges: 'Heavy flaking, nicks, and fiber separation',
    surface: 'Severe creasing, writing, major paper abrasions, stains',
    characteristics: [
      'Heavy structural breakdown of card fibers',
      'Card remains predominantly intact',
      'Recognizable as the authentic collectible'
    ],
    idealCondition: 'Guarantees authenticity and seals damaged historic pieces safely.'
  },
  {
    number: 1,
    displayNumber: '1',
    name: 'Poor',
    tier: 'vintage',
    badgeColor: 'bg-slate-200 text-slate-900 font-bold border border-slate-400',
    description: 'The lowest numerical grade. The card exhibits catastrophic wear, extensive creasing, writing, missing pieces, or heavy staining.',
    centering: 'No minimum requirement',
    corners: 'Completely destroyed or partially missing',
    edges: 'Severely frayed, torn, or ragged',
    surface: 'Extensive deep creases, tears, surface scuffs, severe staining',
    characteristics: [
      'Card has survived extreme handling or environmental exposure',
      'Slabbed primarily for official authentication and preservation',
      'Subject and identification remain verifiable'
    ],
    idealCondition: 'Permanent encapsulation and verification for the rarest cards in history.'
  }
]

// The 4 Major Grading Factors
export const gradingFactors: GradingFactor[] = [
  {
    factor: 'Centering',
    iconName: 'Target',
    subtitle: 'Geometric border alignment & image positioning',
    description: 'Evaluates how accurately the artwork and printed design are centered relative to the card borders on both front and reverse.',
    details: 'Our optical scanning system uses high-resolution digital micrometers to calculate exact border widths across all four sides (top, bottom, left, right). A Gem Mint 10 standard demands near-perfect 50/50 alignment on the front, with 55/45 being the maximum allowable deviation. Reverse borders allow up to 60/40 for a 10 grade.',
    inspectionMethod: 'Dual-axis digital optical micrometers with sub-pixel edge detection algorithms under balanced 5000K diffuse illumination.',
    standards: [
      { gradeTier: 'Grade 10 (Gem Mint)', tolerance: '50/50 to 55/45 front | 60/40 or better reverse' },
      { gradeTier: 'Grade 9 (Mint)', tolerance: '55/45 to 60/40 front | 70/30 or better reverse' },
      { gradeTier: 'Grade 8 (Near Mint/Mint)', tolerance: '60/40 to 65/35 front | 75/25 or better reverse' },
      { gradeTier: 'Grade 7 (Near Mint)', tolerance: '65/35 to 70/30 front | 80/20 or better reverse' },
      { gradeTier: 'Grade 6 & Below', tolerance: '70/30 or worse | evaluated by overall eye appeal' }
    ],
    tips: [
      'Vintage cards from the 1970s and 1980s frequently show manufacturing shift; inspect border thickness carefully before submitting.',
      'Full-art, textured, and borderless modern cards are measured from designated alignment points and outer foil margins.',
      'Reverse centering is weighted at approximately 35% of the overall centering calculation.'
    ]
  },
  {
    factor: 'Corners',
    iconName: 'Sparkles',
    subtitle: 'Sharpness, geometry & corner tip integrity',
    description: 'Inspects all four corners for sharpness, crushing, fraying, paper fiber separation, and handling softness.',
    details: 'Corners are often the first area to show damage when cards are handled outside sleeves or placed into tight binders. Each corner is inspected at 10x magnification from multiple angles. A Gem Mint 10 corner must be razor-sharp with no white paper core visible under magnification. Even a single softened corner can drop an otherwise pristine card down to an 8.5.',
    inspectionMethod: 'High-magnification binocular stereomicroscopy (10x-40x) with multi-angle LED ring lighting.',
    standards: [
      { gradeTier: 'Grade 10 (Gem Mint)', tolerance: 'All 4 corners razor-sharp; zero fiber separation under 10x loupe' },
      { gradeTier: 'Grade 9 (Mint)', tolerance: 'Four sharp corners; one nearly invisible pinpoint allowed under 10x' },
      { gradeTier: 'Grade 8 (Near Mint/Mint)', tolerance: 'Faint touch of wear on 1-2 corners; points remain sharp to naked eye' },
      { gradeTier: 'Grade 7 (Near Mint)', tolerance: 'Minor corner softness or slight rounding on 2 corners' },
      { gradeTier: 'Grade 6 & Below', tolerance: 'Visible corner rounding, blunting, or separated paper fibers' }
    ],
    tips: [
      'Always use soft penny sleeves before inserting cards into rigid top loaders to avoid corner drag damage.',
      'Avoid pressing card corners against binder pockets or hard desktop surfaces.',
      'Thick memorabilia cards (75pt - 180pt) are naturally prone to corner chipping; handle them with extreme care.'
    ]
  },
  {
    factor: 'Edges',
    iconName: 'Shield',
    subtitle: 'Cut quality, whitening, chipping & perimeter condition',
    description: 'Examines all four perimeter edges for chipping, foil flaking, whitening, factory sheet cuts, and indentations.',
    details: 'Card edges reveal how the sheet was cut during manufacturing and how the card was stored throughout its lifetime. Dark-bordered cards (such as vintage Pokémon Japanese borders, sports cards with black borders, or Magic: The Gathering black borders) show edge whitening dramatically. Graders inspect the top, bottom, left, and right borders on both front and reverse sides.',
    inspectionMethod: 'Raking lateral lighting and 10x optical magnification along the full perimeter edge boundary.',
    standards: [
      { gradeTier: 'Grade 10 (Gem Mint)', tolerance: 'Pristine factory cut; complete absence of chipping or whitening' },
      { gradeTier: 'Grade 9 (Mint)', tolerance: 'Clean edges; at most a microscopic pinpoint flaw on 1 edge' },
      { gradeTier: 'Grade 8 (Near Mint/Mint)', tolerance: 'Minor localized edge whitening in 1-2 isolated spots' },
      { gradeTier: 'Grade 7 (Near Mint)', tolerance: 'Noticeable light edge wear or rough cut along 1-2 borders' },
      { gradeTier: 'Grade 6 & Below', tolerance: 'Continuous edge whitening, chipping, or small edge dents' }
    ],
    tips: [
      'Dark-bordered cards are penalized quickly for edge whitening; verify edge condition with side illumination.',
      'Factory "rough cuts" common on 1970s vintage cards are evaluated against historical manufacturing tolerances.',
      'Never tap cards on their edges to settle them into a top loader—tap the bottom of the plastic holder instead.'
    ]
  },
  {
    factor: 'Surface',
    iconName: 'Award',
    subtitle: 'Gloss, print fidelity, foil integrity & scratch analysis',
    description: 'Scrutinizes scratches, print lines, foil scratches, indentations, finger oils, roller marks, creases, and gloss consistency.',
    details: 'The surface is the most expansive and critical factor. Using directional raking light, multi-wavelength UV illumination, and high-intensity magnification, graders inspect every square millimeter. Holofoils, ultra-rare textures, and high-gloss finishes show scratches and print defects easily. Any crease, no matter how small, automatically limits the surface score.',
    inspectionMethod: 'Directional raking light, oblique lighting angles, and 395nm UV blacklight inspection for surface foreign material or alterations.',
    standards: [
      { gradeTier: 'Grade 10 (Gem Mint)', tolerance: 'Flawless original gloss; zero scratches, indentations, or print lines' },
      { gradeTier: 'Grade 9 (Mint)', tolerance: 'Pristine gloss; at most 1 minor microscopic factory print speck' },
      { gradeTier: 'Grade 8 (Near Mint/Mint)', tolerance: 'Faint hairline scratch visible only at specific lighting angle' },
      { gradeTier: 'Grade 7 (Near Mint)', tolerance: 'Light surface scuffs or slight print streak; no creases' },
      { gradeTier: 'Grade 6 & Below', tolerance: 'Visible scratches, slight indentations, loss of gloss, or micro-crease' }
    ],
    tips: [
      'Always handle cards by their edges with clean, dry hands or lint-free microfiber gloves.',
      'Never wipe holofoils with paper towels or abrasive fabrics—fine dust particles will create permanent hairline scratches.',
      'Check cards under a desk lamp angled at 45 degrees to reveal hidden print lines and surface indentations.'
    ]
  }
]

// Accepted Card Categories
export const cardCategories: CardCategory[] = [
  {
    id: 'pokemon',
    name: 'Pokémon Cards',
    badge: 'Popular',
    description: 'Full authentication and encapsulation for English and Japanese Pokémon cards from 1996 Base Set through modern Scarlet & Violet expansions.',
    eligibleExamples: [
      '1999 Base Set 1st Edition & Shadowless holos',
      'Neo Series, E-Reader Series, EX, Gold Stars',
      'Modern Alternate Arts, Special Illustration Rares (SIR)',
      'Promo cards, Trophy cards, Japanese exclusive releases'
    ],
    maxThickness: 'Up to 75pt standard card stock',
    iconName: 'Sparkles',
    highlights: ['Micro-inspection of holographic foil', 'Japanese & English release verification', 'Texture alignment validation']
  },
  {
    id: 'sports',
    name: 'Sports Cards',
    badge: 'High Value',
    description: 'Vintage to modern sports cards across major athletic leagues including NBA, NFL, MLB, NHL, Formula 1, and international soccer.',
    eligibleExamples: [
      'Rookie Cards (RC), Autograph Patch Cards (RPA)',
      'Numbered parallels (Prizm, Select, Topps Chrome, National Treasures)',
      'Vintage classics (1950s - 1980s Topps, Bowman, Fleer)',
      'Soccer / Football cards (Panini Prizm, Obsidian, Topps Merlin)'
    ],
    maxThickness: 'Up to 180pt thick jersey & patch relics',
    iconName: 'Award',
    highlights: ['Thickness-adaptive slab housing', 'Player authenticity & rookie card designation', 'Autograph grade option']
  },
  {
    id: 'yugioh',
    name: 'Yu-Gi-Oh! Cards',
    badge: 'High Demand',
    description: 'Official Konami TCG cards from Legend of Blue Eyes White Dragon to the latest core booster sets and tournament prize editions.',
    eligibleExamples: [
      '1st Edition vintage cards (LOB, MRD, MRL, PSV)',
      'Starlight Rares, Ghost Rares, Ultimate Rares, Quarter Century Rares',
      'Shonen Jump Championship & Yu-Gi-Oh! Championship Series prize cards',
      'Collector Tin promos and retro booster reprints'
    ],
    maxThickness: 'Standard Japanese small & international sizes',
    iconName: 'Shield',
    highlights: ['Small-size custom fit inner gasket', 'Foil pattern integrity check', 'First edition verification']
  },
  {
    id: 'mtg',
    name: 'Magic: The Gathering',
    badge: 'Vintage Heritage',
    description: 'Comprehensive authentication for Wizards of the Coast MTG cards from Alpha and Beta through modern Collector Booster releases.',
    eligibleExamples: [
      'Power Nine & Reserved List classics (Alpha, Beta, Unlimited, Revised)',
      'Serialized cards (1 of 500, Ring variants, Retro Frames)',
      'Foil staples, Extended Art, Borderless Concept Art cards',
      'Judge Promos, Guru Lands, and Alpha 40 eligible staples'
    ],
    maxThickness: 'Standard 35pt card stock',
    iconName: 'Compass',
    highlights: ['Rosette print pattern authentication', 'Black core light-transmission test', 'Surface ink dot matrix inspection']
  },
  {
    id: 'other-tcg',
    name: 'Other Trading Card Games',
    badge: 'Expanding',
    description: 'Rapidly growing international trading card games with dedicated slab sizing and protective sonically sealed encasements.',
    eligibleExamples: [
      'One Piece Card Game (Manga Rares, SP variants, Winner promos)',
      'Disney Lorcana (Enchanted Rares, D23 promos, First Chapter)',
      'Dragon Ball Super / Dragon Ball Fusion World (God Rares)',
      'Digimon TCG, Weiss Schwarz, Final Fantasy TCG'
    ],
    maxThickness: 'Standard 35pt to 55pt',
    iconName: 'Layers',
    highlights: ['Custom internal gaskets for exact card dimensions', 'Modern security foil verification', 'Manga art edge inspection']
  },
  {
    id: 'collectible',
    name: 'Collectible & Non-Sport Cards',
    badge: 'Specialty',
    description: 'Pop culture, entertainment, comic book, and historical collectible cards preserving iconic art and memorabilia moments.',
    eligibleExamples: [
      'Marvel Fleer Ultra, Precious Metal Gems (PMG), Marvel Masterpieces',
      'Star Wars Topps Chrome, Masterwork, Galaxy series',
      'Vintage non-sport cards (Garbage Pail Kids, Mars Attacks)',
      'Celebrity autographed entertainment insert cards'
    ],
    maxThickness: 'Up to 130pt',
    iconName: 'Star',
    highlights: ['Archival UV-protective acrylic housing', 'Artwork colorfastness analysis', 'Die-cut & foil embossed support']
  }
]

// Step-by-Step Grading Workflow
export interface ProcessStepData {
  number: number
  title: string
  subtitle: string
  description: string
  details: string
  iconName: string
  checklist: string[]
}

export const gradingSteps: ProcessStepData[] = [
  {
    number: 1,
    title: 'Submit Your Card',
    subtitle: 'Upload high-res photos & card details online',
    description: 'Begin your grading journey through our frictionless submission portal. Upload clear front and back photos, specify category and card details, and provide your contact information.',
    details: 'Our intake system validates your details and prepares your formal submission dossier. We keep uploaded images strictly in secure browser memory for temporary evaluation and provide instant WhatsApp and Email transmission options.',
    iconName: 'Upload',
    checklist: [
      'Provide clear, glare-free front and reverse images',
      'Select card category and specify card name & set',
      'Review and agree to the initial grading disclosure',
      'Receive your submission summary package instantly'
    ]
  },
  {
    number: 2,
    title: 'Initial Review',
    subtitle: 'Intake evaluation & consultation',
    description: 'Our senior intake evaluators examine your submitted photos, verify eligibility, check for obvious alterations or severe damage, and reach out to discuss your goals.',
    details: 'Within 24 to 48 business hours of receiving your submission summary, a BAS Grading Authority specialist contacts you via email or WhatsApp to review initial observations, answer any questions, and confirm your preferred turnaround tier.',
    iconName: 'Search',
    checklist: [
      'Pre-screening for card eligibility and authenticity risks',
      'Personal communication from our evaluation team',
      'Guidance on estimated grade ranges and market relevance',
      'Clear instructions for physical packing and shipment'
    ]
  },
  {
    number: 3,
    title: 'Physical Card Submission',
    subtitle: 'Secure shipping to our grading facility',
    description: 'Following our packaging protocol, safely pack your cards in penny sleeves and semi-rigid holders, then ship them to our secure processing facility with tracked logistics.',
    details: 'Upon arrival at our climate-controlled intake center, packages are unboxed under continuous high-definition video recording. Each card is logged with a unique tracking identifier and placed into an anti-static vault container.',
    iconName: 'Shield',
    checklist: [
      'Follow our protective sleeve & top loader packing guidelines',
      'Ship with insured, trackable delivery to our secure intake facility',
      'Continuous video-monitored unboxing upon physical arrival',
      'Immediate intake confirmation notification delivered to your inbox'
    ]
  },
  {
    number: 4,
    title: 'Professional Evaluation',
    subtitle: 'Multi-factor laboratory analysis under magnification',
    description: 'Two independent certified graders examine centering, corners, edges, and surface using 10x binocular stereomicroscopes, optical micrometers, and UV illumination.',
    details: 'Each card undergoes quad-factor condition evaluation according to our rigorous 10-point standard. In the event of a variance between graders, a senior master grader performs a third definitive review to establish the consensus grade.',
    iconName: 'Award',
    checklist: [
      'Digital optical micrometer centering calculation',
      '10x to 40x stereomicroscopic corner and edge inspection',
      '395nm UV blacklight surface analysis for restoration or cleaning',
      'Independent dual-grader consensus methodology'
    ]
  },
  {
    number: 5,
    title: 'Grade & Completion',
    subtitle: 'Sonic sealing & insured return delivery',
    description: 'Your graded card is sealed in our crystal-clear, archival-grade acrylic slab with an anti-counterfeit holographic label and shipped back via insured courier.',
    details: 'The slab is sonically welded using precision ultrasonic frequencies to form a tamper-evident, airtight seal. Your package is dispatched with signature verification and complete shipping insurance directly to your doorstep.',
    iconName: 'CheckCircle',
    checklist: [
      'Archival, optical-grade acrylic protective holder',
      'Tamper-evident holographic security label with sub-grades',
      'Digital certificate registered in online registry',
      'Dispatched with insured signature-required delivery'
    ]
  }
]

// Comprehensive FAQ List covering all user request requirements
export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is card grading?',
    answer: 'Card grading is the rigorous, professional evaluation of a collectible card\'s condition, authenticity, and preservation quality by trained experts. Graders inspect the card across four fundamental criteria—Centering, Corners, Edges, and Surface—and assign a standardized numerical score on a 10-point scale (where 10 represents Gem Mint perfection and 1 represents Poor). Once graded, the card is sonically sealed inside a durable, tamper-evident acrylic holder with an authenticated security label, preserving its physical integrity and establishing an objective market benchmark.'
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'Why should I grade my cards?',
    answer: 'Grading offers three primary benefits:\n\n1. Authentication & Integrity: Eliminates counterfeit and altered card risks, verifying that your specimen is 100% genuine.\n2. Permanent Preservation: Encapsulation inside our archival, UV-resistant acrylic holder shields against moisture, dust, handling scratches, and corner blunting.\n3. Market Value & Liquidity: Professional grading establishes universal condition clarity, dramatically increasing confidence for collectors and buyers in auctions and peer-to-peer marketplaces.'
  },
  {
    id: 'faq-3',
    category: 'grading',
    question: 'What determines a card\'s grade?',
    answer: 'A card\'s grade is determined by four scientific criteria evaluated under 10x-40x magnification:\n\n- Centering: Mathematical border symmetry measured via digital micrometers on front and reverse.\n- Corners: Sharpness, geometry, and absence of fraying or crushing at corner tips.\n- Edges: Cleanliness of perimeter cut, absence of chipping, whitening, or roughness.\n- Surface: Quality of gloss, absence of scratches, roller lines, print spots, indentations, or creases.\n\nThe overall grade reflects the consensus of these four sub-factors, with the lowest sub-grade imposing strict limits on the final numerical score.'
  },
  {
    id: 'faq-4',
    category: 'submission',
    question: 'How do I submit my card?',
    answer: 'Submitting is simple and secure:\n\n1. Fill out our online Submission Form with your contact details and card specifications.\n2. Upload clear front and back photos of your card for preliminary review.\n3. Submit the request to generate your prefilled email and WhatsApp confirmation.\n4. Our team contacts you within 24-48 hours to confirm your submission dossier and provide shipping instructions.\n5. Package your cards securely in penny sleeves and semi-rigid holders and dispatch them to our facility with tracked shipping.'
  },
  {
    id: 'faq-5',
    category: 'submission',
    question: 'Do I need to upload both sides of the card?',
    answer: 'Yes, absolutely. Card grading evaluates the complete physical specimen. The reverse side accounts for critical edge whitening, surface scratches, and up to 35% of the centering calculation. Providing clear photos of both the front and back allows our specialists to perform a meaningful initial review and identify potential condition concerns before physical shipping.'
  },
  {
    id: 'faq-6',
    category: 'submission',
    question: 'Does uploading an image guarantee me a grade?',
    answer: 'No. Uploading images through our online form is strictly an initial submission and consultation request. Photographs alone cannot detect subtle surface indentations, micro-scratches under oblique lighting, or paper core alterations. Official grades are issued exclusively after hands-on physical inspection by our certified grading team in our laboratory under controlled lighting and magnification.'
  },
  {
    id: 'faq-7',
    category: 'grading',
    question: 'How long does grading take?',
    answer: 'Turnaround times depend on your chosen submission service tier:\n\n- Express Service: 5–7 business days from physical arrival.\n- Standard Service: 15–20 business days from physical arrival.\n- Economy Bulk Tier: 30–45 business days for large volume submissions.\n\nYou receive automated email updates at every phase: arrival intake, inspection kickoff, grade completion, and tracking upon insured dispatch.'
  },
  {
    id: 'faq-8',
    category: 'grading',
    question: 'Can damaged cards be graded?',
    answer: 'Yes. Our 10-point scale accommodates all condition states from Gem Mint (10) down to Poor (1). Graded damaged or vintage played cards still benefit from official authentication, historical verification, and permanent encapsulation to halt further deterioration. For rare or vintage cards, an authentic Grade 1 to Grade 4 can still command substantial value.'
  },
  {
    id: 'faq-9',
    category: 'general',
    question: 'Which card categories do you accept?',
    answer: 'We accept a broad spectrum of collectible cards:\n\n- Pokémon Cards (English, Japanese, vintage 1996 through modern SV)\n- Sports Cards (Basketball, Football, Baseball, Hockey, F1, Soccer)\n- Yu-Gi-Oh! (Standard and vintage Japanese sizes)\n- Magic: The Gathering (Alpha through modern collector expansions)\n- Other TCGs (One Piece, Disney Lorcana, Digimon, Dragon Ball)\n- Non-Sport & Pop Culture (Marvel, Star Wars, Garbage Pail Kids, historical entertainment)\n\nWe accept standard sizes up to 180pt thickness.'
  },
  {
    id: 'faq-10',
    category: 'shipping',
    question: 'How will I receive my grading result?',
    answer: 'Upon completion of evaluation, you will receive:\n\n1. Digital Notification: A high-resolution digital certificate and detailed sub-grade score sheet delivered to your email.\n2. Sonic Encapsulation: Your card sealed in our crystal-clear, archival-grade acrylic slab with tamper-evident holographic security label.\n3. Insured Return Shipment: Cards are packed in bubble-wrapped custom protective boxes and dispatched via signature-required, tracked courier delivery directly to your door.'
  }
]
