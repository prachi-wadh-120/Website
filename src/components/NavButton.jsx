import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-stone-900 text-white hover:bg-stone-800 focus-visible:ring-amber-600',
  secondary:
    'border border-stone-300 bg-white/60 text-stone-800 backdrop-blur hover:border-stone-400 hover:bg-white focus-visible:ring-amber-600',
  ghost:
    'text-stone-600 hover:bg-stone-100 hover:text-stone-900 focus-visible:ring-amber-600',
}

export default function NavButton({
  to,
  children,
  variant = 'primary',
  className = '',
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
