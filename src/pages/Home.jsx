import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Award, Clock, FileCheck, Laptop, ShieldCheck, Zap } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ButtonLink from '../components/ButtonLink.jsx'
import TrustBar from '../components/TrustBar.jsx'
import QuoteCalculator from '../components/QuoteCalculator.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProcessSteps from '../components/ProcessSteps.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import LocationsMap from '../components/LocationsMap.jsx'
import ReviewCarousel from '../components/ReviewCarousel.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import CTABand from '../components/CTABand.jsx'
import { homeFaqs } from '../data/faqs.js'
import { services } from '../data/services.js'
import { stateEntries } from '../data/locations.js'
import { localBusinessSchema } from '../utils/seo.js'

const headlines = ['Mastery in Property Transfers — Victoria', 'Mastery in Property Transfers — South Australia', 'Mastery in Property Transfers — Queensland']
const why = [
  [FileCheck, 'Fixed Fee', 'No surprise invoices at settlement'],
  [ShieldCheck, 'PEXA Certified', 'Fully electronic, fast settlement'],
  [Clock, 'After-Hours Access', 'Evenings and weekends by appointment'],
  [Laptop, 'No Office Visit', 'Everything from your phone or laptop'],
  [Zap, '48-Hour Turnaround', 'Contract reviews returned fast'],
  [Award, 'State Specialists', 'Deep expertise in VIC, SA and QLD law'],
]

export default function Home() {
  const [headline, setHeadline] = useState(0)
  const reduce = useReducedMotion()
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  }

  useEffect(() => {
    if (reduce) return undefined
    const timer = window.setInterval(() => setHeadline((current) => (current + 1) % headlines.length), 3200)
    return () => window.clearInterval(timer)
  }, [reduce])

  return (
    <>
      <SEO
        title="Guild Conveyancing | Fixed Fee Online Conveyancing VIC, SA & QLD"
        description="Premium fixed-fee conveyancing for buying, selling, property transfers and contract reviews across Victoria, South Australia and Queensland."
        schema={[localBusinessSchema, faqSchema]}
      />
      <section className="property-hero relative flex min-h-screen items-center pt-24">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} className="text-sm font-bold uppercase tracking-[0.25em] text-rosegold">
            Guild Conveyancing
          </motion.p>
          <motion.h1 key={headline} initial={reduce ? false : { opacity: 0, y: 20 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-5 max-w-4xl font-heading text-5xl font-bold leading-tight text-cream sm:text-7xl">
            {headlines[headline]}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-xl text-cream/78">Fixed fee. Fully online. Settled with precision.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink to="/quote">Get My Free Quote</ButtonLink>
            <ButtonLink to="#how-it-works" variant="secondary">How It Works</ButtonLink>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-pulse text-rosegold">⌄</div>
      </section>
      <TrustBar />
      <section className="section-rule bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Instant Quote" title="Know your likely fee before you commit" text="Choose your matter, state and property value to see a fixed-fee estimate for Guild conveyancing support." />
          <div className="mt-10"><QuoteCalculator /></div>
        </div>
      </section>
      <section id="how-it-works" className="section-rule bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="How It Works" title="A precise path from contract to settlement" />
          <div className="mt-14"><ProcessSteps /></div>
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title="Conveyancing for every property milestone" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => <ServiceCard key={service.title} service={service} />)}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Serving Victoria, South Australia & Queensland" text="We operate 100% online — your suburb is never a barrier." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {stateEntries.map(([code, state]) => (
              <article key={code} className="border border-rosegold-muted bg-dark-card p-6 text-center transition hover:shadow-rosegold">
                <LocationsMap stateCode={code} />
                <h3 className="mt-4 font-heading text-2xl text-cream">{state.name}</h3>
                <ul className="mt-4 grid gap-2 text-sm text-cream/70">{state.topAreas.map((area) => <li key={area}>{area}</li>)}</ul>
                <Link to="/locations" className="mt-5 inline-flex text-sm font-bold text-rosegold">View All Locations →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Guild" title="Built for certainty, speed and calm" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([Icon, title, text]) => (
              <article key={title} className="border border-rosegold-muted bg-dark-card p-6">
                <Icon className="text-rosegold" strokeWidth={1.4} />
                <h3 className="mt-4 font-heading text-xl text-cream">{title}</h3>
                <p className="mt-2 text-sm text-cream/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-rule bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Reviews" title="Trusted across three states" />
          <ReviewCarousel />
        </div>
      </section>
      <section className="section-rule bg-dark-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="FAQ" title="Clear answers before you begin" />
          <div className="mt-10"><FAQAccordion items={homeFaqs} /></div>
          <div className="mt-8 text-center"><Link to="/faq" className="font-bold text-rosegold">See All FAQs →</Link></div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
