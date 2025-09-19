describe('Verify user can Login successfully ', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#email').clear()
    cy.get('#email').type('admin@email.com')
    cy.get('#password').clear()
    cy.get('#password').type('admin123')
    cy.get('.mt-8 > .flex').click()
    //Verify that the patient list page is displayed
    cy.get('.lg\\:col-span-2 > .bg-white\\/70').should('be.visible')

  })
})