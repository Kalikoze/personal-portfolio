import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Skills from '@/app/components/Skills'

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
