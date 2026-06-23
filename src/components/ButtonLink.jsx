import { Link } from 'react-router-dom'
import { trackCta } from '../utils/analytics.js'

export default function ButtonLink({ to, children, variant = 'primary', className = '', onClick }) {
  const base = 'inline-flex items-center justify-center border px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition'
  const styles =
    variant === 'primary'
      ? 'rose-gradient border-transparent text-dark hover:shadow-rosegold'
      : 'border-rosegold text-rosegold hover:bg-rosegold-muted hover:shadow-rosegold'

  return (
    <Link
      to={to}
      onClick={(event) => {
        trackCta(String(children))
        onClick?.(event)
      }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  )
}
