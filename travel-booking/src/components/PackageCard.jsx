import { ArrowUpRight, Clock3, Star } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function PackageCard({ travelPackage }) {
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const tripParams = new URLSearchParams()
  if (searchParams.has('date')) tripParams.set('date', searchParams.get('date'))
  if (searchParams.has('travelers')) tripParams.set('travelers', searchParams.get('travelers'))
  const detailsUrl = `/packages/${travelPackage.id}${tripParams.size ? `?${tripParams}` : ''}`

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10">
      <Link to={detailsUrl} className="relative block h-60 overflow-hidden bg-slate-100">
        <img src={travelPackage.image} alt={travelPackage.destination} className="size-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700">{travelPackage.badge}</span>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-slate-800"><Star size={13} className="fill-amber-400 text-amber-400" /> {travelPackage.rating}</span>
      </Link>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500">{travelPackage.destination}</p>
          <span className="inline-flex items-center gap-1 text-xs text-slate-500"><Clock3 size={14} /> {travelPackage.duration} days</span>
        </div>
        <Link to={detailsUrl} className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">{travelPackage.title}</h3>
          <ArrowUpRight size={18} className="shrink-0 text-slate-400 transition group-hover:text-teal-800" />
        </Link>
        <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-500">From <span className="text-xl font-semibold text-slate-900">${travelPackage.price.toLocaleString()}</span> <span>/ person</span></p>
          <span className="text-xs text-slate-400">{travelPackage.reviews} reviews</span>
        </div>
      </div>
    </article>
  )
}

export default PackageCard
