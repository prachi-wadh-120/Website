const variants = {
  primary:
    'bg-stone-900 text-white hover:bg-stone-800 focus-visible:ring-amber-600',
  secondary:
    'border border-stone-300 bg-white text-stone-800 hover:border-stone-400 hover:bg-stone-50 focus-visible:ring-amber-600',
}

export default function ExternalButton({
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
