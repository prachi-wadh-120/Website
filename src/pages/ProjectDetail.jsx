import { Link, Navigate, useParams } from 'react-router-dom'
import ExternalButton from '../components/ExternalButton'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="flex h-full flex-col justify-center px-6 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-stone-500 transition hover:text-stone-900"
        >
          ← Back to projects
        </Link>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-stone-300 bg-white/70 p-6 text-center shadow-sm"
            aria-label="Project image placeholder"
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
              Project image goes here
            </p>
            <p className="mt-1 text-xs text-stone-400">
              Replace this block when ready
            </p>
          </div>

          <div>
            <h1 className="font-display text-4xl tracking-tight text-stone-900 sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ExternalButton href={project.caseStudyUrl}>
                Case study
              </ExternalButton>
              <ExternalButton href={project.productUrl} variant="secondary">
                {project.title}
              </ExternalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
