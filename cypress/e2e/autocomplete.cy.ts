describe('Autocomplete Component', () => {
  it('Autocomplete should be empty when delete the select option', () => {
    cy.visit('http://localhost:5173/') // Replace with the actual path to your component
    cy.get('[data-test="autocomplete"]').type('Hello',{timeout:1000});
    cy.get('.v-list-item').should('contain', 'hello').click({timeout:1000});
    cy.get('.v-field__input > input').clear();
    cy.get('body').click({timeout:1000})
    cy.get('[data-test="autocomplete"]').should('not.have.value', 'Hello');
  })
})
