import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="h-full overflow-y-auto px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#985f6f]">
          Selected work
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-stone-900 sm:text-5xl">
          Projects
        </h1>
        <p className="mt-3 max-w-xl text-stone-600">
          Case studies, builds, and experiments across hardware and software.
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="grid items-center gap-10 rounded-3xl bg-stone-200/40 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:p-12"
            >
              <div className="flex flex-col">
                {project.category && (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                    {project.category}
                  </p>
                )}
                <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight text-stone-900 sm:text-[2.25rem]">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-stone-600 sm:text-base">
                  {project.description ?? project.summary}
                </p>

                {(project.caseStudyUrl || (project.slug === 'Muse' && project.productUrl)) && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.caseStudyUrl && (
                      <a
                        href={project.caseStudyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-sm font-medium text-stone-900 underline-offset-4 transition hover:text-amber-900 hover:underline"
                      >
                        View full case study →
                      </a>
                    )}
                    {project.slug === 'Muse' && project.productUrl && (
                      <a
                        href={project.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-sm font-medium text-stone-900 underline-offset-4 transition hover:text-amber-900 hover:underline"
                      >
                        Explore product →
                      </a>
                    )}
                  </div>
                )}

                {project.stats?.length > 0 && (
                  <>
                    <hr className="mt-3 border-stone-300/60" />
                    <div className="mt-6 grid grid-cols-3 gap-4 sm:gap-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-display text-2xl tracking-tight text-stone-900 sm:text-3xl">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-stone-500">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-center lg:justify-end">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="aspect-[4/3] w-full max-w-xl rounded-2xl bg-white object-cover object-top shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)]"
                  />
                ) : (
                  <div
                    className="aspect-[4/3] w-full max-w-xl rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)]"
                    aria-hidden
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
