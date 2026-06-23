import { useParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import CTABand from '../components/CTABand.jsx'
import { states, titleFromSlug } from '../data/locations.js'
import { canonical } from '../utils/seo.js'

const stateFromParam = {
  victoria: 'VIC',
  'south-australia': 'SA',
  queensland: 'QLD',
}

export default function LocationSuburb() {
  const { state, suburb } = useParams()
  const code = stateFromParam[state] || 'VIC'
  const stateData = states[code]
  const suburbName = titleFromSlug(suburb)
  const path = `/${state}/conveyancing-${suburb}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: canonical('/') },
      { '@type': 'ListItem', position: 2, name: stateData.name, item: canonical(stateData.path) },
      { '@type': 'ListItem', position: 3, name: `Conveyancing ${suburbName}`, item: canonical(path) },
    ],
  }
  return (
    <>
      <SEO title={`Conveyancing ${suburbName} | Guild Conveyancing`} description={`Fixed-fee online conveyancing in ${suburbName}, ${stateData.name}. Buying, selling, transfers and contract review with Guild Conveyancing.`} path={path} schema={schema} />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">{stateData.name}</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">Conveyancing {suburbName}</h1>
          <p className="mt-6 text-lg leading-8 text-cream/72">
            Guild Conveyancing supports {suburbName} clients with fixed-fee online conveyancing for purchases, sales, title transfers and contract reviews. You can complete the process from your phone or laptop, with clear communication and PEXA-ready settlement coordination where available.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {['Fixed professional fee confirmed upfront', 'No office visit required', `${stateData.name} process knowledge`].map((item) => <div key={item} className="border border-rosegold-muted bg-dark-card p-5 text-cream/75">{item}</div>)}
          </div>
        </div>
      </section>
      <CTABand title={`Need conveyancing in ${suburbName}?`} />
    </>
  )
}
