'use client'

import { motion } from 'framer-motion'

type GradientBackgroundProps = {
  className?: string
}

export default function GradientBackground({ className = "" }: GradientBackgroundProps) {
  return (
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl ${className}`}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
} 