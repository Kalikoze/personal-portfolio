import Hero from '@/app/components/sections/Hero/Hero'
import About from '@/app/components/sections/About/About'
import Skills from '@/app/components/sections/Skills/Skills'
import Projects from '@/app/components/sections/Projects/Projects'
import Experience from '@/app/components/sections/Experience/Experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* Additional sections will go here */}
    </main>
  )
}
