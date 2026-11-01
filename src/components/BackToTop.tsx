import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop(): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return (): void => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-[#FFF83F] border-2 border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white flex items-center justify-center transition-colors cursor-pointer group shadow-sm"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5] transition-transform duration-150 group-hover:-translate-y-0.5" />
    </button>
  )
}
