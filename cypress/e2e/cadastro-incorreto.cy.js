/// <reference types="cypress"/>

describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formulario incorretamente e exibit mensagem ao usuário', () => {
    
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[data-test="register-button"]').click();
    
    cy.get('[data-test="submit-button"]').click();

    cy.contains('É necessário informar um endereço de email').should('be.visible');

    cy.contains('Crie uma senha').should('be.visible');

    cy.contains('Repita a senha criada acima').should('be.visible');

  })

})