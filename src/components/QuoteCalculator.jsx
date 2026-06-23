import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { formatMoney, getFeeRange, transactionLabels } from '../data/pricing.js'
import { trackCta, trackEvent } from '../utils/analytics.js'
import QuoteModal from './QuoteModal.jsx'

const types = ['buying', 'selling', 'transferring', 'contractReview']
const states = [['VIC', 'Victoria'], ['SA', 'South Australia'], ['QLD', 'Queensland']]

export default function QuoteCalculator({ compact = false }) {
  const [type, setType] = useState('buying')
  const [state, setState] = useState('VIC')
  const [value, setValue] = useState(850000)
  const [modal, setModal] = useState(false)
  const [started, setStarted] = useState(false)
  const reduce = useReducedMotion()
  const range = getFeeRange(type, state)
  const estimate = useMemo(() => `${formatMoney(range[0])} – ${formatMoney(range[1])} incl. GST`, [range])

  function choose(next) {
    if (!started) {
      trackEvent('quote_start', { source: compact ? 'page' : 'homepage' })
      setStarted(true)
    }
    next()
  }

  return (
    <div className="border border-rosegold-muted bg-dark-card p-5 shadow-2xl sm:p-8">
      <div className="grid gap-8">
        <fieldset>
          <legend className="font-heading text-xl text-cream">Step 1 — Transaction type</legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {types.map((item) => (
              <button key={item} type="button" onClick={() => choose(() => setType(item))} className={`border px-4 py-2 text-sm font-semibold ${type === item ? 'rose-gradient border-transparent text-dark' : 'border-rosegold-muted text-cream/75 hover:text-rosegold'}`}>
                {transactionLabels[item]}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-heading text-xl text-cream">Step 2 — State</legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {states.map(([code, label]) => (
              <button key={code} type="button" onClick={() => choose(() => setState(code))} className={`border px-4 py-2 text-sm font-semibold ${state === code ? 'rose-gradient border-transparent text-dark' : 'border-rosegold-muted text-cream/75 hover:text-rosegold'}`}>
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-heading text-xl text-cream">Step 3 — Property Value</legend>
          <div className="mt-4 flex flex-col gap-3">
            <input aria-label="Property value" type="range" min="100000" max="5000000" step="50000" value={value} onChange={(event) => choose(() => setValue(Number(event.target.value)))} accentColor="#B08D7A" />
            <div className="text-2xl font-bold text-rosegold">{value >= 5000000 ? '$5,000,000+' : formatMoney(value)}</div>
          </div>
        </fieldset>
        <motion.div
          key={`${type}-${state}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-rosegold-muted bg-dark-surface p-5"
        >
          <p className="text-sm uppercase tracking-[0.18em] text-cream/55">Estimated conveyancing fee</p>
          <p className="mt-2 font-heading text-3xl text-cream">{estimate}</p>
          <button
            type="button"
            onClick={() => {
              trackCta('Get exact quote by email')
              setModal(true)
            }}
            className="rose-gradient mt-5 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-dark"
          >
            Get Exact Quote By Email
          </button>
        </motion.div>
      </div>
      <QuoteModal open={modal} onClose={() => setModal(false)} estimate={estimate} />
    </div>
  )
}
