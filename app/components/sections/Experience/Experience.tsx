'use client'

import { motion } from 'framer-motion'
import Section from '@/app/components/layout/Section'
import { experiences, type Experience } from '@/app/data/experience'

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      description="A journey through my professional career, showcasing my growth and contributions in the tech industry."
      dataCy="experience-section"
    >
      <div className="space-y-12">
        {experiences.map((experience: Experience, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-light/5 p-6 rounded-lg shadow-lg"
            data-cy={`job-position-${index}`}
          >
            <h3 className="text-2xl font-display font-semibold text-accent">
              {experience.title}
            </h3>
            <p className="text-light/70">{experience.company} | {experience.location}</p>
            <p className="text-light/50 text-sm">{experience.date}</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              {experience.details.map((detail: string, i: number) => (
                <li key={i} className="text-light/80">{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
} 