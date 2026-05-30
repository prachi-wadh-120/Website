export const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    summary: 'Placeholder for a flagship product initiative.',
    description:
      'This is where your first case study will live—problem, approach, impact, and what you learned as the technical PM driving the work.',
    caseStudyUrl: 'https://www.google.com',
    productUrl: 'https://www.amazon.com',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    summary: 'Placeholder for a platform or internal tooling effort.',
    description:
      'Use this page for a platform, tooling, or infrastructure project. Highlight how you balanced user needs with engineering constraints.',
    caseStudyUrl: 'https://www.google.com',
    productUrl: 'https://www.amazon.com',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    summary: 'Placeholder for a cross-functional launch or experiment.',
    description:
      'Ideal for a launch, experiment, or 0→1 initiative. Add metrics, screenshots, and your role across product and engineering.',
    caseStudyUrl: 'https://www.google.com',
    productUrl: 'https://www.amazon.com',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
