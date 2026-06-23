import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import CTABand from '../components/CTABand.jsx'
import LocationsMap from '../components/LocationsMap.jsx'
import { states, suburbPath } from '../data/locations.js'

const notes = {
  VIC: ['Section 32 Vendor Statement', '3-business-day cooling-off period for many private treaty purchases'],
  SA: ["Form 1 Vendor's Statement", '2-business-day cooling-off period after proper document service'],
  QLD: ['Queensland matters commonly require a solicitor', 'REIQ contract review and 5-business-day cooling-off period for many residential contracts'],
}

const faqs = {
  VIC: [
    ['What is different about conveyancing in Victoria?', 'Victorian matters often turn on Section 32 disclosure, contract conditions and careful settlement adjustments. Guild manages these details online.'],
    ['Can you review my Section 32?', 'Yes. We review the contract and Section 32 before you sign and explain any practical risks.'],
    ['How does cooling off work in VIC?', 'Many private treaty residential purchases include a 3-business-day cooling-off period, though exceptions apply.'],
    ['Do you cover regional Victoria?', 'Yes. We assist clients across Melbourne, Geelong, Ballarat, Bendigo and regional areas online.'],
    ['Can settlement happen through PEXA?', 'Yes. Most eligible Victorian settlements are completed electronically through PEXA.'],
  ],
  SA: [
    ['What is different about conveyancing in South Australia?', 'SA transactions rely on Form 1 disclosure, clear contract dates and careful coordination with agents and lenders.'],
    ['Can you explain the Form 1?', 'Yes. We explain what the Form 1 discloses and which questions matter before you proceed.'],
    ['How does SA cooling off work?', 'Many residential purchases include a 2-business-day cooling-off period after proper service of documents.'],
    ['Do you cover Adelaide and regional SA?', 'Yes. Guild assists Adelaide, Mount Barker, Murray Bridge and broader South Australian areas online.'],
    ['Are your SA fees fixed?', 'Yes. We confirm fixed professional fees before you engage, with searches and government costs listed separately.'],
  ],
  QLD: [
    ['What is different about conveyancing in Queensland?', 'Queensland contracts often have strict condition dates, REIQ terms and settlement requirements that need prompt action.'],
    ['Do I need a solicitor in QLD?', 'Queensland conveyancing is commonly handled by solicitors, and Guild is structured to support that requirement.'],
    ['How does QLD cooling off work?', 'Many residential purchases include a 5-business-day cooling-off period, with important exceptions and timing rules.'],
    ['Can you review an REIQ contract?', 'Yes. We review REIQ contracts and explain finance, building and pest, settlement and special conditions.'],
    ['Do you cover regional Queensland?', 'Yes. We support Brisbane, Gold Coast, Sunshine Coast, Cairns, Townsville and other Queensland locations online.'],
  ],
}

const intros = {
  VIC: ['Victoria’s property market moves from dense inner-Melbourne apartments to regional family homes, and each matter needs calm control of contract dates, disclosure and settlement figures.', 'Guild Conveyancing gives Victorian buyers, sellers and families fixed-fee guidance with secure online signing and PEXA-ready settlement coordination.'],
  SA: ['South Australian property transactions reward early document checks, especially around Form 1 disclosure, contract conditions and settlement timing.', 'Guild brings a clear online process to Adelaide, regional centres and coastal communities, with fixed fees and practical communication from start to finish.'],
  QLD: ['Queensland purchases and sales can move quickly, with REIQ contract dates, finance conditions and building and pest deadlines needing careful attention.', 'Guild Conveyancing supports Queensland clients with solicitor-led precision, fixed-fee transparency and a fully online experience across metro and regional markets.'],
}

export default function StatePage({ code }) {
  const state = states[code]
  return (
    <>
      <SEO title={`Conveyancing ${state.name} — Fixed Fee, Fully Online`} description={`Fixed-fee online conveyancing for buying, selling and transfers across ${state.name}. PEXA certified, fast communication and no office visit required.`} path={state.path} />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">{state.name}</p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">Conveyancing {state.name} — Fixed Fee, Fully Online</h1>
            {intros[code].map((text) => <p key={text} className="mt-5 text-lg leading-8 text-cream/72">{text}</p>)}
          </div>
          <div className="border border-rosegold-muted bg-dark-card p-8"><LocationsMap stateCode={code} /></div>
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl text-cream">State-specific legal notes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {notes[code].map((note) => <div key={note} className="border border-rosegold-muted bg-dark-card p-5 text-cream/75">{note}</div>)}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-3xl text-cream">Top cities and suburbs served</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {state.suburbs.slice(0, 10).map((suburb) => (
              <Link key={suburb} to={suburbPath(code, suburb)} className="border border-rosegold-muted bg-dark-card p-4 text-sm text-cream/75 hover:border-rosegold hover:text-rosegold">
                {suburb}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl text-cream">{state.name} FAQ</h2>
          <div className="mt-8"><FAQAccordion items={faqs[code]} /></div>
        </div>
      </section>
      <CTABand title={`Need conveyancing in ${state.name}?`} />
    </>
  )
}
