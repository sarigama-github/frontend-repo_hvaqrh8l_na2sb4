import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/parceiros', label: 'Parceiros' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
          <span className="font-semibold text-white tracking-tight">BEE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="#inscricao" className="ml-4 inline-flex items-center rounded-full bg-white text-slate-900 text-sm font-semibold px-4 py-2 hover:opacity-90 transition">
            Inscrever-me
          </a>
        </nav>

        <button onClick={() => setOpen(true)} className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-950/80" onClick={() => setOpen(false)} />
      )}

      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="px-4 py-2 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white text-slate-900' : 'text-slate-200 hover:bg-white/10'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="#inscricao" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-semibold px-4 py-2">
            Inscrever-me
          </a>
        </div>
      </div>
    </header>
  )
}
