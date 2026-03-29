
describe('Teste no site do Google', () => {
    it('Deve carregar a página inicial do Google', () => {
        cy.visit('https://www.google.com')
        cy.title().should('eq', 'Google') // Verifica se o título da página é "Google"

        cy.get('#APjFqb').should('exist').debug() // Verifica se o campo de busca existe, pausa a execução com o debug

    })

})