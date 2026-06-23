import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo-rosegold.webp'
import ButtonLink from './ButtonLink.jsx'

const services = [
  ['Buying', '/buying'],
  ['Selling', '/selling'],
  ['Transfer', '/transfer'],
  ['Contract Review', '/contract-review'],
]

const locations = [
  ['Victoria', '/victoria'],
  ['South Australia', '/south-australia'],
  ['Queensland', '/queensland'],
]

function Dropdown({ label, items }) {
  return (
    <div className="group relative">
      <button className="py-2 text-sm font-semibold text-cream/85 transition hover:text-rosegold">{label}</button>
      <div className="invisible absolute left-1/2 top-full z-40 min-w-56 -translate-x-1/2 border border-rosegold-muted bg-dark-surface p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:opacity-100">
        {items.map(([name, path]) => (
          <NavLink key={path} to={path} className="block px-3 py-2 text-sm text-cream/80 hover:bg-rosegold-muted hover:text-rosegold">
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'border-b border-rosegold-muted bg-dark/85 backdrop-blur' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Guild Conveyancing home">
          <img src={logo} alt="Guild Conveyancing" className="h-10 w-auto" />
          <span className="hidden font-heading text-xl font-bold text-cream sm:block">Guild Conveyancing</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className="text-sm font-semibold text-cream/85 hover:text-rosegold">Home</NavLink>
          <Dropdown label="Services" items={services} />
          <Dropdown label="Locations" items={locations} />
          <NavLink to="/about" className="text-sm font-semibold text-cream/85 hover:text-rosegold">About</NavLink>
          <NavLink to="/faq" className="text-sm font-semibold text-cream/85 hover:text-rosegold">FAQ</NavLink>
          <NavLink to="/contact" className="text-sm font-semibold text-cream/85 hover:text-rosegold">Contact</NavLink>
        </div>
        <div className="hidden lg:block">
          <ButtonLink to="/quote">Get A Quote</ButtonLink>
        </div>
        <button className="text-rosegold lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation menu">
          <Menu size={30} />
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-dark px-6 py-5 lg:hidden">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Guild Conveyancing" className="h-10 w-auto" />
            <button className="text-rosegold" onClick={() => setOpen(false)} aria-label="Close navigation menu">
              <X size={30} />
            </button>
          </div>
          <div className="mt-10 grid gap-4 text-2xl font-heading">
            {[['Home', '/'], ...services, ['Locations', '/locations'], ...locations, ['About', '/about'], ['FAQ', '/faq'], ['Contact', '/contact']].map(([name, path]) => (
              <Link key={`${name}-${path}`} to={path} onClick={() => setOpen(false)} className="border-b border-rosegold-muted py-3 text-cream">
                {name}
              </Link>
            ))}
          </div>
          <ButtonLink to="/quote" className="mt-8 w-full" onClick={() => setOpen(false)}>Get My Free Quote</ButtonLink>
        </div>
      ) : null}
    </nav>
  )
}
