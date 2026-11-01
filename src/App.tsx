import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import {
  HomePage,
  GradingScalePage,
  SubmitYourCardPage
} from './pages'

function ScrollToTopOnRouteChange(): null {
  const { pathname } = useLocation()

  useEffect((): void => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/grading-scale" element={<GradingScalePage />} />
        <Route path="/submit" element={<SubmitYourCardPage />} />
        {/* Redirect any old routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
