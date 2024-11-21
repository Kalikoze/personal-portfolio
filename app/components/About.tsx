'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section 
      className="min-h-screen py-20"
      aria-labelledby="about-heading"
      data-cy="about-section"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
          data-cy="about-header"
        >
          <h2 
            id="about-heading"
            data-cy="about-heading"
            className="text-4xl font-display font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <p data-cy="about-intro" className="text-light/60 text-lg max-w-2xl">
            With over 7 years in software development, I bring a unique blend of technical expertise,
            teaching experience, and a passion for creating inclusive tech spaces.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-cy="about-main"
          >
            <div className="bg-light/5 rounded-lg p-6 space-y-6">
              <p className="text-light/80">
                Currently leading engineering initiatives at Mind & Metrics Branding, I&apos;ve architected 
                and built multiple full-scale websites from the ground up. My focus has been on creating 
                scalable, high-performance solutions that significantly reduce client costs while maintaining 
                exceptional quality.
              </p>
              <p className="text-light/80">
                During my 6 years as a Senior Instructor at the Turing School of Software & Design, 
                I led development on hundreds of civic technology projects while mentoring diverse teams. 
                This experience honed my ability to architect solutions, provide thorough code reviews, 
                and guide technical decisions across complex projects.
              </p>
              <p className="text-light/80">
                My background as a violinist and audio engineer has instilled a deep appreciation for 
                precision and user experience. This unique perspective drives my passion for creating 
                exceptional digital solutions that prioritize both technical excellence and accessibility.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
            data-cy="about-sidebar"
          >
            <div data-cy="current-focus" className="bg-light/5 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-display font-semibold text-accent">
                Current Focus
              </h3>
              <ul className="space-y-2 text-light/70">
                <li>• Building modern web applications with Next.js & TypeScript</li>
                <li>• Optimizing SEO and site performance (90%+ scores)</li>
                <li>• Implementing comprehensive testing with Cypress</li>
                <li>• Creating accessible, WCAG-compliant interfaces</li>
              </ul>
            </div>

            <div data-cy="quick-facts" className="bg-light/5 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-display font-semibold text-accent">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-light/70">
                <li>• Reduced client development costs by over 75%</li>
                <li>• Led 100+ technical projects as instructor/developer</li>
                <li>• Built 5+ full-scale websites in 6 months</li>
                <li>• Mentored 200+ developers into tech careers</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}