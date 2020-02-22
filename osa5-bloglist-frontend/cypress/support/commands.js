Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3003/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedUser', JSON.stringify(body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('resetState', () => {
  cy.request('POST', 'http://localhost:3003/api/testing/reset')
  const user = {
    name: 'Violer Gray',
    username: 'violet',
    password: 'salis'
  }
  cy.request('POST', 'http://localhost:3003/api/users/', user)
  cy.visit('http://localhost:3000')
})