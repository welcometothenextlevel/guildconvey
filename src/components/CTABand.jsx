import ButtonLink from './ButtonLink.jsx'

export default function CTABand({ title = 'Ready to begin your property journey?', text = 'Get your fixed-fee quote in under 30 seconds.' }) {
  return (
    <section className="section-rule bg-dark-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <div className="border border-rosegold-muted bg-[radial-gradient(circle_at_top_left,rgba(176,141,122,0.22),transparent_35rem)] px-6 py-14">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/70">{text}</p>
          <ButtonLink to="/quote" className="mt-8">Get My Free Quote</ButtonLink>
        </div>
      </div>
    </section>
  )
}
