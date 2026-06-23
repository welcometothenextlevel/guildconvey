const steps = [
  ['Get Your Quote', 'Instant estimate in 30 seconds, zero commitment'],
  ['Engage the Guild', 'E-sign your service agreement from any device'],
  ['We Handle Everything', 'Title searches, documents, agent liaison, PEXA lodgement'],
  ['Settle with Confidence', 'Electronic settlement confirmed, keys in hand'],
]

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-6 lg:grid-cols-4">
      <div className="absolute left-0 right-0 top-8 hidden border-t border-rosegold-muted lg:block" />
      {steps.map(([title, text], index) => (
        <article key={title} className="relative bg-dark px-2 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-rosegold bg-dark-card font-heading text-2xl text-rosegold">
            {index + 1}
          </div>
          <h3 className="mt-5 font-heading text-xl text-cream">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-cream/65">{text}</p>
        </article>
      ))}
    </div>
  )
}
