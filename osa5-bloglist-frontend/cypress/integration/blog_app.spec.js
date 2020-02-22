describe('Blog app', function () {
  beforeEach(function () {
    cy.resetState()
  })

  it('Login form is shown', function () {
    cy.contains('Username')
    cy.contains('Password')
    cy.contains('Login')
  })
})