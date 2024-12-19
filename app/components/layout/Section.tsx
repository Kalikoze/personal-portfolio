import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  title?: string
  description?: string
  dataCy?: string
  className?: string
  children: React.ReactNode
  backgroundElement?: React.ReactNode
  hideHeader?: boolean
}

export default function Section({
  id,
  title,
  description,
  dataCy,
  className = "",
  children,
  backgroundElement,
  hideHeader = false
}: SectionProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center ${className} py-16`}
      aria-labelledby={id}
      data-cy={dataCy}
    >
      {backgroundElement}
      <div className="relative max-w-6xl mx-auto px-4 w-full">
        {!hideHeader && title && (
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
            data-cy={`${id}`}
          >
            <h2
              id={id}
              className="text-4xl font-display font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-primary to-accent inline-block text-transparent bg-clip-text">
                {title}
              </span>
            </h2>
            {description && (
              <p 
                className="text-light/60 text-lg max-w-2xl"
                data-cy={`${id}-description`}
              >
                {description}
              </p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  )
} 