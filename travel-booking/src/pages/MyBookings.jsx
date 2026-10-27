import { useState } from 'react'
import { ArrowRight, CalendarDays, MapPin, Trash2 } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { packages } from '../data/travelData.js'
import { getBookings, removeBooking } from '../utils/storage.js'

function MyBookings() {
  const [initialState] = useState(() => {
    try {
      return { bookings: getBookings(), error: '' }
    } catch (storageError) {
      return { bookings: [], error: `We couldn’t read your saved bookings: ${storageError.message}` }
    }
  })
  const [bookings, setBookings] = useState(initialState.bookings)
  const [error, setError] = useState(initialState.error)
  const [searchParams, setSearchParams] = useSearchParams()
  const confirmed = searchParams.get('confirmed') === '1'

  function handleRemove(bookingId) {
    try {
      setBookings(removeBooking(bookingId))
    } catch (storageError) {
      setError(`This booking could not be removed: ${storageError.message}`)
    }
  }

  function dismissConfirmation() {
    searchParams.delete('confirmed')
    setSearchParams(searchParams, { replace: true })
  }

  return (
    <div className="mx-auto min-h-[55vh] max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-9"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">Your travel plans</p><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">My bookings</h1><p className="mt-3 text-slate-500">All your saved getaways, together in one place.</p></div>
      {confirmed && <div className="mb-7 flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-900"><p><span className="font-semibold">You’re going places!</span> Your booking has been saved on this device.</p><button onClick={dismissConfirmation} className="font-semibold hover:underline">Dismiss</button></div>}
      {error && <p role="alert" className="mb-6 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
      {bookings.length ? <div className="space-y-4">{bookings.map((booking) => {
        const travelPackage = packages.find((item) => item.id === booking.packageId)
        const image = travelPackage?.image || booking.image

        return (
        <article key={booking.bookingId} className="grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-[220px_1fr]">
          <img src={image} alt={booking.destination} className="h-48 w-full object-cover sm:h-full" />
          <div className="p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-medium uppercase tracking-wide text-teal-800">Booking {booking.bookingId}</p><h2 className="mt-2 text-xl font-semibold">{booking.packageTitle}</h2><p className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin size={15} />{booking.destination}</p></div><button type="button" onClick={() => handleRemove(booking.bookingId)} aria-label={`Remove booking for ${booking.packageTitle}`} className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-700"><Trash2 size={18} /></button></div>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600"><span className="inline-flex items-center gap-2"><CalendarDays size={15} />{new Date(`${booking.date}T00:00:00`).toLocaleDateString(undefined, { dateStyle: 'medium' })}</span><span>{booking.travelers} {booking.travelers === 1 ? 'traveler' : 'travelers'}</span><span className="font-semibold text-slate-900">${Number(booking.total).toLocaleString()} total</span></div>
            <p className="mt-3 text-xs text-slate-400">Booked by {booking.name} · {booking.email}</p>
          </div>
        </article>
      )})}</div> : !error && <div className="rounded-3xl bg-[#f5f7f5] px-6 py-14 text-center"><div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white text-teal-800"><CalendarDays size={23} /></div><h2 className="mt-5 text-xl font-semibold">Your next trip is waiting</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">You haven’t saved a booking yet. Find a place that calls to you and your plans will show up here.</p><Link to="/destinations" className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900">Explore trips <ArrowRight size={16} /></Link></div>}
    </div>
  )
}

export default MyBookings
