'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from '@/app/components/layout/Section'
import { processCommand } from './commands'

type Command = {
  input: string
  output: React.ReactNode
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [showInitialMessage, setShowInitialMessage] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    const output = processCommand(currentInput)

    if (currentInput.toLowerCase().trim() === 'clear') {
      setCommands([])
      setShowInitialMessage(true)
    } else {
      const newCommand: Command = {
        input: currentInput,
        output
      }
      setCommands(prev => [...prev, newCommand])
    }

    setCurrentInput('')
  }

  return (
    <Section
      id="terminal"
      dataCy="terminal-section"
      title="Terminal"
      description="Thanks for making it this far! Try out my interactive terminal to discover more about me."
      className="py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full"
        onClick={handleTerminalClick}
      >
        {/* Terminal Window Chrome */}
        <div className="bg-dark/50 backdrop-blur-xl rounded-lg shadow-2xl border border-light/10 pointer-events-auto">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 p-3 border-b border-light/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <div className="w-3 h-3 rounded-full bg-accent/80" />
            </div>
            <div className="text-light/50 text-sm font-mono ml-2">visitor@travis-portfolio:~$</div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            data-cy="terminal-body"
            className="h-[400px] overflow-y-auto p-4 font-mono text-sm space-y-4"
          >
            {/* Welcome Message */}
            {showInitialMessage && (
              <motion.div
                data-cy="terminal-welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-light/90 space-y-2"
              >
                <p className="text-accent">Welcome to Travis&apos;s Interactive Terminal! 🚀</p>
                <p className="text-light/70">Type &apos;help&apos; to see available commands.</p>
              </motion.div>
            )}

            {/* Command History */}
            {commands.map((cmd, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-light/90">{cmd.input}</span>
                </div>
                <div className="text-light/70 ml-6">{cmd.output}</div>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <input
                ref={inputRef}
                data-cy="terminal-input"
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-light/90 placeholder-light/30"
                placeholder="Type a command..."
                spellCheck="false"
                autoComplete="off"
              />
            </form>
          </div>
        </div>

        {/* Decorative gradient that ignores pointer events */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 pointer-events-none" />
      </motion.div>
    </Section>
  )
} 