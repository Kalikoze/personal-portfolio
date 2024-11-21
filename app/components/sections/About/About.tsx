'use client'

import { motion } from 'framer-motion'
import Section from '@/app/components/layout/Section'
import AboutSidebarSection from './AboutSidebarSection'
import { aboutParagraphs, currentFocusItems, quickFactsItems } from '@/app/data/about'

export default function About() {
  return (
    <Section
      id="about-heading"
      title="About Me"
      description="With over 7 years in software development, I bring a unique blend of technical expertise,
                  teaching experience, and a passion for creating inclusive tech spaces."
      data-cy="about-section"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-cy="about-main"
          className="bg-light/5 rounded-lg p-6 space-y-6"
        >
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-light/80">
              {paragraph}
            </p>
          ))}
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
          data-cy="about-sidebar"
        >
          <AboutSidebarSection
            id="current-focus"
            title="Current Focus"
            items={currentFocusItems}
          />
          <AboutSidebarSection
            id="quick-facts"
            title="Quick Facts"
            items={quickFactsItems}
          />
        </motion.aside>
      </div>
    </Section>
  )
}