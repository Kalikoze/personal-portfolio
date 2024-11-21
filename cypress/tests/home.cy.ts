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
    'Led 100+ technical projects as instructor/developer',
    'Built 5+ full-scale websites in 6 months',
    'Mentored 1000+ developers into tech careers'
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

      cy.get('[data-cy="about"]')
        .should('be.visible')
        .and('contain.text', 'About Me')

      cy.get('[data-cy="about-description"]')
        .should('be.visible')
        .and('contain.text', 'With over 7 years in software development, I bring a unique blend of technical expertise, teaching experience, and a passion for creating inclusive tech spaces.')

      const expectedParagraphStarts = [
        'Currently leading engineering initiatives at Mind & Metrics Branding',
        'During my 6 years as a Senior Instructor at the Turing School of Software & Design',
        'My background as a violinist and audio engineer'
      ];

      cy.get('[data-cy="about-main"] p').each(($p, index) => {
        const text = $p.text().replace(/\s+/g, ' ').trim();
        expect(text).to.include(expectedParagraphStarts[index]);
      });
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
      cy.wait(2000)
      cy.checkA11y()
    })
  })
})
