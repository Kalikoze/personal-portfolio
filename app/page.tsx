import Hero from '@/app/components/Hero'
import About from '@/app/components/About'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <Hero />
      <About />
      {/* Additional sections will go here */}
    </main>
  )
}
