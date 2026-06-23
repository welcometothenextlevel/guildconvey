import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

export default function ServiceCard({ service }) {
  const reduce = useReducedMotion()
  const Icon = service.icon
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      className="border border-rosegold-muted border-t-rosegold border-t-2 bg-dark-card p-6 transition hover:shadow-rosegold"
    >
      <Icon className="text-rosegold" size={34} strokeWidth={1.4} />
      <h3 className="mt-5 font-heading text-2xl text-cream">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-cream/70">{service.summary}</p>
      <ul className="mt-5 grid gap-2 text-sm text-cream/70">
        {service.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
      </ul>
      <Link to={service.path} className="mt-6 inline-flex text-sm font-bold text-rosegold hover:text-rosegold-light">
        Learn More →
      </Link>
    </motion.article>
  )
}
