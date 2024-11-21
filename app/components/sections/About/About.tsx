'use client'

import { motion } from 'framer-motion'
import Section from '@/app/components/layout/Section'
import AboutSidebarSection from './AboutSidebarSection'

const currentFocusItems = [
  'Building modern web applications with Next.js & TypeScript',
  'Optimizing SEO and site performance (90%+ scores)',
  'Implementing comprehensive testing with Cypress',
  'Creating accessible, WCAG-compliant interfaces'
] as const;

const quickFactsItems = [
  'Reduced client development costs by over 75%',
  'Led 100+ technical projects as instructor/developer',
  'Built 5+ full-scale websites in 6 months',
  'Mentored 200+ developers into tech careers'
] as const;

const aboutParagraphs = [
  `Currently leading engineering initiatives at Mind & Metrics Branding, I've architected 
   and built multiple full-scale websites from the ground up. My focus has been on creating 
   scalable, high-performance solutions that significantly reduce client costs while maintaining 
   exceptional quality.`,
  `During my 6 years as a Senior Instructor at the Turing School of Software & Design, 
   I led development on hundreds of civic technology projects while mentoring diverse teams. 
   This experience honed my ability to architect solutions, provide thorough code reviews, 
   and guide technical decisions across complex projects.`,
  `My background as a violinist and audio engineer has instilled a deep appreciation for 
   precision and user experience. This unique perspective drives my passion for creating 
   exceptional digital solutions that prioritize both technical excellence and accessibility.`
] as const;

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