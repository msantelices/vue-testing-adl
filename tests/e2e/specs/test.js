describe('Test de navegacion en la App', ()=> {

    // Test 1
    it('Revisa que la página principal tenga el título correcto', ()=> {

        // Ir a la pagina principal
        cy.visit('/') // visit() permite navegar a una ruta
        
        //contains toma como primer argumento un selector css y com segundo argumento, el contenido a verificar
        cy.contains('h1', 'Welcome to Your Vue.js App') 

    })

    it('Navega en la aplicación y deja una opinión', ()=> {

        // Entramos a la ruta de opiniones
        cy.visit('/opiniones')

        // Verificamos que estamos en el componente correcto
        cy.contains('h1', 'Página de opiniones')

        // Verificamos que se incializa de forma correcta. Es decir, sin opiniones
        cy.contains('.msg', 'No hay opiniones para mostrar')


        // Agregamos una opinion
        // 1- Seleccionar los inputs y el boton y agregamos texto
        cy.get('#nombre').type('Mi nombre') // Type me permite introducir texto a un input
        cy.get('#opinion').type('Esta es una opinion de prueba')
        cy.get('#btn').click() // <- Con este metodo podemos activar un boton o enlace

        // Verificar que la opinion se carga correctamente
        cy.get('.opiniones li')
        cy.contains('.opiniones ul li small', 'Mi nombre')
        cy.contains('.opiniones ul li p', 'Esta es una opinion de prueba')

        cy.get('#nombre').should('have.value', '')
        cy.get('#opinion').should('have.value', '')

    })

    it('Comprueba que la vista de página no encontrada funciona correctamente', ()=> {
        cy.visit('/pagina-inexistente')
        cy.contains('h1', 'Página no encontrada')

        // Expresiones logicas should
        // exist
        // not.exist
        // have.class
        // not.have.class
        // be.visible
        // not.be.visible
        // have.value
        // have.length

        // Should toma 2 argumentos, el primero, obligatorio, es la expresion logica y opcionalmente, dependiendo de la logica, el valor a revisar
        cy.get('.not-found a').should('have.class', 'go-back')
    })

})