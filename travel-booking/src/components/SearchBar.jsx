import { useState } from 'react'
import { CalendarDays, MapPin, Search, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [travelers, setTravelers] = useState('2')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (destination.trim()) params.set('q', destination.trim())
    if (date) params.set('date', date)
    if (travelers) params.set('travelers', travelers)
    navigate(`/destinations?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-2 rounded-2xl bg-white p-3 shadow-2xl shadow-slate-950/20 sm:grid-cols-[1.3fr_1fr_0.8fr_auto] sm:items-center sm:rounded-full sm:p-2 sm:pl-5">
      <label className="flex items-center gap-3 border-b border-slate-100 px-2 py-3 sm:border-0 sm:py-2">
        <MapPin className="shrink-0 text-teal-800" size={19} />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-slate-800">Where to?</span>
          <input value={destination} onChange={(event) => setDestination(event.target.value)} placeholder="Any destination" className="w-full bg-transparent text-sm text-slate-600 outline-none placeholder:text-slate-400" />
        </span>
      </label>
      <label className="flex items-center gap-3 border-b border-slate-100 px-2 py-3 sm:border-l sm:border-b-0 sm:pl-5 sm:py-2">
        <CalendarDays className="shrink-0 text-teal-800" size={19} />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-slate-800">When?</span>
          <input type="date" value={date} onChange={(event) => setDate(event.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full bg-transparent text-sm text-slate-600 outline-none" />
        </span>
      </label>
      <label className="flex items-center gap-3 px-2 py-3 sm:border-l sm:pl-5 sm:py-2">
        <Users className="shrink-0 text-teal-800" size={19} />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-semibold text-slate-800">Travelers</span>
          <select value={travelers} onChange={(event) => setTravelers(event.target.value)} className="w-full bg-transparent text-sm text-slate-600 outline-none">
            {[1, 2, 3, 4, 5, 6].map((number) => <option key={number} value={number}>{number} {number === 1 ? 'traveler' : 'travelers'}</option>)}
          </select>
        </span>
      </label>
      <button type="submit" className="flex items-center justify-center gap-2 rounded-full bg-teal-800 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-900 sm:size-12 sm:px-0" aria-label="Search trips"><Search size={18} /><span className="sm:hidden">Find my trip</span></button>
    </form>
  )
}

export default SearchBar
