describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[data-test="register-button"]').click();
    
    cy.get('input[name="nome"]').type('Escrite Machado de Assis');
    
    cy.get('input[name="email"]').type('escritor_machado_assis@gmail.com');
    
    cy.get('input[name="password"]').type('As12345!@#');
    
    cy.get('input[name="confirm_password"]').type('As12345!@#');
  
    cy.get('button[data-test="submit-button"]').click();

  })
})