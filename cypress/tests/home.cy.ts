describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Display Tests', () => {
  it('should display the name correctly', () => {
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Travis Rollins')
    })
  })

  context('Accessibility Tests', () => {
    it('should pass accessibility tests', () => {
      cy.injectAxe();
      cy.checkA11y();
    })
  })
})
