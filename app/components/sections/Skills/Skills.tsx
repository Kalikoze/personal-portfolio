'use client'

import { motion } from 'framer-motion'
import SkillCategory from '@/app/components/sections/Skills/SkillCategory'
import SkillStats from '@/app/components/sections/Skills/SkillStats'
import Section from '@/app/components/layout/Section'
import GradientBackground from '@/app/components/ui/GradientBackground'
import { skillCategories, learningApproachItems } from '@/app/data/skills'

export default function Skills() {
  return (
    <Section
      id="skills-heading"
      title="Technical Expertise"
      description="A comprehensive overview of my technical skills and areas of expertise,
                  along with emerging technologies I'm exploring."
      dataCy="skills-section"
      backgroundElement={<GradientBackground />}
    >
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
    </Section>
  );
} 