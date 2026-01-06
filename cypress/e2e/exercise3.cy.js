// Exercícios Com o Cypress, escreva os códigos dos seguintes testes:

// for extensions support 
/// <reference types="cypress"/>

describe('Exercício 3 de Cypress', () => {
    
    beforeEach(() => {

        // Refatore os testes já realizados aplicando o método beforeEach().
        cy.visit('https://adopet-frontend-cypress.vercel.app/');

    })
    
    // Rode seus testes em modo headless;
    // npx cypress run --record --key fcc1ac2b-6727-4911-aa4f-47bd35222a6b --headless

    // Crie relatórios em json;
    // cypress.config.js > module.exports > json: true,

    // Grave os testes no Cypress Cloud com o recurso de record;
    // npx cypress run --record --key fcc1ac2b-6727-4911-aa4f-47bd35222a6b --headless

    // Aplique o comando personalizado de login em outros fluxos de teste. Exemplo: usuário acessa página de mensagem, é redirecionado para o login;
    it('Verifica mensagem de texto', () =>{

        cy.get('.header__message').click();

        cy.login('ana@email.com','Senha123');    
        
    })

    // Na tela de home, verifique se as imagens dos pets aparecem.
    it('Verifica imagens dos animais', () =>{

        cy.visit('https://adopet-frontend-cypress.vercel.app/home');

        cy.get('.cards').should('be.visible');
      
    })
})