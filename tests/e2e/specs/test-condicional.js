describe('Este test verifica que la clase condicional funciona correctamente', ()=> {

    it('Muestra y oculta el mensaje utilizando el botón', ()=> {
        cy.visit('/condicional')
        cy.contains('h1', 'Vista para probar clases condicionales')

        cy.get('h3').should('not.be.visible')

        cy.get('#btn').click()
        cy.get('h3').should('have.class', 'show')
        cy.get('h3').should('be.visible')

        // Screenshot
        cy.screenshot('prueba-clase-condicional')

        cy.get('#btn').click()
        cy.get('h3').should('not.have.class', 'show')
        cy.get('h3').should('not.be.visible')
    })

})