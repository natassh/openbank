
/// <reference types="cypress" />

context('Openbank - Flow OK', () => {

    it('Can open the app', () => {
        cy.visit('http://localhost:3000/');
    })

    it('Can can be seen the button as disabled', () => {
        const button = cy.get('.actions button')
        button.should('be.disabled')
    })

    it('Can be seen as enabled if the check is accepted', () => {

        const checkbox = cy.get('#thermsOfAge')
        checkbox.check()
        const button = cy.get('.actions button')
        button.should('not.be.disabled')
    })

    it('Can see the text from screen Step 2 if press next button', () => {
        const button = cy.get('.actions button')
        button.click();
        cy.contains('Crea tu Contraseña Maestra');
    })

    it('Can be enabled the next step button if the passwords match', () => {
        const password = cy.get('input[name="password"]')
        password.type('natachaN1').should('have.value','natachaN1')

        const confirmPassword = cy.get('input[name="confirmPassword"]')
        confirmPassword.type('natachaN1').should('have.value','natachaN1')

        if(password === confirmPassword) {
            const button = cy.get('.actions button')
            button.should('not.be.disabled')
        }
    })

    it('Can see the success text if if the passwords match', () => {
        const button = cy.get('.actions button')
        button.click();
        cy.contains('¡Tu Password Manager ya está creado!');
    })

});