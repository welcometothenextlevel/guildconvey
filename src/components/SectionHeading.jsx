import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, text, centre = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.35 }}
      className={centre ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.22em] text-rosegold">{eyebrow}</p> : null}
      <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-cream/70">{text}</p> : null}
    </motion.div>
  )
}
