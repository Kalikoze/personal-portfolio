/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      checkMetaTag(selector: string, expectedContent: string): Chainable<void>
      typeCommand(command: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('checkMetaTag', (selector, expectedContent) => {
  cy.get(selector).should('have.attr', 'content').and('include', expectedContent);
});

Cypress.Commands.add('typeCommand', (command: string) => {
  cy.get('[data-cy="terminal-input"]').type(`${command}{enter}`);
});

export {};