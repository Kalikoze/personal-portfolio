import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/app/data/projects'

export default function ProjectCard({
  title,
  description,
  technologies,
  desktopImage,
  mobileImage,
  projectUrl,
  githubUrl
}: Project) {
  return (
    <motion.article 
      className="group bg-dark/40 backdrop-blur-sm rounded-xl overflow-hidden border border-light/10 hover:border-primary/50 transition-all duration-500 md:flex"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Device Preview Section */}
      <figure className="relative md:w-[45%] h-64 md:h-auto bg-dark/60 overflow-hidden p-4">
        {/* Desktop Preview */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-full flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative w-4/5 aspect-[16/9]">
            <Image
              src={desktopImage}
              alt={`${title} desktop view`}
              fill
              className="object-cover rounded-lg shadow-2xl"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
          </div>
        </motion.div>

        {/* Mobile Preview */}
        <motion.div 
          className="absolute right-8 bottom-0 w-20 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:-translate-y-4 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative aspect-[1/2]">
            <Image
              src={mobileImage}
              alt={`${title} mobile view`}
              fill
              className="object-cover rounded-lg shadow-2xl border-2 border-light/20"
              sizes="(max-width: 768px) 20vw, 10vw"
            />
          </div>
        </motion.div>
      </figure>
      
      {/* Content Section */}
      <section className="md:w-[55%] p-6 md:p-8 space-y-4 md:space-y-6">
        <h3 className="text-2xl font-display font-semibold text-accent/60 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-light/70 leading-relaxed">{description}</p>
        
        {/* Technologies */}
        <ul className="flex flex-wrap gap-2" role="list">
          {technologies.map((tech, index) => (
            <motion.li 
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1
              }}
              className="px-2.5 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-accent text-dark font-semibold"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
        
        <nav className="flex gap-6 pt-4">
          <motion.a 
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent/60 hover:text-accent transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="font-medium">View Project</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
          {githubUrl && (
            <motion.a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-light/60 hover:text-light transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="font-medium">GitHub</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          )}
        </nav>
      </section>
    </motion.article>
  )
} 