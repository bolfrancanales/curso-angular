describe('Pruebas de la aplicación Angular', () => {

  it('debe mostrar el listado de productos', () => {
    cy.visit('/listado');

    cy.contains('Listado de productos')
      .should('be.visible');
  });


  it('debe permitir votar positivamente por un producto', () => {
    cy.visit('/listado');

    cy.contains('.list-group-item', 'Laptop')
      .within(() => {

        cy.contains('Voto +').click();

        cy.contains('Votos: 1')
          .should('be.visible');

      });
  });


  it('debe proteger la ruta y enviar al login', () => {
    cy.visit('/protegido');

    cy.url()
      .should('include', '/login');

    cy.contains('Iniciar sesión')
      .should('be.visible');
  });

});