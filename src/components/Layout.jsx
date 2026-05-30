import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex h-screen flex-col overflow-hidden font-sans">
      <Header />
      <main className="relative flex-1 overflow-hidden">
        <div
          key={location.pathname}
          className="page-enter h-full"
        >
          <Outlet />
        </div>
      </main>
    </div>
  )
}
