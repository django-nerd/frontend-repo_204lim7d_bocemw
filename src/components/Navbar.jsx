import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 text-sm md:text-base font-medium transition-colors ${
          isActive ? 'text-[#4A7DFF]' : 'text-white/80 hover:text-white'
        }`}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111]/60 backdrop-blur-md px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-[#4A7DFF] to-white"></div>
            <span className="text-white font-semibold tracking-wide">KNTK Studio</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {navItem('/', 'Home')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/services/branding', 'Services')}
            {navItem('/contact', 'Contact')}
            <Link to="/contact" className="ml-4 inline-flex items-center rounded-full bg-[#4A7DFF] px-4 py-2 text-white hover:opacity-90 transition">Start je project</Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-md px-4 py-3">
            <div className="flex flex-col">
              {navItem('/', 'Home')}
              {navItem('/portfolio', 'Portfolio')}
              {navItem('/services/branding', 'Services')}
              {navItem('/contact', 'Contact')}
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-[#4A7DFF] px-4 py-2 text-white hover:opacity-90 transition">Start je project</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
