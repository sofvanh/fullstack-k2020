describe('Blog app', function () {
  beforeEach(function () {
    cy.resetState()
  })

  it('Login form is shown', function () {
    cy.contains('Username')
    cy.contains('Password')
    cy.contains('Login')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('violet')
      cy.get('#password').type('salis')
      cy.get('#login-button').click()

      cy.contains('Blogs')
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type('violet')
      cy.get('#password').type('cats')
      cy.get('#login-button').click()

      cy.contains('Login failed')
    })
  })
})