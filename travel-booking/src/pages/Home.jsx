import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import DestinationCard from '../components/DestinationCard.jsx'
import HeroSection from '../components/HeroSection.jsx'
import PackageCard from '../components/PackageCard.jsx'
import TravelerStories from '../components/TravelerStories.jsx'
import { destinations, packages } from '../data/travelData.js'

function Home() {
  const featuredPackages = packages.filter((travelPackage) =>
    ['bali-bliss', 'amalfi-coast', 'tamil-nadu-heritage'].includes(travelPackage.id),
  )

  return (
    <>
      <HeroSection />
      <section id="discover" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">Find your somewhere</p><h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Places worth the journey</h2><p className="mt-3 max-w-xl text-slate-500">A few of our favorite corners of the world to get you dreaming.</p></div>
          <Link to="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950">All destinations <ArrowRight size={16} /></Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{destinations.map((destination) => <DestinationCard key={destination.name} destination={destination} />)}</div>
      </section>
      <section className="bg-[#f5f7f5]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">Made for your kind of trip</p><h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Travel, thoughtfully planned</h2><p className="mt-3 max-w-xl text-slate-500">Handpicked stays, local moments, and room to make it your own.</p></div>
            <Link to="/destinations" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950">Browse all trips <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featuredPackages.map((travelPackage) => <PackageCard key={travelPackage.id} travelPackage={travelPackage} />)}</div>
        </div>
      </section>
      <TravelerStories />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">The Ranjith Trails difference</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">More feeling.<br />Less figuring out.</h2><p className="mt-5 leading-7 text-slate-500">We bring the thoughtful details together, so you can spend less time planning and more time looking forward to the good stuff.</p><Link to="/destinations" className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900">Find your trip <ArrowRight size={16} /></Link></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#f5f7f5] p-6"><Sparkles className="mb-5 text-teal-800" size={23} /><h3 className="font-semibold">Picked with care</h3><p className="mt-2 text-sm leading-6 text-slate-500">Stays and experiences chosen for the details that make a trip special.</p></div>
          <div className="rounded-2xl bg-[#f5f7f5] p-6 sm:mt-10"><HeartHandshake className="mb-5 text-teal-800" size={23} /><h3 className="font-semibold">A little more local</h3><p className="mt-2 text-sm leading-6 text-slate-500">Meet the places through the people and stories that bring them to life.</p></div>
          <div className="rounded-2xl bg-[#f5f7f5] p-6"><ShieldCheck className="mb-5 text-teal-800" size={23} /><h3 className="font-semibold">Easy from here</h3><p className="mt-2 text-sm leading-6 text-slate-500">Clear trip details and simple booking, with everything in one place.</p></div>
        </div>
      </section>
    </>
  )
}

export default Home
