/*
Exercícios

Com o Cypress, escreva os códigos dos seguintes testes:

*/

describe('template spec', () => {
  it('passes', () => {
    // Visite a página principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[class="button"]').click();

    // Visite a página principal do AdoPet e teste os botões header;
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[class="header__home"]').click();

    // Visite a página /login do Adopet;
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[class="header__message"]').click();

    // Visite a página /home do Adopet;
    // Visite a página /home do AdoPet e clique no botão “Falar com o responsável”.
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[data-test="login-button"]').click();

    cy.get('input[name="email"]').type('escritor_machado_assis@gmail.com');

    cy.get('input[name="password"]').type('As12345!@#');

    // Visite a página /home do AdoPet e clique no botão “Falar com o responsável”.
    cy.get('button[data-test="submit-button"]').click();
    
    cy.contains('a', 'Falar com responsável').click();
  })
})