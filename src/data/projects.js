export const projects = [
  {
    slug: 'Electra',
    title: 'Electra',
    category: 'Aerospace & Astronomical Sciences',
    image: '/images/electra.jpg.jpg',
    summary: 'A Low-Cost Parallel Scintllation Radiation Detection Device',
    description:
      'We are building a low-cost radiation detection device that can be used to detect and measure the amount of muons in the atmosphere across a high-altitude balloon flight. This project was funded and brought by the Maryland Space Grant Consortium and the UMD Space Systems Laboratory, under the mentorship and guidance of Dr. Mary Bowden. Read more about it in our paper published by the AIAA Journal.',
    caseStudyUrl:
      'https://docs.google.com/presentation/d/1s-ESR7TmmdB-nxvfRdwzJ50R6GkVbOUzY8FIC3eby7k/edit?usp=sharing',
    productUrl: 'https://arc.aiaa.org/',
    stats: [
      { value: '3hr', label: 'balloon flight' },
      { value: '2', label: 'parallel panels' },
      { value: '88%', label: 'data accuracy' }
    ],
  },
  {
    slug: 'Muse',
    title: 'Muse',
    category: 'Machine Learning & Web Development',
    image: '/images/muse.png',
    summary: 'Find some new artists to listen to using an AI music recommendation app!',
    description:
      'This is a new music recommendation app that uses an AI model to recommend niche artists to listen to based on your previous listening history and some questions regarding your preferences.',
    caseStudyUrl: 'https://www.google.com',
    productUrl: 'https://muse-ai-powered-recommendations.lovable.app',
    stats: [
      { value: 'AI', label: 'recommendations' },
      { value: 'Niche', label: 'artist discovery' },
      { value: 'Live', label: 'product demo' },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
