import { motion, useReducedMotion } from 'framer-motion'

const items = ['⚡ PEXA Certified', '🏅 AIC Member', '⭐ 5-Star Google Rated', '💰 Fixed Fee Guarantee', '📱 100% Online — No Office Visit']

export default function TrustBar() {
  const reduce = useReducedMotion()
  return (
    <motion.section
      className="section-rule bg-dark-surface"
      initial={reduce ? false : 'hidden'}
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      <div className="mx-auto grid max-w-7xl gap-px px-4 py-5 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {items.map((item) => (
          <motion.div
            key={item}
            variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}
            className="border-rosegold-muted py-3 text-center text-sm font-semibold text-cream/85 lg:border-r last:lg:border-r-0"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
