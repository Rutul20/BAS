import { Navbar, Footer, SubmissionForm, BackToTop } from '../components'

export default function SubmitYourCardPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32 pb-20">
        {/* Header - Bold Modernist Style */}
        <section className="py-16 sm:py-20 bg-white border-b-2 border-slate-950">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-[-0.035em] leading-tight">
              Submit Your Card for Grading
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Upload clear photographs of your card front and reverse, and provide collectible details for our laboratory intake review.
            </p>
          </div>
        </section>

        {/* Clean Form Container */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SubmissionForm />
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
