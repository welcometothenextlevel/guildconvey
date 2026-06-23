import SEO from '../components/SEO.jsx'
import CTABand from '../components/CTABand.jsx'

export default function About() {
  return (
    <>
      <SEO title="About Guild Conveyancing" description="Meet Guild Conveyancing, a fixed-fee, fully online conveyancing practice serving Victoria, South Australia and Queensland." path="/about" />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">About & Team</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">A boutique conveyancing experience with disciplined process</h1>
          <div className="mt-8 grid gap-8 text-lg leading-8 text-cream/72 md:grid-cols-2">
            <p>Guild Conveyancing exists for clients who want property transfers handled with precision, clear communication and no unnecessary office visits. We combine fixed-fee certainty with a modern online workflow.</p>
            <p>Our team supports buying, selling, title transfers and contract reviews across VIC, SA and QLD, with PEXA-ready settlement coordination and practical guidance at every step.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {['Fixed fee, no surprises', '100% online process', 'VIC, SA and QLD specialists'].map((item) => <div key={item} className="border border-rosegold-muted bg-dark-card p-5 text-cream/75">{item}</div>)}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
