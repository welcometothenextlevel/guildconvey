import { Link } from 'react-router-dom'
import logo from '../assets/logo-rosegold.webp'

const columns = [
  ['Services', [['Buying', '/buying'], ['Selling', '/selling'], ['Property Transfers', '/transfer'], ['Contract Review', '/contract-review']]],
  ['Locations', [['Victoria', '/victoria'], ['South Australia', '/south-australia'], ['Queensland', '/queensland'], ['All Locations', '/locations']]],
  ['Company', [['About', '/about'], ['FAQ', '/faq'], ['Blog', '/blog'], ['Contact', '/contact']]],
  ['Contact', [['Get a Quote', '/quote'], ['Email Guild', '/contact']]],
]

export default function Footer() {
  return (
    <footer className="border-t border-rosegold-muted bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img src={logo} alt="Guild Conveyancing" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/70">
              Mastery in Property Transfers. Fixed fee, fully online conveyancing across Victoria, South Australia and Queensland.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map(([title, links]) => (
              <div key={title}>
                <h2 className="font-heading text-lg text-rosegold">{title}</h2>
                <div className="mt-4 grid gap-3 text-sm text-cream/70">
                  {links.map(([label, path]) => <Link key={path + label} to={path} className="hover:text-rosegold">{label}</Link>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-rosegold-muted pt-6 text-xs text-cream/55">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© Guild Conveyancing | Privacy Policy | Terms | Disclaimer</p>
            <p>Liability limited by a scheme approved under professional standards legislation.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
