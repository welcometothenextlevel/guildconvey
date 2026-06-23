import SEO from '../components/SEO.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  const all = Object.values(faqs).flat()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: all.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  }
  return (
    <>
      <SEO title="Conveyancing FAQ | Guild Conveyancing" description="Useful Australian conveyancing answers for buying, selling, fees and state-specific matters in VIC, SA and QLD." path="/faq" schema={schema} />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">FAQ</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">Clear conveyancing answers</h1>
          <p className="mt-5 text-lg leading-8 text-cream/72">Practical guidance for property buyers, sellers and families across Victoria, South Australia and Queensland.</p>
          <div className="mt-12 grid gap-12">
            {Object.entries(faqs).map(([group, items]) => (
              <section key={group}>
                <h2 className="font-heading text-3xl text-cream">{group}</h2>
                <div className="mt-6"><FAQAccordion items={items} /></div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
