export const projects = [
  {
    slug: 'SSL Project - Electra',
    title: 'SSL Project - Electra',
    summary: 'Our Low-Cost Parallel Scintllation Radiation Detection Device',
    description:
      "We are building a low-cost radiation detection device that can be used to detect and measure the amount of muons in the atmosphere across a 2-hour high-altitude balloon flight. " +
      "As head software developer, I developed the algorithm that would run the electronics via C, and co-developed the LLM models in Python to identify trends and anomalies in 1M+ telmetry data points. " +
      "As the main product owner, I used Agile methodology to align 6-person engineering team with grant stakeholder expectations, and managed all dependencies and handoffs end-to-end by writing documentation. " + 
      "This project was funded and brought by the Maryland Space Grant Consortium and the UMD Space Systems Laboratory, under the mentorship and guidance of Dr. Mary Bowden. Read more about it in our paper published by the AIAA Journal.",
    caseStudyUrl: 'https://docs.google.com/presentation/d/1s-ESR7TmmdB-nxvfRdwzJ50R6GkVbOUzY8FIC3eby7k/edit?usp=sharing',
    productUrl: 'https://arc.aiaa.org/',
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
