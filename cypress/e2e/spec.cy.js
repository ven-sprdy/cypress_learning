describe('ParaBank Homepage', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  });

  it('Verify ParaBank title', () => {
    cy.title().should('eq', 'OrangeHRM')
  })


  it('Verify ParaBank login', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.title().should('eq', 'OrangeHRM')
    cy.url().should('include', 'dashboard')
      .and('contains', '/web/index.php/dashboard/index')

    let expectUserName = 'Paul Collings'
    cy.get('.oxd-userdropdown-name').then( (element) => {
      let actualUserName = element.text()
      expect(actualUserName).to.equal(expectUserName)

      assert.equal(actualUserName, expectUserName)
    })

  })

})