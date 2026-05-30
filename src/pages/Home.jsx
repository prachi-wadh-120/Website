import NavButton from '../components/NavButton'

export default function Home() {
  return (
    <div className="relative flex h-full items-center overflow-hidden px-6 sm:px-10 lg:px-16">
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-stone-300/30 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="flex aspect-square w-full max-w-md flex-col items-center justify-center rounded-3xl border-2 border-dashed border-stone-300 bg-white/70 p-6 text-center shadow-sm lg:max-w-none"
            aria-label="Photo placeholder"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-stone-100 text-stone-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="mt-4 text-sm font-medium text-stone-500">
              Your photo goes here
            </p>
            <p className="mt-1 text-xs text-stone-400">
              Replace this block when ready
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
              About me
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Technical PM bridging{' '}
              <span className="italic text-amber-900">product</span> and{' '}
              <span className="italic text-amber-900">engineering</span>
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              <p>
                I sit at the intersection of product and engineering—translating
                user needs into actionable backlogs while keeping architecture,
                scalability, and delivery constraints in view from day one.
              </p>
              <p>
                My background spans roadmap ownership, cross-functional
                leadership, and hands-on collaboration with engineering on
                specs, spikes, and launch readiness.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <NavButton to="/projects">View projects →</NavButton>
        </div>
      </div>
    </div>
  )
}
