import 'cypress-if';

before(() => {
  cy.visit('/');
});

function ensureSettingsOpen() {
  cy.get('dialog.settings', { timeout: 100 })
    .if('not.visible')
    .get('button.toggle-settings')
    .click();
  cy.get('dialog.settings').should('be.visible');
}

it('opens the settings dialog', () => {
  cy.get('dialog.settings').should('not.be.visible');
  cy.get('button.toggle-settings').click();
  cy.get('dialog.settings')
    .should('be.visible')
    // wait a second to make the dialog visible to the user
    .wait(1000, { log: false })
    // maybe validate something inside the dialog
    .contains('Settings');
});

it('closes the settings dialog', () => {
  ensureSettingsOpen();
  cy.get('button.toggle-settings').click();
  cy.get('dialog.settings').should('not.be.visible');
});
