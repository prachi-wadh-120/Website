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
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-sm"
            />
          ) : (
            <div
              className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-stone-300 bg-white/70 p-6 text-center shadow-sm"
              aria-label="Project image placeholder"
            >
              <p className="text-sm font-medium text-stone-500">Project image goes here</p>
            </div>
          )}

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
