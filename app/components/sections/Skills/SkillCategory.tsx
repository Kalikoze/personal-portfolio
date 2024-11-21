import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

type SkillCategoryProps = {
  title: string
  description: string
  skills: readonly string[]
  icon: IconType
  isExploring?: boolean
  categoryIndex: number
}

export default function SkillCategory({ 
  title, 
  description, 
  skills, 
  icon: Icon,
  isExploring,
  categoryIndex 
}: SkillCategoryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
      className="bg-light/5 rounded-lg p-6 h-full"
    >
      <header className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-display font-semibold text-light">
          {title}
        </h3>
      </header>
      <p className="text-light/60 mb-6 text-sm">
        {description}
      </p>
      <ul className="flex flex-wrap gap-2" role="list">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: (categoryIndex * 0.1) + (index * 0.1)
            }}
            className={`px-2.5 py-1.5 rounded-full text-sm font-medium
              ${isExploring
                ? 'bg-light/5 text-light/70 border border-light/20'
                : 'bg-gradient-to-r from-primary to-accent text-dark font-semibold'
              }`}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  )
} 