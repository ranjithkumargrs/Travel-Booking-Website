import { ArrowLeft, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-[55vh] flex-col items-center justify-center px-5 py-16 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-teal-50 text-teal-800"><Compass size={29} /></span>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">A little off course</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">We can’t find that page.</h1>
      <p className="mt-3 max-w-md text-slate-500">The link may have changed, but there are plenty of places left to explore.</p>
      <Link to="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-800 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-900"><ArrowLeft size={16} /> Back home</Link>
    </div>
  )
}

export default NotFound
