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
      className="min-h-[90vh] flex items-center overflow-visible"
    >
      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center grid-cols-1">
        <motion.figure
          className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 lg:order-2"
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

        <article className="space-y-8 lg:order-1">
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
            className="flex flex-wrap gap-3"
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

          <div className="h-px w-full bg-gradient-to-r from-transparent via-light/20 to-transparent my-8" />

          <div className="space-y-4">
            <p className="text-light/60 text-sm font-medium">
              Let&apos;s connect! Feel free to reach out for collaborations or just to say hello!
            </p>

            <motion.nav
              className="flex flex-col sm:flex-row gap-3 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              aria-label="Contact links"
            >
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 text-light bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-accent/30 hover:to-primary/30 rounded-full transition-all duration-300 border-2 border-accent/20 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(0,255,148,0.25)] hover:text-accent w-full sm:w-auto"
                  aria-label={`${name === 'Contact Me' ? 'Send email' : `${name} Profile`}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{name}</span>
                </a>
              ))}
            </motion.nav>
          </div>
        </article>
      </div>
    </Section>
  )
}