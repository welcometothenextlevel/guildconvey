import { useState } from 'react'
import { Link } from 'react-router-dom'
import { stateEntries, suburbPath } from '../data/locations.js'
import LocationsMap from './LocationsMap.jsx'
import ButtonLink from './ButtonLink.jsx'

export default function StateTabSwitcher() {
  const [active, setActive] = useState('VIC')
  const state = stateEntries.find(([code]) => code === active)[1]
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-3">
        {stateEntries.map(([code, item]) => (
          <button
            key={code}
            onClick={() => setActive(code)}
            className={`border-b-2 px-4 py-3 font-semibold transition ${active === code ? 'border-rosegold text-rosegold' : 'border-transparent text-cream/70 hover:text-rosegold'}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="border border-rosegold-muted bg-dark-card p-6">
          <LocationsMap stateCode={active} />
          <p className="mt-4 text-center font-heading text-2xl text-cream">{state.mapLabel}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {state.suburbs.map((suburb) => (
            <Link key={suburb} to={suburbPath(active, suburb)} className="border border-rosegold-muted bg-dark-card px-4 py-3 text-sm text-cream/75 transition hover:border-rosegold hover:text-rosegold hover:shadow-rosegold">
              Conveyancing {suburb}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 border border-rosegold-muted bg-dark-card p-6 text-center">
        <p className="font-heading text-2xl text-cream">Don't see your suburb? We service ALL of VIC, SA & QLD — 100% online.</p>
        <ButtonLink to="/contact" variant="secondary" className="mt-6">Contact Us to Confirm Your Area</ButtonLink>
      </div>
    </div>
  )
}
