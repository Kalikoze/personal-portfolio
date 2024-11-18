export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-light">
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-8">
        <header className="space-y-4">
          <h1 data-cy="name" className="font-display text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary inline-block text-transparent bg-clip-text">
            Travis Rollins
          </h1>
          <p data-cy="title" className="text-2xl text-primary/80">Full Stack Developer</p>
        </header>
        
        <nav className="flex gap-4">
          <button data-cy="projects-btn" className="bg-secondary hover:bg-secondary/80 px-6 py-3 rounded-lg font-medium transition-colors">
            View Projects
          </button>
          <button data-cy="connect-btn" className="border-2 border-accent text-accent hover:bg-accent hover:text-dark px-6 py-3 rounded-lg font-medium transition-all duration-300">
            Let&apos;s Connect
          </button>
        </nav>

        <p data-cy="availability-badge" className="inline-block bg-dark border border-accent/20 text-accent px-4 py-2 rounded-full font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Available for Work
          </span>
        </p>

        <div 
          role="alert" 
          data-cy="error-message" 
          className="flex items-center gap-2 text-error bg-error/5 px-4 py-2 rounded-lg"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-sm">Example error message</span>
        </div>
      </section>
    </main>
  );
}
