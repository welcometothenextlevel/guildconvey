import SEO from '../components/SEO.jsx'
import QuoteStepper from '../components/QuoteStepper.jsx'

export default function Quote() {
  return (
    <>
      <SEO title="Instant Conveyancing Quote | Guild Conveyancing" description="Get a fixed-fee conveyancing estimate for buying, selling, property transfers or contract review in VIC, SA or QLD." path="/quote" />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-rosegold">Instant fee calculator</p>
          <h1 className="mt-4 text-center font-heading text-4xl font-bold text-cream sm:text-6xl">Get your fixed-fee quote</h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-cream/70">Answer four quick questions and we will show your estimated Guild conveyancing fee range.</p>
          <div className="mt-10"><QuoteStepper /></div>
        </div>
      </section>
    </>
  )
}
