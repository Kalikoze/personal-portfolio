'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import ParticlesBackground from './ParticlesBackground'
import Section from '@/app/components/layout/Section'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Kalikoze',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/travisrollins/',
    icon: FiLinkedin,
  },
] as const;

export default function Hero() {
  const backgroundElement = (
    <>
      <ParticlesBackground />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );

  return (
    <Section
      id="hero-heading"
      className="flex items-center py-0"
      hideHeader
      backgroundElement={backgroundElement}
    >
      <article className="space-y-6">
        <header className="space-y-6">
          <motion.p 
            data-cy="greeting"
            className="text-accent font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi there, I&apos;m
          </motion.p>
          
          <motion.h1 
            id="hero-heading"
            data-cy="name"
            className="font-display text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary inline-block text-transparent bg-clip-text">
              Travis Rollins
            </span>
          </motion.h1>
          
          <motion.h2 
            data-cy="title"
            className="text-3xl text-light/80 font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer & Engineering Lead
          </motion.h2>
        </header>

        <motion.p 
          data-cy="hero-description"
          className="max-w-xl text-light/60 text-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Specializing in modern web development with Next.js, React, and Tailwind CSS. 
          Currently leading engineering initiatives at a startup, building scalable solutions 
          from the ground up.
        </motion.p>
        
        <motion.ul 
          data-cy="tech-stack"
          className="flex flex-wrap gap-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          aria-label="Technical skills"
        >
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'CircleCI'].map((tech) => (
            <li key={tech} className="px-3 py-1 text-sm bg-light/10 rounded-full text-light/70">
              {tech}
            </li>
          ))}
        </motion.ul>

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
    </Section>
  )
}