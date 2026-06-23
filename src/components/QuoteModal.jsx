import { useState } from 'react'
import { X } from 'lucide-react'
import { trackEvent } from '../utils/analytics.js'

export default function QuoteModal({ open, onClose, estimate }) {
  const [sent, setSent] = useState(false)
  if (!open) return null

  function submit(event) {
    event.preventDefault()
    trackEvent('form_submit', { form: 'quote_modal' })
    setSent(true)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-dark/80 p-4 backdrop-blur">
      <form onSubmit={submit} className="w-full max-w-xl border border-rosegold-muted bg-dark-surface p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h2 className="font-heading text-3xl text-cream">Get your exact quote</h2>
            <p className="mt-2 text-sm text-cream/65">Estimated range: {estimate}. We will confirm your exact fee within 2 business hours.</p>
          </div>
          <button type="button" onClick={onClose} className="text-rosegold" aria-label="Close quote form">
            <X />
          </button>
        </div>
        {sent ? (
          <p className="mt-8 border border-rosegold-muted bg-dark-card p-5 text-cream/75">Thank you. Your details are ready for the Guild team to review once the Formspree endpoint is connected.</p>
        ) : (
          <div className="mt-6 grid gap-4">
            <input required name="name" placeholder="Name" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
            <input required name="email" type="email" placeholder="Email" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
            <input required name="phone" placeholder="Phone" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
            <textarea name="message" rows="4" placeholder="Message" className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
            <button className="rose-gradient px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-dark">Send Exact Quote Request</button>
          </div>
        )}
      </form>
    </div>
  )
}
