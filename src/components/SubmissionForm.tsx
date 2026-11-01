import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from 'react'
import {
  Send,
  MessageSquare,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  FileCheck2,
  ChevronDown
} from 'lucide-react'
import ImageUploader, { type UploadedImageInfo } from './ImageUploader'
import { cardCategories } from '../data/gradingScaleData'

export interface SubmissionFormData {
  fullName: string
  email: string
  phone: string
  city: string
  category: string
  cardName: string
  playerOrCharacter: string
  setOrSeries: string
  year: string
  quantity: string
  declaredValue: string
  additionalNotes: string
  consent: boolean
}

export default function SubmissionForm(): JSX.Element {
  const [formData, setFormData] = useState<SubmissionFormData>({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    category: 'Pokémon Cards',
    cardName: '',
    playerOrCharacter: '',
    setOrSeries: '',
    year: '',
    quantity: '1',
    declaredValue: '',
    additionalNotes: '',
    consent: false
  })

  const [frontImage, setFrontImage] = useState<UploadedImageInfo | null>(null)
  const [backImage, setBackImage] = useState<UploadedImageInfo | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState<boolean>(false)
  const categoryDropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        categoryDropdownRef.current &&
        !categoryDropdownRef.current.contains(event.target as Node)
      ) {
        setCategoryDropdownOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setCategoryDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleSelectCategory = (categoryName: string): void => {
    setFormData((prev: SubmissionFormData) => ({ ...prev, category: categoryName }))
    setCategoryDropdownOpen(false)
    if (errors.category) {
      setErrors((prev: Record<string, string>) => {
        const next: Record<string, string> = { ...prev }
        delete next.category
        return next
      })
    }
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked: boolean = (e.target as HTMLInputElement).checked
      setFormData((prev: SubmissionFormData) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev: SubmissionFormData) => ({ ...prev, [name]: value }))
    }

    if (errors[name]) {
      setErrors((prev: Record<string, string>) => {
        const next: Record<string, string> = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (!formData.city.trim()) newErrors.city = 'City / Location is required.'
    if (!formData.cardName.trim()) newErrors.cardName = 'Card Name is required.'
    if (!formData.category.trim()) newErrors.category = 'Category selection is required.'

    if (!frontImage) newErrors.frontImage = 'Front card image is required for evaluation.'
    if (!backImage) newErrors.backImage = 'Back card image is required for evaluation.'

    if (!formData.consent) {
      newErrors.consent = 'You must confirm the initial submission disclaimer.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildSubmissionText = (): string => {
    const lines: string[] = [
      '========================================',
      'BAS GRADING AUTHORITY - INTAKE REQUEST',
      '========================================',
      `Date: ${new Date().toLocaleDateString()}`,
      '',
      '[ COLLECTOR INFORMATION ]',
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Location: ${formData.city}`,
      '',
      '[ COLLECTIBLE SPECIFICATIONS ]',
      `Category: ${formData.category}`,
      `Card Name: ${formData.cardName}`,
      `Player / Character: ${formData.playerOrCharacter || 'N/A'}`,
      `Set / Series: ${formData.setOrSeries || 'N/A'}`,
      `Year: ${formData.year || 'N/A'}`,
      `Quantity: ${formData.quantity || '1'}`,
      `Declared Value: ${formData.declaredValue || 'Not provided'}`,
      '',
      '[ ADDITIONAL INTAKE NOTES ]',
      formData.additionalNotes || 'None',
      '',
      '[ UPLOADED PHOTOGRAPHS ]',
      `Front Image: ${frontImage?.name || 'Attached'} (${frontImage?.sizeFormatted || 'N/A'})`,
      `Back Image: ${backImage?.name || 'Attached'} (${backImage?.sizeFormatted || 'N/A'})`,
      '========================================'
    ]
    return lines.join('\n')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openMailto = (): void => {
    const subject: string = encodeURIComponent(
      `[Intake Request] ${formData.cardName} (${formData.category}) - ${formData.fullName}`
    )
    const body: string = encodeURIComponent(
      `${buildSubmissionText()}\n\n*NOTE: Please ensure you manually attach ${frontImage?.name || 'Front Image'} and ${backImage?.name || 'Back Image'} to this email.*`
    )
    window.location.href = `mailto:submissions@basgrading.com?subject=${subject}&body=${body}`
  }

  const openWhatsApp = (): void => {
    const text: string = encodeURIComponent(
      `Hello BAS Grading Authority intake team! I would like to submit my card for grading review:\n\n${buildSubmissionText()}\n\n(I will send front and reverse card photos in this chat)`
    )
    window.open(`https://wa.me/1234567890?text=${text}`, '_blank')
  }

  const copySummary = (): void => {
    navigator.clipboard.writeText(buildSubmissionText())
    setCopied(true)
    setTimeout((): void => setCopied(false), 3000)
  }

  const handleReset = (): void => {
    setIsSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      category: 'Pokémon Cards',
      cardName: '',
      playerOrCharacter: '',
      setOrSeries: '',
      year: '',
      quantity: '1',
      declaredValue: '',
      additionalNotes: '',
      consent: false
    })
    setFrontImage(null)
    setBackImage(null)
    setErrors({})
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-left space-y-6">
        <div className="pb-6 border-b-2 border-slate-950">
          <div className="w-12 h-12 bg-slate-950 text-white flex items-center justify-center mb-4">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight">
            Intake Request Prepared
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Choose how you would like to transmit your card details to our intake team:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={openMailto}
            className="flex items-center justify-center gap-2 p-4 border-2 border-slate-950 bg-white hover:bg-slate-950 hover:text-white text-xs font-black uppercase tracking-wider text-slate-950 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Open Email Draft</span>
          </button>

          <button
            type="button"
            onClick={openWhatsApp}
            className="flex items-center justify-center gap-2 p-4 border-2 border-slate-950 bg-[#00CC66] hover:bg-[#00b359] text-xs font-black uppercase tracking-wider text-slate-950 transition-colors cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>
        </div>

        <div className="p-5 bg-white border-2 border-slate-950 text-xs text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-black text-slate-950 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#2391FF]" />
            <span>Next Steps:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1">
            <li>Attach your photos ({frontImage?.name} & {backImage?.name}) directly to your email or WhatsApp message.</li>
            <li>Our intake team will review your photos within 24–48 hours to confirm eligibility.</li>
          </ol>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-slate-950">
              Formatted Summary
            </span>
            <button
              type="button"
              onClick={copySummary}
              className="inline-flex items-center gap-1.5 text-xs text-[#2391FF] hover:underline font-black cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#00CC66]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
            </button>
          </div>
          <pre className="p-4 bg-white border-2 border-slate-950 text-xs font-mono text-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
            {buildSubmissionText()}
          </pre>
        </div>

        <div className="pt-4 border-t-2 border-slate-950">
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-black uppercase tracking-wider text-[#2391FF] hover:underline cursor-pointer"
          >
            ← Submit Another Card
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-12 text-left">
      {/* 1. Collector Details */}
      <div className="space-y-6">
        <div className="pb-3 border-b-2 border-slate-950 flex items-center gap-3">
          <span className="w-7 h-7 flex items-center justify-center text-xs font-black bg-slate-950 text-white shrink-0">1</span>
          <div>
            <h3 className="text-xl font-black text-slate-950 tracking-tight">Collector Contact Information</h3>
            <p className="text-xs text-slate-500">Used strictly to communicate submission evaluation and shipping</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Full Name <span className="text-[#F70063]">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Johnathan Vance"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
            {errors.fullName && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Email Address <span className="text-[#F70063]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. collector@example.com"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Phone / WhatsApp <span className="text-[#F70063]">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. +1 (555) 234-5678"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
            {errors.phone && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              City / Location <span className="text-[#F70063]">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="e.g. Chicago, USA"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
            {errors.city && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.city}</p>
            )}
          </div>
        </div>
      </div>

      {/* 2. Card Details */}
      <div className="space-y-6">
        <div className="pb-3 border-b-2 border-slate-950 flex items-center gap-3">
          <span className="w-7 h-7 flex items-center justify-center text-xs font-black bg-slate-950 text-white shrink-0">2</span>
          <div>
            <h3 className="text-xl font-black text-slate-950 tracking-tight">Card Specifications</h3>
            <p className="text-xs text-slate-500">Provide the details of the card you wish to grade</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2 relative" ref={categoryDropdownRef}>
            <label
              id="category-label"
              className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2"
            >
              Collectible Category <span className="text-[#F70063]">*</span>
            </label>

            {/* Custom Bauhaus-Themed Dropdown Trigger */}
            <button
              type="button"
              id="category-trigger"
              aria-haspopup="listbox"
              aria-expanded={categoryDropdownOpen}
              aria-labelledby="category-label"
              onClick={(): void => setCategoryDropdownOpen(!categoryDropdownOpen)}
              className={`w-full px-4 py-3 bg-white border-2 text-sm font-bold text-slate-950 flex items-center justify-between cursor-pointer transition-colors text-left ${
                categoryDropdownOpen
                  ? 'border-[#2391FF]'
                  : 'border-slate-950 hover:border-slate-800'
              }`}
            >
              <span className="truncate">{formData.category}</span>
              <ChevronDown
                className={`w-4 h-4 stroke-[2.5] text-slate-950 shrink-0 ml-3 transition-transform duration-200 ${
                  categoryDropdownOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Custom Bauhaus-Themed Options List */}
            {categoryDropdownOpen && (
              <div
                role="listbox"
                aria-labelledby="category-label"
                className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-white border-2 border-slate-950 shadow-[4px_4px_0px_0px_#020617] py-1 max-h-64 overflow-y-auto divide-y divide-slate-100"
              >
                {cardCategories.map((cat: { id: string; name: string }) => {
                  const isSelected: boolean = formData.category === cat.name
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={(): void => handleSelectCategory(cat.name)}
                      className={`w-full px-4 py-3 text-sm flex items-center justify-between text-left cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-slate-950 text-white font-black'
                          : 'font-bold text-slate-900 hover:bg-[#FFF83F] hover:text-slate-950'
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 stroke-[3] text-[#FFF83F] shrink-0 ml-2" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}

            {errors.category && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Card Name / Title <span className="text-[#F70063]">*</span>
            </label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              placeholder="e.g. Charizard Holographic #4"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
            {errors.cardName && (
              <p className="text-xs text-[#F70063] font-black mt-1.5">{errors.cardName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Player / Character
            </label>
            <input
              type="text"
              name="playerOrCharacter"
              value={formData.playerOrCharacter}
              onChange={handleInputChange}
              placeholder="e.g. Charizard / Michael Jordan"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Set / Series Name
            </label>
            <input
              type="text"
              name="setOrSeries"
              value={formData.setOrSeries}
              onChange={handleInputChange}
              placeholder="e.g. Base Set 1st Edition / Fleer"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Release Year
            </label>
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="e.g. 1999"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Estimated / Declared Value
            </label>
            <input
              type="text"
              name="declaredValue"
              value={formData.declaredValue}
              onChange={handleInputChange}
              placeholder="e.g. $1,200"
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">
              Notes / Inquiries
            </label>
            <textarea
              name="additionalNotes"
              rows={2}
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Special variants, condition concerns, etc."
              className="w-full px-4 py-3 bg-white border-2 border-slate-950 text-sm font-medium text-slate-950 placeholder-slate-400 focus:outline-none focus:border-[#2391FF] transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      {/* 3. Card Photos Upload */}
      <div className="space-y-4">
        <div className="pb-3 border-b-2 border-slate-950 flex items-center gap-3">
          <span className="w-7 h-7 flex items-center justify-center text-xs font-black bg-slate-950 text-white shrink-0">3</span>
          <div>
            <h3 className="text-xl font-black text-slate-950 tracking-tight">Card Photographs</h3>
            <p className="text-xs text-slate-500">Upload front and back photos for condition evaluation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ImageUploader
            label="Front Card Photo"
            sublabel="Direct overhead, full border visibility"
            side="front"
            required
            image={frontImage}
            onChange={(img: UploadedImageInfo | null): void => {
              setFrontImage(img)
              if (errors.frontImage) {
                setErrors((prev: Record<string, string>) => {
                  const next: Record<string, string> = { ...prev }
                  delete next.frontImage
                  return next
                })
              }
            }}
            error={errors.frontImage}
          />

          <ImageUploader
            label="Back Card Photo"
            sublabel="Full reverse border & corners"
            side="back"
            required
            image={backImage}
            onChange={(img: UploadedImageInfo | null): void => {
              setBackImage(img)
              if (errors.backImage) {
                setErrors((prev: Record<string, string>) => {
                  const next: Record<string, string> = { ...prev }
                  delete next.backImage
                  return next
                })
              }
            }}
            error={errors.backImage}
          />
        </div>
      </div>

      {/* 4. Disclaimer & Submit */}
      <div className="pt-6 border-t-2 border-slate-950 space-y-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="w-5 h-5 mt-0.5 border-2 border-slate-950 text-slate-950 focus:ring-0 cursor-pointer shrink-0 rounded-none"
          />
          <span className="text-xs text-slate-700 leading-relaxed font-medium">
            I confirm that submitting images is an initial pre-screening request. Official grades are issued exclusively following hands-on laboratory inspection.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-[#F70063] font-black">{errors.consent}</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#FFF83F] border-2 border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 hover:bg-[#eae32f] transition-all shadow-sm cursor-pointer"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>Submit Card for Grading</span>
          </button>
        </div>
      </div>
    </form>
  )
}
