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
      'https://arc.aiaa.org/doi/abs/10.2514/6.2026-115206',
    productUrl: 'https://arc.aiaa.org/doi/abs/10.2514/6.2026-115206',
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
  {
    slug: 'Lumos',
    title: 'Lumos',
    category: 'Machine Learning & Web Development',
    image: '/images/lumosHomepage.png',
    summary: 'Use this app for more interactive journalling!',
    description:
      'This app is meant to provide a more interactive form of journalling, where an AI agent will respond to your journals with questions meant for deeper reflection.',
    caseStudyUrl: 'https://www.figma.com/proto/E5k6pb8SAlM9TZDkj8p8Sk/Lumos-Design?node-id=0-1&t=hjsh1mykE8KFRTto-1',
    productUrl: '',
    stats: [
      { value: 'Gen-Z', label: 'Journalling' },
      { value: '2', label: 'Ways to Write' },
      { value: 'RAG', label: 'Integration' },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
