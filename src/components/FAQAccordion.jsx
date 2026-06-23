import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()
  return (
    <div className="grid gap-3">
      {items.map(([question, answer], index) => (
        <article key={question} className="border border-rosegold-muted bg-dark-card">
          <button
            className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left font-semibold text-cream"
            onClick={() => setOpen(open === index ? -1 : index)}
            aria-expanded={open === index}
          >
            {question}
            <ChevronDown className={`shrink-0 text-rosegold transition ${open === index ? 'rotate-180' : ''}`} size={20} />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="border-t border-rosegold-muted px-5 py-4 text-sm leading-7 text-cream/70">{answer}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </article>
      ))}
    </div>
  )
}
