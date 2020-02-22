describe('Blog app', function () {
  beforeEach(function () {
    cy.resetState()
  })

  it('Login form is shown', function () {
    cy.contains('Username')
    cy.contains('Password')
    cy.contains('Login')
  })

  describe('login', function () {
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

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'violet', password: 'salis' })
    })

    it('a blog can be created', function () {
      cy.contains('New blog')
        .click()

      cy.get('#title').type('Best food ever')
      cy.get('#author').type('VG')
      cy.get('#url').type('www.not-vegan.com')
      cy.contains('Add').click()

      cy.contains('Blog added')
    })
  })
})