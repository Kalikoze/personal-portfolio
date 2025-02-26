import { FiCode, FiDatabase, FiTool, FiBook } from 'react-icons/fi'

export const skillCategories = [
  {
    title: 'Core Technologies',
    icon: FiCode,
    description: 'Primary technologies I use daily to build modern web applications',
    skills: [
      'Next.js',
      'React',
      'Redux',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'PostgreSQL',
      'Prisma',
      'Supabase',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: FiTool,
    description: 'Tools and platforms I leverage for efficient development and deployment',
    skills: [
      'Git/GitHub',
      'Vercel',
      'CircleCI',
      'Cloudinary',
      'SendGrid',
      'NextAuth.js',
      'Google Analytics',
      'SEMRush',
    ],
  },
  {
    title: 'Testing & Quality',
    icon: FiDatabase,
    description: 'Technologies I use to ensure code quality and accessibility',
    skills: [
      'Cypress',
      'ESLint',
      'Mocha/Chai',
      'LightHouse',
      'aXe',
    ],
  },
  {
    title: 'Exploring Next',
    icon: FiBook,
    description: 'Technologies I\'m actively learning and experimenting with',
    skills: [
      'TensorFlow',
      'Stripe',
      'Resend',
      'Sanity',
      'tRPC',
      'Docker',
    ],
  },
] as const

export const learningApproachItems = [
  { text: 'Project-Driven Innovation', color: 'bg-primary' },
  { text: 'Tech Conference Participation', color: 'bg-accent' },
  { text: 'Industry Research & Trends', color: 'bg-secondary' }
] as const 