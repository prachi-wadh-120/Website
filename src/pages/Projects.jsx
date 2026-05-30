import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
          Selected work
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-stone-900 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-stone-600">
          Choose a project to open its dedicated page.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              <span className="font-display text-4xl text-stone-200 transition group-hover:text-amber-800/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-stone-900">
                {project.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {project.summary}
              </p>
              <span className="mt-5 text-sm font-medium text-stone-900 transition group-hover:text-amber-900">
                Open project →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
