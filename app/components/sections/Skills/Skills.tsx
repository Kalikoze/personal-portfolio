'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiBook } from 'react-icons/fi'
import SkillCategory from '@/app/components/sections/Skills/SkillCategory'
import SkillStats from '@/app/components/sections/Skills/SkillStats'

const skillCategories = [
  {
    title: 'Core Technologies',
    icon: FiCode,
    description: 'Primary technologies I use daily to build modern web applications',
    skills: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: FiTool,
    description: 'Tools and platforms I leverage for efficient development and deployment',
    skills: [
      'Git/GitHub',
      'CircleCI',
      'Vercel',
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
      'LightHouse',
      'aXe',
      'Mocha/Chai',
      'ESLint',
    ],
  },
  {
    title: 'Exploring Next',
    icon: FiBook,
    description: 'Technologies I\'m actively learning and experimenting with',
    skills: [
      'NextAuth.js',
      'Stripe',
      'Docker',
      'TensorFlow.js',
      'GraphQL',
    ],
  },
] as const

const learningApproachItems = [
  { text: 'Project-Driven Innovation', color: 'bg-primary' },
  { text: 'Tech Conference Participation', color: 'bg-accent' },
  { text: 'Industry Research & Trends', color: 'bg-secondary' }
] as const;

export default function Skills() {
  return (
    <section
      className="relative min-h-screen py-20"
      aria-labelledby="skills-heading"
      data-cy="skills-section"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 w-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2
            id="skills-heading"
            className="text-4xl font-display font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text">
              Technical Expertise
            </span>
          </h2>
          <p className="text-light/60 text-lg max-w-2xl">
            A comprehensive overview of my technical skills and areas of expertise,
            along with emerging technologies I'm exploring.
          </p>
        </motion.header>

        <SkillStats />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              {...category}
              categoryIndex={index}
              isExploring={category.title === 'Exploring Next'}
            />
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-light/5 rounded-lg p-6 md:col-span-2"
        >
          <h3 className="text-xl font-display font-semibold text-accent mb-4">
            Continuous Learning Approach
          </h3>
          <p className="text-light/60 mb-4">
            As the sole developer at a B2B digital solutions agency, I constantly adapt to diverse client needs
            by exploring and implementing new technologies. Each project presents unique challenges,
            from e-commerce solutions to custom CMS integrations, driving continuous learning and innovation.
          </p>
          <ul className="flex flex-wrap gap-4" role="list">
            {learningApproachItems.map(({ text, color }) => (
              <li key={text} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${color}`}></span>
                <span className="text-light/80">{text}</span>
              </li>
            ))}
          </ul>
        </motion.footer>
      </div>
    </section>
  )
} 