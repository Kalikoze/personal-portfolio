export type Experience = {
  title: string
  company: string
  location: string
  date: string
  details: string[]
}

export const experiences: readonly Experience[] = [
  {
    title: 'Web Developer & Designer',
    company: 'Mind & Metrics Branding',
    location: 'Blair, NE',
    date: 'June 2024 - Present',
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