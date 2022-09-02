// cypress/e2e/popup.cy.ts
it('loads the page', () => {
  cy.visit('/');
  cy.get('#app').should('have.class', 'loaded');
  cy.get('.survey', { timeout: 200 })
    .if('visible')
    .find('button')
    .click()
    .else()
    .log('Survey stays hidden')
    .finally()
    .should('not.exist');
  cy.get('.new-todo').type('Write code{enter}');
});
