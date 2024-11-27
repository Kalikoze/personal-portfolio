import Hero from '@/app/components/sections/Hero/Hero'
import About from '@/app/components/sections/About/About'
import Skills from '@/app/components/sections/Skills/Skills'
import Projects from '@/app/components/sections/Projects/Projects'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Additional sections will go here */}
    </main>
  )
}
