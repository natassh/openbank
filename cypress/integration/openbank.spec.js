
/// <reference types="cypress" />

context('Openbank', () => {

    it('Can open the app', () => {
        cy.visit('http://localhost:3000/');
    })
    it('Can the button will be disabled', () => {
        const button = cy.get('.actions button')
        button.should('be.disabled')
    })
    it('Can be enabled if you press the check', () => {

        const checkbox = cy.get('#thermsOfAge')
        checkbox.check()
        const button = cy.get('.actions button')
        button.should('not.be.disabled')
    })
    it('You can see the text on the screen if you have the check pressed and press next', () => {
        const button = cy.get('.actions button')
        button.click();
        cy.contains('Crea tu Contraseña Maestra');
    })
});