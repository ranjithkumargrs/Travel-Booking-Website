import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { saveBooking } from '../utils/storage.js'

const today = new Date().toISOString().split('T')[0]

function createBookingId() {
  return `WB-${Date.now().toString(36).toUpperCase()}`
}

function BookingForm({ travelPackage }) {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState(() => {
    const requestedDate = searchParams.get('date') || ''
    const requestedTravelers = Number(searchParams.get('travelers'))
    return {
      name: '',
      email: '',
      phone: '',
      date: requestedDate >= today ? requestedDate : '',
      travelers: requestedTravelers >= 1 && requestedTravelers <= 6 ? String(requestedTravelers) : '2',
      notes: '',
    }
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const travelers = Number(form.travelers)
  const subtotal = travelPackage.price * travelers
  const serviceFee = Math.round(subtotal * 0.05)
  const total = subtotal + serviceFee

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.date) {
      setError('Please complete your name, email, and travel date.')
      return
    }
    if (form.date < today) {
      setError('Please choose a travel date in the future.')
      return
    }
    const booking = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      travelers,
      bookingId: createBookingId(),
      packageId: travelPackage.id,
      packageTitle: travelPackage.title,
      destination: travelPackage.destination,
      image: travelPackage.image,
      price: travelPackage.price,
      subtotal,
      serviceFee,
      total,
      bookedAt: new Date().toISOString(),
    }
    try {
      saveBooking(booking)
      navigate('/bookings?confirmed=1')
    } catch (storageError) {
      setError(`Your booking could not be saved: ${storageError.message}`)
    }
  }

  const inputStyle = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">Full name <span className="text-rose-600">*</span><input name="name" autoComplete="name" value={form.name} onChange={updateField} required className={inputStyle} placeholder="Your name" /></label>
        <label className="text-sm font-medium text-slate-700">Email address <span className="text-rose-600">*</span><input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} required className={inputStyle} placeholder="you@example.com" /></label>
        <label className="text-sm font-medium text-slate-700">Phone number<input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} className={inputStyle} placeholder="+1 (555) 000-0000" /></label>
        <label className="text-sm font-medium text-slate-700">Departure date <span className="text-rose-600">*</span><input name="date" type="date" min={today} value={form.date} onChange={updateField} required className={inputStyle} /></label>
        <label className="text-sm font-medium text-slate-700">Travelers<select name="travelers" value={form.travelers} onChange={updateField} className={inputStyle}>{[1, 2, 3, 4, 5, 6].map((number) => <option key={number} value={number}>{number} {number === 1 ? 'traveler' : 'travelers'}</option>)}</select></label>
        <label className="text-sm font-medium text-slate-700 sm:col-span-2">Anything we should know? <span className="font-normal text-slate-400">(optional)</span><textarea name="notes" rows="3" value={form.notes} onChange={updateField} className={`${inputStyle} resize-y`} placeholder="Special requests, accessibility needs, or a note for our team..." /></label>
      </div>
      {error && <p role="alert" className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
      <div className="border-t border-slate-100 pt-4">
        <div className="flex justify-between py-1 text-sm text-slate-600"><span>${travelPackage.price.toLocaleString()} × {travelers} {travelers === 1 ? 'traveler' : 'travelers'}</span><span>${subtotal.toLocaleString()}</span></div>
        <div className="flex justify-between py-1 text-sm text-slate-600"><span>Service fee (5%)</span><span>${serviceFee.toLocaleString()}</span></div>
        <div className="mt-2 flex justify-between border-t border-slate-100 pt-3 font-semibold text-slate-900"><span>Total</span><span>${total.toLocaleString()}</span></div>
      </div>
      <button type="submit" className="w-full rounded-full bg-teal-800 px-6 py-4 text-sm font-semibold text-white transition hover:bg-teal-900 focus:outline-none focus:ring-4 focus:ring-teal-800/20">Confirm booking</button>
      <p className="text-center text-xs text-slate-400">No payment is collected. This is a demo booking.</p>
    </form>
  )
}

export default BookingForm
