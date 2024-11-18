describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Content Tests', () => {
    it('should display the header content correctly', () => {
      cy.get('[data-cy="name"]')
        .should('be.visible')
        .and('have.text', 'Travis Rollins')

      cy.get('[data-cy="title"]')
        .should('be.visible')
        .and('have.text', 'Full Stack Developer')
    })

    it('should display navigation buttons', () => {
      cy.get('[data-cy="projects-btn"]')
        .should('be.visible')
        .and('have.text', 'View Projects')

      cy.get('[data-cy="connect-btn"]')
        .should('be.visible')
        .and('have.text', 'Let\'s Connect')
    })

    it('should display availability status', () => {
      cy.get('[data-cy="availability-badge"]')
        .should('be.visible')
        .and('contain.text', 'Available for Work')
    })

    it('should display error message example', () => {
      cy.get('[data-cy="error-message"]')
        .should('be.visible')
        .and('contain.text', 'Example error message')
    })
  })

  context('Accessibility Tests', () => {
    it('should pass accessibility tests', () => {
      cy.injectAxe();
      cy.checkA11y();
    })
  })
})
