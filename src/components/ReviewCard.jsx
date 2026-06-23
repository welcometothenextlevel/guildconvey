export default function ReviewCard({ review }) {
  return (
    <article className="min-w-[18rem] border border-rosegold-muted bg-dark-card p-6 transition hover:border-rosegold hover:shadow-rosegold">
      <div className="text-rosegold-light" aria-label="5 stars">★★★★★</div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <h3 className="font-semibold text-cream">{review.name}</h3>
        <span className="border border-rosegold-muted px-2 py-1 text-xs font-bold text-rosegold">{review.state}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-cream/70">{review.text}</p>
      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-cream/45">Verified Google Review</p>
    </article>
  )
}
