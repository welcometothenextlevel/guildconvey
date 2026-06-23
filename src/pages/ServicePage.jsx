import SEO from '../components/SEO.jsx'
import CTABand from '../components/CTABand.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'

const pages = {
  buying: {
    path: '/buying',
    title: 'Buying Conveyancing',
    h1: 'Buying Conveyancing — Clear Advice Before You Sign',
    intro: 'From contract review to settlement, Guild keeps your purchase moving with fixed-fee clarity, online convenience and practical guidance across VIC, SA and QLD.',
    points: ['Pre-signing contract and disclosure review', 'Finance, building and pest, cooling-off and settlement date tracking', 'Lender, agent and PEXA settlement coordination'],
    faqs: [
      ['Can you review before I sign?', 'Yes. Early review is strongly recommended so risks and key dates are understood before you commit.'],
      ['Do you handle first-home purchases?', 'Yes. We explain the process clearly and flag matters to raise with your broker, lender or adviser.'],
      ['Can I complete everything online?', 'Yes. The buying process is designed for secure online communication and signing.'],
    ],
  },
  selling: {
    path: '/selling',
    title: 'Selling Conveyancing',
    h1: 'Selling Conveyancing — Prepared, Precise and Settlement Ready',
    intro: 'Guild helps vendors prepare disclosure, manage contract steps and settle confidently without office visits or surprise professional fees.',
    points: ['Vendor statement and contract support', 'Agent, purchaser representative and lender liaison', 'Adjustment and settlement statement checks'],
    faqs: [
      ['When should I engage a conveyancer?', 'Before marketing is ideal, so your disclosure and contract material can be prepared early.'],
      ['Can you speak with my agent?', 'Yes. We coordinate directly with agents and the other side throughout the sale.'],
      ['Do you support VIC, SA and QLD sales?', 'Yes. Guild supports selling matters across all three states.'],
    ],
  },
  transfer: {
    path: '/transfer',
    title: 'Property Transfers',
    h1: 'Property Transfers — Seamless Title Changes',
    intro: 'For related-party transfers, family arrangements and title changes, Guild brings calm structure, fixed-fee transparency and electronic settlement coordination.',
    points: ['Related-party and family title transfers', 'Clear explanation of transfer documents and authority requirements', 'PEXA-ready completion where available'],
    faqs: [
      ['Is this different from buying or selling?', 'Yes. Transfers can involve different documents, duties and authority requirements depending on the relationship and state.'],
      ['Can you advise on stamp duty?', 'We can identify likely duty questions and recommend tax or revenue advice where needed.'],
      ['Can transfers be completed online?', 'Many can be progressed online with digital signing and identity checks.'],
    ],
  },
  contractReview: {
    path: '/contract-review',
    title: 'Contract Review',
    h1: 'Contract Review — Know the Risk Before You Commit',
    intro: 'A stand-alone contract review gives you practical, plain-English guidance before signing or bidding, with fast turnaround available across VIC, SA and QLD.',
    points: ['Contract, disclosure and special condition review', 'Plain-English summary of risks and dates', '48-hour turnaround available for time-sensitive matters'],
    faqs: [
      ['Can you review auction contracts?', 'Yes. Auction contracts should be reviewed before bidding because cooling-off rights may not apply.'],
      ['What will I receive?', 'You receive a clear summary of key risks, dates and questions to resolve before signing.'],
      ['Do you review REIQ contracts?', 'Yes. Queensland REIQ contract reviews are available.'],
    ],
  },
}

export default function ServicePage({ type }) {
  const page = pages[type]
  return (
    <>
      <SEO title={`${page.title} | Guild Conveyancing`} description={page.intro} path={page.path} />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">Guild Services</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">{page.h1}</h1>
          <p className="mt-6 text-lg leading-8 text-cream/72">{page.intro}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.points.map((point) => <article key={point} className="border border-rosegold-muted bg-dark-card p-5 text-cream/75">{point}</article>)}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl text-cream">Common questions</h2>
          <div className="mt-8"><FAQAccordion items={page.faqs} /></div>
        </div>
      </section>
      <CTABand title={`Ready for ${page.title.toLowerCase()}?`} />
    </>
  )
}
