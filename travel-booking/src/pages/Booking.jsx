import { ArrowLeft, MapPin, ShieldCheck, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm.jsx'
import NotFound from './NotFound.jsx'
import { packages } from '../data/travelData.js'

function Booking() {
  const { id } = useParams()
  const travelPackage = packages.find((item) => item.id === id)

  if (!travelPackage) return <NotFound />

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
      <Link to={`/packages/${id}`} className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-800"><ArrowLeft size={16} /> Back to trip details</Link>
      <div className="mb-9"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">One step closer</p><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Let’s make it happen.</h1><p className="mt-3 text-slate-500">Add your details and we’ll save your trip right here.</p></div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-2xl border border-slate-200 p-5 sm:p-8"><h2 className="mb-6 text-xl font-semibold">Your traveler details</h2><BookingForm travelPackage={travelPackage} /></section>
        <aside className="h-fit overflow-hidden rounded-2xl border border-slate-200">
          <img src={travelPackage.image} alt={travelPackage.destination} className="h-56 w-full object-cover" />
          <div className="p-6"><span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-teal-800"><Star size={14} className="fill-amber-400 text-amber-400" /> {travelPackage.rating} rated trip</span><h2 className="mt-3 text-2xl font-semibold">{travelPackage.title}</h2><p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} />{travelPackage.destination}</p><p className="mt-5 text-sm leading-6 text-slate-500">{travelPackage.duration} days of thoughtfully planned exploring.</p><div className="mt-5 flex items-start gap-3 rounded-xl bg-teal-50 p-4"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-teal-800" /><p className="text-xs leading-5 text-teal-900">This is a demo booking. Your details stay in local storage on this device only.</p></div></div>
        </aside>
      </div>
    </div>
  )
}

export default Booking
