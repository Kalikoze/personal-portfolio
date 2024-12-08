import React from 'react'
import Link from 'next/link'

export type CommandOutput = React.ReactNode

export const commands = {
  help: (): CommandOutput => (
    <div className="space-y-2">
      <p>Available commands:</p>
      <ul className="list-disc list-inside">
        <li>help - Show this help message</li>
        <li>clear - Clear the terminal</li>
        <li>hobbies - See what I do for fun</li>
        <li>resume - Download my resume</li>
        <li>contact - Get my contact information</li>
        <li><span className="text-primary/50">secret</span> - ???</li>
      </ul>
    </div>
  ),

  hobbies: (): CommandOutput => (
    <div className="space-y-2">
      <p>🎮 When I'm not coding, you can find me:</p>
      <ul className="list-disc list-inside">
        <li>Playing guitar (mostly blues and rock)</li>
        <li>Rock climbing at my local gym</li>
        <li>Reading sci-fi novels</li>
        <li>Experimenting with new coffee brewing methods</li>
      </ul>
      <p className="text-light/50 mt-2">Pro tip: Try typing &apos;secret&apos; for a surprise...</p>
    </div>
  ),

  resume: (): CommandOutput => {
    // Trigger resume download
    window.open('/assets/travis-rollins-resume.pdf', '_blank')
    return (
      <div className="space-y-2">
        <p>📄 Downloading resume...</p>
        <p className="text-light/50">If the download doesn't start automatically, <a href="/assets/travis-rollins-resume.pdf" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">click here</a>.</p>
      </div>
    )
  },

  contact: (): CommandOutput => (
    <div className="space-y-2">
      <p>📫 Let's connect!</p>
      <p>Email: <a href="mailto:kalikoze@gmail.com" className="text-accent hover:underline">kalikoze@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/travisrollins/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/travisrollins</a></p>
      <p>GitHub: <a href="https://github.com/kalikoze" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">github.com/kalikoze</a></p>
    </div>
  ),

  clear: (): CommandOutput => 'Clearing terminal...',

  // Hidden commands
  secret: (): CommandOutput => (
    <div className="space-y-2">
      <p className="text-accent">🎮 You've discovered my coding playlist!</p>
      <p>Type 'music' to start the lo-fi beats...</p>
    </div>
  ),

  music: (): CommandOutput => (
    <div className="space-y-2">
      <p>Now playing: Lo-fi Coding Beats 🎧</p>
      <iframe
        src="[your-spotify-playlist-embed]"
        className="w-full h-20"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media"
      />
    </div>
  ),
}

export const processCommand = (input: string): CommandOutput => {
  const cmd = input.toLowerCase().trim()

  if (cmd in commands) {
    return commands[cmd as keyof typeof commands]()
  }

  return `Command not found: ${input}. Type 'help' for available commands.`
} 