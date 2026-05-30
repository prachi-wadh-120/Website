import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
]

export default function Header() {
  return (
    <header className="shrink-0 border-b border-stone-200/80 bg-stone-50/80 px-6 py-4 backdrop-blur-md sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <NavLink
          to="/"
          className="group transition hover:text-amber-900"
        >
          <span className="block font-display text-xl leading-tight text-stone-900 group-hover:text-amber-900">
            Prachi Wadhwani
          </span>
          <span className="mt-0.5 block text-xs font-medium tracking-wide text-stone-500 group-hover:text-amber-800">
            Technical Product Owner
          </span>
        </NavLink>
        <ul className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
