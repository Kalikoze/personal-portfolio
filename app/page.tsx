import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <Hero />
      <About />
      <Skills />
      {/* Additional sections will go here */}
    </main>
  )
}
