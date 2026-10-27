import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function DestinationCard({ destination }) {
  return (
    <Link to={`/destinations?q=${encodeURIComponent(destination.name)}`} className="group relative block h-72 overflow-hidden rounded-2xl bg-slate-200">
      <img src={destination.image} alt={`${destination.name}, ${destination.country}`} className="size-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur">{destination.count}</span>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-white">
        <div><p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-white/75">{destination.tag}</p><h3 className="text-2xl font-semibold">{destination.name}</h3><p className="mt-1 text-sm text-white/80">{destination.country}</p></div>
        <span className="flex size-10 items-center justify-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-slate-900"><ArrowUpRight size={18} /></span>
      </div>
    </Link>
  )
}

export default DestinationCard
