/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      checkMetaTag(selector: string, expectedContent: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('checkMetaTag', (selector, expectedContent) => {
  cy.get(selector).should('have.attr', 'content').and('include', expectedContent);
});

export {};