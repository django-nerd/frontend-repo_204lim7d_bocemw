import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="flex flex-wrap gap-4 text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/portfolio" className="hover:text-white">Portfolio</Link>
            <Link to="/services/branding" className="hover:text-white">Services</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>
          <div className="flex gap-4 text-white/70">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Behance</a>
          </div>
        </div>
        <p className="mt-6 text-white/60 text-sm">© 2025 KNTK Studio</p>
      </div>
    </footer>
  )
}
