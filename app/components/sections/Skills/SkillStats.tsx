import { motion } from 'framer-motion'

type StatProps = {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <article className="bg-light/5 rounded-lg p-6 text-center">
      <strong className="text-3xl font-bold text-accent mb-2 block">{value}</strong>
      <span className="text-light/60">{label}</span>
    </article>
  )
}

export default function SkillStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
    >
      <Stat value="7+" label="Years of Experience" />
      <Stat value="20+" label="Technologies Mastered" />
      <Stat value="50+" label="Web Applications Built" />
    </motion.div>
  )
} 