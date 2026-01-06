/// <reference types="cypress"/>

describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    
    cy.get('a[data-test="register-button"]').click();
       
    let number = Math.floor(Math.random() * 100);

    //cy.get('[data-test="input-name"]').type(`Machado de Assis ${number}`);

    //cy.get('[data-test="input-email"]').type(`machado_assis${number}@gmail.com`);
    
    //cy.get('[data-test="input-password"]').type(`As12${number}!@#`);
    
    //cy.get('[data-test="input-confirm-password"]').type(`As12${number}!@#`);
  
    cy.cadastrar(

      `Machado de Assis ${number}`,
      `machado_assis${number}@gmail.com`,
      `As12${number}!@#`

    );

    cy.get('[data-test="submit-button"]').click();

  })

})