import { ArrowDown, Sparkles } from 'lucide-react'
import SearchBar from './SearchBar.jsx'

function HeroSection() {
  const heroImage = `${import.meta.env.BASE_URL}image/hero-amalfi-4k.jpg`

  return (
    <section className="relative isolate overflow-hidden bg-slate-900">
      <img
        src={heroImage}
        alt="Tropical beach and turquoise ocean at sunset"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/10" />
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white backdrop-blur"><Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">Go where you <span className="font-serif italic text-teal-200">feel alive.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Curated stays and little-known places for trips that stay with you.</p>
        </div>
        <SearchBar />
        <a href="#discover" className="mt-9 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">Scroll to explore <ArrowDown size={16} /></a>
      </div>
    </section>
  )
}

export default HeroSection
