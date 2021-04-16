
/// <reference types="cypress" />

context('Openbank - Flow KO', () => {

    it('Can open the app', () => {
        cy.visit('http://localhost:3000/');
    })

    it('Can be seen as enabled if the check is accepted again', () => {

        const checkbox = cy.get('#thermsOfAge')
        checkbox.check()
        const button = cy.get('.actions button')
        button.should('not.be.disabled')
    })

    it('You can see the text from screen Step 2 if you have the check pressed and press next', () => {
        const button = cy.get('.actions button')
        button.click();
        cy.contains('Crea tu Contraseña Maestra');
    })
    it('Next step button can be enabled if passwords match value for service to fail', () => {
        const password = cy.get('input[name="password"]')
        password.type('pruebaKO123').should('have.value','pruebaKO123')

        const confirmPassword = cy.get('input[name="confirmPassword"]')
        confirmPassword.type('pruebaKO123').should('have.value','pruebaKO123')

        if(password === confirmPassword) {
            const button = cy.get('.actions button')
            button.should('not.be.disabled')
        }
    })
    it('You can see the failure text if if the passwords match', () => {
        const button = cy.get('.actions button')
        button.click();
        cy.contains('Ha habido un error');
    })
});