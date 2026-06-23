import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { formatMoney, getFeeRange, transactionLabels } from '../data/pricing.js'
import { trackEvent } from '../utils/analytics.js'

const types = ['buying', 'selling', 'transferring', 'contractReview']
const states = [['VIC', 'Victoria'], ['SA', 'South Australia'], ['QLD', 'Queensland']]

export default function QuoteStepper() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ type: 'buying', state: 'VIC', value: 850000, name: '', email: '', phone: '', time: '' })
  const reduce = useReducedMotion()
  const range = getFeeRange(form.type, form.state)

  function next() {
    if (step === 0) trackEvent('quote_start', { source: 'quote_page' })
    if (step < 3) setStep(step + 1)
    else {
      trackEvent('quote_complete', { state: form.state, transaction: form.type })
      trackEvent('form_submit', { form: 'quote_page' })
      setDone(true)
    }
  }

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const screens = [
    <Choice items={types.map((item) => [item, transactionLabels[item]])} value={form.type} onChange={(value) => update('type', value)} />,
    <Choice items={states} value={form.state} onChange={(value) => update('state', value)} />,
    <div className="grid gap-4">
      <input type="range" min="100000" max="5000000" step="50000" value={form.value} onChange={(event) => update('value', Number(event.target.value))} />
      <input aria-label="Manual property value" type="number" min="100000" max="5000000" value={form.value} onChange={(event) => update('value', Number(event.target.value))} className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
      <p className="font-heading text-3xl text-rosegold">{form.value >= 5000000 ? '$5,000,000+' : formatMoney(form.value)}</p>
    </div>,
    <div className="grid gap-4">
      <input required placeholder="Name" value={form.name} onChange={(event) => update('name', event.target.value)} className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
      <input required placeholder="Email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
      <input required placeholder="Phone" value={form.phone} onChange={(event) => update('phone', event.target.value)} className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
      <input placeholder="Preferred callback time" value={form.time} onChange={(event) => update('time', event.target.value)} className="border border-rosegold-muted bg-dark px-4 py-3 text-cream" />
    </div>,
  ]

  if (done) {
    return (
      <div className="border border-rosegold-muted bg-dark-card p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-rosegold">Your estimate</p>
        <h2 className="mt-3 font-heading text-4xl text-cream">{formatMoney(range[0])} – {formatMoney(range[1])} incl. GST</h2>
        <p className="mt-4 text-cream/70">We'll confirm your exact fee within 2 business hours.</p>
      </div>
    )
  }

  return (
    <form action="https://formspree.io/f/XXXXXX" method="POST" onSubmit={(event) => event.preventDefault()} className="border border-rosegold-muted bg-dark-card p-6 sm:p-8">
      <div className="h-2 bg-dark-surface">
        <div className="h-full rose-gradient transition-all" style={{ width: `${((step + 1) / 4) * 100}%` }} />
      </div>
      <p className="mt-6 text-sm uppercase tracking-[0.18em] text-rosegold">Step {step + 1}/4</p>
      <h1 className="mt-2 font-heading text-3xl text-cream">{['Transaction type', 'State', 'Property value', 'Your details'][step]}</h1>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {screens[step]}
        </motion.div>
      </AnimatePresence>
      <div className="mt-8 flex justify-between gap-3">
        <button type="button" disabled={step === 0} onClick={() => setStep(step - 1)} className="border border-rosegold-muted px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-cream/70 disabled:opacity-35">
          Back
        </button>
        <button type="button" onClick={next} className="rose-gradient px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-dark">
          {step === 3 ? 'Show My Estimate' : 'Continue'}
        </button>
      </div>
    </form>
  )
}

function Choice({ items, value, onChange }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(([code, label]) => (
        <button key={code} type="button" onClick={() => onChange(code)} className={`border px-5 py-4 text-left font-semibold ${value === code ? 'rose-gradient border-transparent text-dark' : 'border-rosegold-muted text-cream/75 hover:text-rosegold'}`}>
          {label}
        </button>
      ))}
    </div>
  )
}
