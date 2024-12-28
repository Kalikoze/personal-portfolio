'use client'

import { motion } from 'framer-motion'
import Section from '@/app/components/layout/Section'
import AboutInfoSection from './AboutInfoSection'
import { aboutParagraphs, currentFocusItems, quickFactsItems } from '@/app/data/about'

export default function About() {
  return (
    <Section
      id="about"
      title="About Me"
      description="With over 7 years in software development, I bring a unique blend of technical expertise,
                  teaching experience, and a passion for creating inclusive tech spaces."
      dataCy="about-section"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-cy="about-main"
          className="bg-light/5 rounded-lg shadow-lg p-6 space-y-6"
        >
          {aboutParagraphs.map((paragraph, index) => (
            <p key={index} className="text-light/80" data-cy={index === 0 ? "about-intro" : undefined}>
              {paragraph}
            </p>
          ))}
        </motion.article>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-6 h-full"
          data-cy="about-sidebar"
          aria-label="Additional information"
        >
          <AboutInfoSection
            id="current-focus"
            title="Current Focus"
            items={currentFocusItems}
          />
          <AboutInfoSection
            id="quick-facts"
            title="Quick Facts"
            items={quickFactsItems}
          />
        </motion.section>
      </div>
    </Section>
  )
}