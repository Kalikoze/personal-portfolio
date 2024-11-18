describe('Home Page', () => {
  const techStack = [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Prisma',
    'CircleCI'
  ] as const;

  const currentFocus = [
    'Building modern web applications with Next.js & TypeScript',
    'Optimizing SEO and site performance (90%+ scores)',
    'Implementing comprehensive testing with Cypress',
    'Creating accessible, WCAG-compliant interfaces'
  ] as const;

  const quickFacts = [
    'Reduced client development costs by over 75%',
    '6+ years empowering new developers',
    'Built 5+ full-scale websites in 6 months',
    'Background in music and audio engineering'
  ] as const;

  beforeEach(() => {
    cy.visit('/')
  })

  context('Hero Section Tests', () => {
    it('should display the hero content correctly', () => {
      cy.get('[data-cy="greeting"]')
        .should('be.visible')
        .and('contain.text', 'Hi there, I\'m')

      cy.get('[data-cy="name"]')
        .should('be.visible')
        .and('have.text', 'Travis Rollins')

      cy.get('[data-cy="title"]')
        .should('be.visible')
        .and('contain.text', 'Full Stack Developer & Engineering Lead')

      cy.get('[data-cy="hero-description"]')
        .should('be.visible')
        .and('contain.text', 'Specializing in modern web development')

      cy.get('[data-cy="tech-stack"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', techStack[index])
        })
    })
  })

  context('About Section Tests', () => {
    beforeEach(() => {
      cy.get('[data-cy="about-section"]').scrollIntoView()
    })

    it('should display the about section correctly', () => {
      cy.get('[data-cy="about-section"]').should('be.visible')
      
      cy.get('[data-cy="about-heading"]')
        .should('be.visible')
        .and('contain.text', 'About Me')

      cy.get('[data-cy="about-intro"]')
        .should('be.visible')
        .and('contain.text', '7 years in software development')
    })

    it('should display the main content correctly', () => {
      cy.get('[data-cy="about-main"]')
        .should('be.visible')
        .and('contain.text', 'Mind & Metrics Branding')
        .and('contain.text', 'Turing School of Software & Design')
        .and('contain.text', 'former violinist and audio engineer')
    })

    it('should display current focus items correctly', () => {
      cy.get('[data-cy="current-focus"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', currentFocus[index])
        })
    })

    it('should display quick facts correctly', () => {
      cy.get('[data-cy="quick-facts"]')
        .should('be.visible')
        .find('li')
        .each(($el, index) => {
          cy.wrap($el).should('contain.text', quickFacts[index])
        })
    })
  })

  context('Accessibility Tests', () => {
    it('should pass accessibility tests', () => {
      cy.injectAxe()
      cy.wait(1000)
      cy.checkA11y()
    })
  })
})
