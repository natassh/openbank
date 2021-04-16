
/// <reference types="cypress" />

context('Openbank', () => {

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

    it('Can open the app again', () => {
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