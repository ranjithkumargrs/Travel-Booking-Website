import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PackageCard from '../components/PackageCard.jsx'
import { categories, packages } from '../data/travelData.js'

function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || 'All experiences')
  const [sort, setSort] = useState('recommended')

  const filteredPackages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const matches = packages.filter((travelPackage) => {
      const matchesQuery = !normalizedQuery || `${travelPackage.title} ${travelPackage.destination} ${travelPackage.country} ${travelPackage.category}`.toLowerCase().includes(normalizedQuery)
      const matchesCategory = category === 'All experiences' || travelPackage.category === category
      return matchesQuery && matchesCategory
    })
    return [...matches].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : b.rating - a.rating)
  }, [category, query, sort])

  function applyFilters(event) {
    event.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (category !== 'All experiences') params.set('category', category)
    if (searchParams.get('date')) params.set('date', searchParams.get('date'))
    if (searchParams.get('travelers')) params.set('travelers', searchParams.get('travelers'))
    setSearchParams(params)
  }

  function selectCategory(value) {
    setCategory(value)
    const params = new URLSearchParams(searchParams)
    if (value === 'All experiences') params.delete('category')
    else params.set('category', value)
    setSearchParams(params)
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">The world, your way</p><h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Find your next escape.</h1><p className="mt-4 leading-7 text-slate-500">Browse thoughtful trips and find the one that feels like you.</p></div>
      <form onSubmit={applyFilters} className="mb-7 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:flex-row">
        <label className="flex flex-1 items-center gap-3 px-3"><Search size={18} className="shrink-0 text-slate-400" /><span className="sr-only">Search destinations</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a place, country, or trip..." className="w-full py-2 text-sm outline-none placeholder:text-slate-400" /></label>
        <label className="flex items-center gap-2 border-t border-slate-100 px-3 pt-3 text-sm text-slate-500 sm:border-l sm:border-t-0 sm:pt-0"><SlidersHorizontal size={16} /><span className="sr-only">Sort trips</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent py-2 text-sm text-slate-700 outline-none"><option value="recommended">Recommended</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
        <button className="rounded-xl bg-teal-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-900 sm:rounded-full">Search trips</button>
      </form>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">{categories.map((item) => <button key={item} type="button" onClick={() => selectCategory(item)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${category === item ? 'border-teal-800 bg-teal-800 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-teal-800 hover:text-teal-800'}`}>{item}</button>)}</div>
      <div className="mb-5 flex items-center justify-between"><p className="text-sm text-slate-500"><span className="font-semibold text-slate-900">{filteredPackages.length}</span> thoughtful trips</p></div>
      {filteredPackages.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filteredPackages.map((travelPackage) => <PackageCard key={travelPackage.id} travelPackage={travelPackage} />)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center"><h2 className="text-xl font-semibold">No trips found just yet</h2><p className="mt-2 text-sm text-slate-500">Try another destination or clear a filter.</p><button onClick={() => { setQuery(''); setCategory('All experiences'); setSearchParams({}) }} className="mt-5 text-sm font-semibold text-teal-800 hover:underline">Clear all filters</button></div>}
    </div>
  )
}

export default Destinations
