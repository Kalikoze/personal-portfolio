import React from 'react'
import Link from 'next/link'

export type CommandOutput = React.ReactNode

const triviaFacts = [
  "My cat, Loki, loves to 'help' me code by walking across my keyboard. 😸",
  "I performed at Red Rocks Amphitheatre with the Colorado Symphony! 🎵",
  "The San Diego Zoo is my favorite zoo I've visited - their conservation work is amazing! 🦁",
  "I've lived in 7 different states (KS, IL, PA, OH, CO, CA, NE) - who knows where I'll end up next! 🗺️",
  "During my college years, I was a rapper and even produced a mixtape! 🎤",
  "I built a web app that lets you create hip hop beats with samples, effects, and mixing controls - just like a real sampler! 🎹",
  "One of my favorite places is the Wild Animal Sanctuary in Keenesburg, CO - they rescue and rehabilitate all types of lions, tigers, and bears! 🐯",
  "I've had the joy of teaching coding to students from all walks of life - from veterans to healthcare workers and more! 📚",
];

const programmingJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🪲",
  "What's a programmer's favorite hangout spot? The Foo Bar! 🍺",
  "Why did the developer go broke? Because they used up all their cache! 💰",
  "Why was the JavaScript developer sad? Because they didn't Node how to Express their feelings! 😢",
  "How do you comfort a JavaScript bug? You console it! 🤗",
  "Why did the CircleCI pipeline feel lonely? It was waiting for its PRs to be approved! ⭕",
  "Why did ESLint become a teacher? It was tired of everyone ignoring its warnings! ⚠️",
  "How does TypeScript comfort JavaScript? 'Don't worry, I've got your type!' 🤗",
  "Why did the function have to go to therapy? It had too many callbacks! 🛋️",
];

const techQuotes = [
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“The most damaging phrase in the language is 'We've always done it this way.'” – Grace Hopper",
  "“The only way to do great work is to love what you do.” – Steve Jobs",
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill",
  "“The expert in anything was once a beginner.” – Helen Hayes",
  "“In learning you will teach, and in teaching you will learn.” – Phil Collins",
  "“True knowledge exists in knowing that you know nothing.” – Socrates",
];

let seenTrivia = new Set<number>();
let seenJokes = new Set<number>();
let seenQuotes = new Set<number>();

const getRandomUnseen = (array: string[], seenSet: Set<number>): number => {
  if (seenSet.size === array.length) {
    seenSet.clear();
    return Math.floor(Math.random() * array.length);
  }

  let index;
  do {
    index = Math.floor(Math.random() * array.length);
  } while (seenSet.has(index));

  seenSet.add(index);
  return index;
};

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
        <li>fun - Discover fun commands</li>
        <li><span className="text-primary/50">secret</span> - ???</li>
      </ul>
    </div>
  ),

  hobbies: (): CommandOutput => (
    <div className="space-y-2">
      <p>🎮 When I'm not coding, you can find me:</p>
      <ul className="list-disc list-inside">
        <li>Visiting zoos and wildlife sanctuaries - I'm passionate about animals!</li>
        <li>Going whale watching and enjoying beach activities when possible</li>
        <li>Playing classic RPGs (especially 16-bit era games like Final Fantasy)</li>
        <li>Enjoying casual sports like bowling, billiards/pool, mini golf, and Top Golf</li>
        <li>Spending quality time with my fiancee and our pets (1 cat and 2 dogs)</li>
      </ul>
      <p className="text-light/50 mt-2">Pro tip: Try typing &apos;secret&apos; for a surprise...</p>
    </div>
  ),

  resume: (): CommandOutput => (
    <div className="space-y-2">
      <p>📄 Want to see my resume?</p>
      <p>
        <Link
          href="/assets/travis-rollins-resume.pdf"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to download my resume (PDF)
        </Link>
      </p>
    </div>
  ),

  contact: (): CommandOutput => (
    <div className="space-y-2">
      <p>📫 Let's connect!</p>
      <p>Email: <a href="mailto:kalikoze@gmail.com" className="text-accent hover:underline">kalikoze@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/travisrollins/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/travisrollins</a></p>
      <p>GitHub: <a href="https://github.com/kalikoze" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">github.com/kalikoze</a></p>
    </div>
  ),

  clear: (): CommandOutput => null,

  secret: (): CommandOutput => (
    <div className="space-y-2">
      <p className="text-accent">🎧 You've discovered a secret!</p>
      <p>Before diving into software development, I was actually a beat producer!</p>
      <p>
        <a
          href="https://soundcloud.com/renegadeaudioproductions"
          className="text-accent hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out some of my beats on SoundCloud
        </a>
      </p>
    </div>
  ),

  fun: (): CommandOutput => (
    <div className="space-y-2">
      <p>🎲 Try these secret commands:</p>
      <ul className="list-disc list-inside">
        <li>trivia - Get a random trivia fact about me</li>
        <li>joke - Get a programming joke</li>
        <li>quote - Get an inspirational tech quote</li>
      </ul>
    </div>
  ),

  trivia: (): CommandOutput => {
    const index = getRandomUnseen(triviaFacts, seenTrivia);
    const remaining = triviaFacts.length - seenTrivia.size;

    return (
      <div className="space-y-2">
        <p>🎯 Random trivia about me:</p>
        <p className="text-accent">{triviaFacts[index]}</p>
        <p className="text-light/50 mt-2">
          {remaining > 0
            ? `Type 'trivia' again to learn another fact! (${remaining} more to discover)`
            : "You've discovered all my trivia facts! Type 'trivia' again to start over."}
        </p>
      </div>
    );
  },

  joke: (): CommandOutput => {
    const index = getRandomUnseen(programmingJokes, seenJokes);
    const remaining = programmingJokes.length - seenJokes.size;

    return (
      <div className="space-y-2">
        <p>😄 Here's a programming joke:</p>
        <p className="text-accent">{programmingJokes[index]}</p>
        <p className="text-light/50 mt-2">
          {remaining > 0
            ? `Type 'joke' again for another laugh! (${remaining} more jokes to go)`
            : "You've heard all my jokes! Type 'joke' again to start over."}
        </p>
      </div>
    );
  },

  quote: (): CommandOutput => {
    const index = getRandomUnseen(techQuotes, seenQuotes);
    const remaining = techQuotes.length - seenQuotes.size;

    return (
      <div className="space-y-2">
        <p>💡 Inspirational tech quote:</p>
        <p className="text-accent">{techQuotes[index]}</p>
        <p className="text-light/50 mt-2">
          {remaining > 0
            ? `Type 'quote' again for more inspiration! (${remaining} more quotes available)`
            : "You've seen all the quotes! Type 'quote' again to start over."}
        </p>
      </div>
    );
  },
}

export const processCommand = (input: string): CommandOutput => {
  const cmd = input.toLowerCase().trim()

  if (cmd in commands) {
    return commands[cmd as keyof typeof commands]()
  }

  return `Command not found: ${input}. Type 'help' for available commands.`
} 