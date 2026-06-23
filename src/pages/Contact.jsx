import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { localBusinessSchema } from '../utils/seo.js'
import { trackEvent } from '../utils/analytics.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function submit(event) {
    event.preventDefault()
    trackEvent('form_submit', { form: 'contact' })
    setSent(true)
  }
  return (
    <>
      <SEO title="Contact Guild Conveyancing" description="Contact Guild Conveyancing for fixed-fee online conveyancing across Victoria, South Australia and Queensland." path="/contact" schema={localBusinessSchema} />
      <section className="bg-dark px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-rosegold">Contact</p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-cream sm:text-6xl">Let’s settle this properly</h1>
            <p className="mt-5 text-lg leading-8 text-cream/72">Tell us where you are buying, selling or transferring, and the Guild team will confirm your exact fee and next steps.</p>
            <div className="mt-8 border border-rosegold-muted bg-dark-card p-5 text-cream/70">
              <p>Service area: Victoria, South Australia and Queensland</p>
              <p className="mt-2">Online appointments: weekdays, evenings and weekends by arrangement</p>
            </div>
          </div>
          <form action="https://formspree.io/f/XXXXXX" method="POST" onSubmit={submit} className="border border-rosegold-muted bg-dark-card p-6">
            {sent ? <p className="text-cream/75">Thank you. Your message is ready for Formspree once the endpoint is connected.</p> : (
              <div className="grid gap-4">
                <input required name="name" placeholder="Name" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
                <input required name="email" type="email" placeholder="Email" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
                <input name="phone" placeholder="Phone" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
                <select name="state" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream">
                  <option>Victoria</option>
                  <option>South Australia</option>
                  <option>Queensland</option>
                </select>
                <textarea required name="message" rows="6" placeholder="How can we help?" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
                <button className="rose-gradient px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-dark">Send Message</button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
