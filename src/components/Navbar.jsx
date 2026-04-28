import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrollY > 50 ? 'glass shadow-lg shadow-purple-900/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold gradient-text">PP</a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="nav-link text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10">
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
