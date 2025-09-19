describe('Verify user can create new patient data successfully ', () => {
  it('passes', () => {
    //login
    cy.visit('/')
    cy.get('#email').clear()
    cy.get('#email').type('admin@email.com')
    cy.get('#password').clear()
    cy.get('#password').type('admin123')
    cy.get('.mt-8 > .flex').click()
    //Verify that the patient list page is displayed
    cy.get('.lg\\:col-span-2 > .bg-white\\/70').should('be.visible')

    //Create new patient's data
    cy.get('#name').type('A Pasien Auto')
    cy.get('#dob').type('2002-09-01')
    cy.get('#mrn').type('123ABC456')
    cy.get('.space-y-5 > .flex').click()
    //Verify that the patient appears in the list
    cy.get('.max-w-6xl').should('contain.text','A Pasien Auto')   


    //Delete the newly added patient
    cy.contains('a[href^="/patients/"] .group', 'A Pasien Auto').click()
    cy.get('.bg-red-500').click()
    cy.get('.mt-4 > .bg-red-500').click()
    cy.get('.text-center').should('contain','Pasien tidak ditemukan')
    //Verify that the patient no longer appears in the list.
    cy.visit(Cypress.config().baseUrl) // balik ke halaman utama
    cy.get('.max-w-6xl').should('not.contain.text','A Pasien Auto')





  })
})