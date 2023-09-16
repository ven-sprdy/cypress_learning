describe('ParaBank Homepage', () => {

  before(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  });

  it('Verify ParaBank title', () => {
    cy.title().should('eq', 'ParaBank | Welcome | Online Banking')
  })

})