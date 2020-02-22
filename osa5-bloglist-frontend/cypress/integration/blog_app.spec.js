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

    it('a blog can be liked', function () {
      cy.contains('New blog')
        .click()

      cy.get('#title').type('Great blog')
      cy.get('#author').type('Mary Maximus')
      cy.get('#url').type('www.great-mary.com')
      cy.contains('Add').click()

      cy.contains('view')
        .click()
      cy.contains('like')
        .click()
      cy.contains('Likes: 1')
    })

    it('a blog can be deleted', function () {
      cy.contains('New blog')
        .click()

      cy.get('#title').type('Great blog')
      cy.get('#author').type('Mary Maximus')
      cy.get('#url').type('www.great-mary.com')
      cy.contains('Add').click()

      cy.contains('view')
        .click()
      cy.contains('delete')
        .click()
      cy.contains('Blog deleted')
    })

    it.only('blogs are sorted', function () {
      cy.contains('New blog')
        .click()
      cy.get('#title').type('Great blog')
      cy.get('#author').type('Mary Maximus')
      cy.get('#url').type('www.great-mary.com')
      cy.contains('Add').click()

      cy.contains('New blog')
        .click()
      cy.get('#title').type('Best food ever')
      cy.get('#author').type('VG')
      cy.get('#url').type('www.not-vegan.com')
      cy.contains('Add').click()

      cy.contains('VG')
        .contains('view')
        .click()

      cy.get('.blog').then(blogs => {
        cy.wrap(blogs[1])
          .contains('like')
          .click()
      })

      cy.visit('http://localhost:3000')

      cy.get('.blog').then(blogs => {
        cy.wrap(blogs[0])
          .contains('VG')
      })
    })
  })
})