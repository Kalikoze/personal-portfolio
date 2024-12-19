'use client'

import { motion } from 'framer-motion'
import ParticlesBackground from './ParticlesBackground'
import GradientBackground from '@/app/components/ui/GradientBackground'
import Section from '@/app/components/layout/Section'
import { socialLinks } from '@/app/data/social'
import Image from 'next/image'
import TravisPhoto from '@/public/assets/travis-photo.jpg'

export default function Hero() {
  const backgroundElement = (
    <>
      <ParticlesBackground />
      <GradientBackground />
    </>
  );

  return (
    <Section
      id="hero-heading"
      hideHeader
      backgroundElement={backgroundElement}
      className="min-h-[90vh] flex items-center"
    >
      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center">
        <article className="space-y-8">
          <header className="space-y-6">
            <motion.p
              data-cy="greeting"
              className="text-accent font-medium tracking-widest uppercase text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi there, I&apos;m
            </motion.p>

            <motion.h1
              id="hero-heading"
              data-cy="name"
              className="font-display text-6xl lg:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-secondary inline-block text-transparent bg-clip-text animate-gradient-x">
                Travis Rollins
              </span>
            </motion.h1>

            <motion.h2
              data-cy="title"
              className="text-2xl lg:text-4xl text-light/90 font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Senior Software Engineer
            </motion.h2>
          </header>

          <motion.p
            data-cy="hero-description"
            className="max-w-xl text-light/70 text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            From complex ideas to elegant web solutions, I craft lightning-fast, 
            accessible applications that users love and businesses rely on. As a former 
            musician, I bring a unique harmony to every line of code.
          </motion.p>

          <ul
            data-cy="tech-stack"
            className="flex flex-wrap gap-3 mt-8"
            aria-label="Technical skills"
          >
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'CircleCI'].map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8 + (index * 0.1)
                }}
                className="px-4 py-2 text-sm bg-light/5 backdrop-blur-sm rounded-full text-light/70 font-semibold border border-light/20"
              >
                {tech}
              </motion.li>
            ))}
          </ul>

          <motion.nav
            className="flex gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            aria-label="Social links"
          >
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light/60 hover:text-accent transition-colors duration-300"
                aria-label={`${name} Profile`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </motion.nav>
        </article>

        <motion.figure
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 rounded-2xl -rotate-3 scale-105 blur-lg" />
          <Image
            src={TravisPhoto}
            alt="Travis Rollins"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent rounded-2xl" />
        </motion.figure>
      </div>
    </Section>
  )
}