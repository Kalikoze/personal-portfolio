'use client'

import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiTool, FiBook } from 'react-icons/fi'

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-light/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">7+</div>
            <div className="text-light/60">Years of Experience</div>
          </div>
          <div className="bg-light/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">20+</div>
            <div className="text-light/60">Technologies Mastered</div>
          </div>
          <div className="bg-light/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-light/60">Web Applications Built</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-light/5 rounded-lg p-6 h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-display font-semibold text-light">
                  {category.title}
                </h3>
              </div>
              <p className="text-light/60 mb-6 text-sm">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: (categoryIndex * 0.1) + (index * 0.1)
                    }}
                    className={`px-2.5 py-1.5 rounded-full text-sm font-medium
                      ${category.title === 'Exploring Next'
                        ? 'bg-light/5 text-light/70 border border-light/20'
                        : 'bg-gradient-to-r from-primary to-accent text-dark font-semibold'
                      }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
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
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-light/80">Project-Driven Innovation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-light/80">Tech Conference Participation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-light/80">Industry Research & Trends</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  )
} 