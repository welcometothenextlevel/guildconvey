import SEO from '../components/SEO.jsx'

const posts = [
  ['What buyers should check before signing', 'Contract dates, cooling-off rights and disclosure documents deserve careful attention before any property commitment.'],
  ['Why fixed-fee conveyancing matters', 'A clear professional fee helps clients make decisions with confidence before settlement pressure begins.'],
  ['PEXA and electronic settlement explained', 'Electronic settlement reduces paper handling and helps property matters complete with greater certainty.'],
]

export default function Blog() {
  return (
    <>
      <SEO title="Guild Conveyancing Blog" description="Static SEO articles and conveyancing guidance for Australian property buyers, sellers and families." path="/blog" />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">Blog</p>
          <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">Property transfer insights</h1>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map(([title, text]) => (
              <article key={title} className="border border-rosegold-muted bg-dark-card p-6">
                <h2 className="font-heading text-2xl text-cream">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-cream/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
