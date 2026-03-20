export type Experience = {
  title: string
  company: string
  location: string
  date: string
  details: string[]
}

export const experiences: readonly Experience[] = [
  {
    title: 'Senior Web Developer',
    company: 'Milan Laser Hair Removal',
    location: 'Omaha, NE',
    date: 'April 2025 - Present',
    details: [
      'Architected a React/TypeScript component library of 35+ reusable sections integrated with Builder.io across multiple marketing sites.',
      'Contributed 528 commits while maintaining full test coverage for carousels, quizzes, countdown timers, and other complex interactions.',
      'Documented every component in Storybook with built-in accessibility patterns including ARIA live regions and semantic heading hierarchy.',
      'Built a full-stack influencer management system in ~5 weeks with dual-layer auth, Swagger docs, and automated Netlify webhook triggers.',
      'Consolidated three sites into a Turborepo monorepo with twelve scoped packages replacing two legacy Gatsby codebases.',
      'Led AI adoption across the team, establishing workflows for PRs, code review, and JIRA ticketing using sub-agents and MCP servers.',
    ],
  },
  {
    title: 'Web Developer & Designer',
    company: 'Mind & Metrics Branding',
    location: 'Blair, NE',
    date: 'June 2024 - January 2025',
    details: [
      'Built and modernized five full-scale websites for clients in industrial services.',
      'Achieved a drastic reduction in client costs, providing custom, high-quality solutions.',
      'Achieved significant improvements in SEO and site health, reaching 90%+ scores.',
      'Ensured full accessibility compliance through comprehensive end-to-end testing.',
    ],
  },
  {
    title: 'Senior Instructor',
    company: 'Turing School of Software & Design',
    location: 'Remote',
    date: 'June 2018 - June 2024',
    details: [
      'Redesigned curriculum leading to over 2x faster graduate hiring rates.',
      'Introduced new technologies like Cypress and TypeScript.',
      'Led agile development on hundreds of micro applications.',
      'Piloted projects to track student trends and improve remote instruction.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Spruce Labs, Inc.',
    location: 'Denver, CO',
    date: 'January 2018 - June 2018',
    details: [
      'Contributed to the building and scaling of an open-source JavaScript library.',
      'Implemented AWS S3 storage solutions and resolved cross-browser compatibility issues.',
      'Customized user role permissions and participated in agile sprints and product demonstrations.',
    ],
  },
] as const; 