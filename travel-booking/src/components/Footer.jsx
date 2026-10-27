import { Link } from 'react-router-dom'
import { Camera, Mail, Phone, Plane } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="mb-3 inline-flex items-center gap-2 text-xl font-bold text-white"><Plane size={19} /> Ranjith Trails</Link>
          <p className="max-w-sm text-sm leading-6 text-slate-400">Thoughtful trips, made simple. Find the places and moments you’ll remember long after you’re home.</p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Explore</h2>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/destinations" className="hover:text-white">All destinations</Link>
            <Link to="/destinations?category=Adventure" className="hover:text-white">Adventure trips</Link>
            <Link to="/bookings" className="hover:text-white">Your bookings</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">Get in touch</h2>
          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <a href="mailto:hello@ranjithtrails.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={16} /> hello@ranjithtrails.com</a>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> +91 98765 43210</a>
          </div>
          <p className="mb-3 mt-5 text-xs text-slate-500">Follow our travel updates</p>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Visit Instagram" className="inline-flex size-10 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700"><Camera size={18} /></a>
          <p className="mt-4 text-xs text-slate-500">Sample contact details — update before publishing.</p>
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Ranjith Trails. Travel at your own pace.</div>
    </footer>
  )
}

export default Footer
