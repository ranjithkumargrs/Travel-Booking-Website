import { ArrowLeft, CalendarDays, Check, Clock3, MapPin, ShieldCheck, Star, Users } from 'lucide-react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import { packages } from '../data/travelData.js'

function PackageDetails() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const travelPackage = packages.find((item) => item.id === id)

  if (!travelPackage) return <NotFound />

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <Link to="/destinations" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-800"><ArrowLeft size={16} /> All trips</Link>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-100 sm:h-[440px]"><img src={travelPackage.image} alt={travelPackage.destination} className="size-full object-cover" /><span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700">{travelPackage.badge}</span></div>
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"><span className="inline-flex items-center gap-1.5"><MapPin size={16} className="text-teal-800" />{travelPackage.destination}</span><span className="inline-flex items-center gap-1.5"><Clock3 size={16} />{travelPackage.duration} days</span><span className="inline-flex items-center gap-1.5"><Star size={16} className="fill-amber-400 text-amber-400" />{travelPackage.rating} ({travelPackage.reviews} reviews)</span></div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{travelPackage.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{travelPackage.description}</p>
            <div className="mt-9 border-t border-slate-200 pt-7"><h2 className="text-xl font-semibold">What’s included</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{travelPackage.includes.map((item) => <p key={item} className="flex items-center gap-3 text-sm text-slate-600"><span className="flex size-7 items-center justify-center rounded-full bg-teal-50 text-teal-800"><Check size={15} /></span>{item}</p>)}</div></div>
            <div className="mt-9 grid gap-4 rounded-2xl bg-[#f5f7f5] p-5 sm:grid-cols-3"><div className="flex items-center gap-3"><CalendarDays className="text-teal-800" size={20} /><span className="text-sm text-slate-600">Flexible dates</span></div><div className="flex items-center gap-3"><Users className="text-teal-800" size={20} /><span className="text-sm text-slate-600">Small-group friendly</span></div><div className="flex items-center gap-3"><ShieldCheck className="text-teal-800" size={20} /><span className="text-sm text-slate-600">Book with confidence</span></div></div>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border border-slate-200 p-6 shadow-sm lg:sticky lg:top-8">
          <p className="text-sm text-slate-500">Starting from</p><p className="mt-1 text-3xl font-semibold">${travelPackage.price.toLocaleString()}<span className="text-sm font-normal text-slate-500"> / person</span></p><p className="mt-2 text-sm text-slate-500">{travelPackage.duration} days · {travelPackage.destination}</p>
          <Link to={`/booking/${travelPackage.id}${searchParams.size ? `?${searchParams}` : ''}`} className="mt-6 block rounded-full bg-teal-800 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-teal-900">Book this trip</Link>
          <p className="mt-4 text-center text-xs text-slate-400">You won’t be charged yet</p>
          <div className="mt-6 border-t border-slate-100 pt-5"><p className="text-sm font-medium text-slate-800">A little peace of mind</p><p className="mt-2 text-sm leading-6 text-slate-500">Your booking is saved securely in this browser. You can review it any time from My bookings.</p></div>
        </aside>
      </div>
    </div>
  )
}

export default PackageDetails
