import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Plane, X } from 'lucide-react'

const linkStyle = ({ isActive }) =>
  `transition hover:text-teal-700 ${isActive ? 'text-teal-800' : 'text-slate-600'}`

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-20 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          <span className="flex size-9 items-center justify-center rounded-xl bg-teal-800 text-white"><Plane size={18} /></span>
          Ranjith Trails
        </Link>
        <div className="hidden items-center gap-9 text-sm font-medium md:flex">
          <NavLink to="/" end className={linkStyle}>Home</NavLink>
          <NavLink to="/destinations" className={linkStyle}>Explore</NavLink>
          <NavLink to="/bookings" className={linkStyle}>My bookings</NavLink>
        </div>
        <Link to="/destinations" className="hidden rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-900 md:inline-flex">Plan a trip</Link>
        <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-medium">
            <NavLink onClick={closeMenu} to="/" end className={linkStyle}>Home</NavLink>
            <NavLink onClick={closeMenu} to="/destinations" className={linkStyle}>Explore destinations</NavLink>
            <NavLink onClick={closeMenu} to="/bookings" className={linkStyle}>My bookings</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
