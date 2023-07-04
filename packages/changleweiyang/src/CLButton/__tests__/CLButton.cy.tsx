import CLButton from '../CLButton'

describe('CLButton.cy.tsx', () => {
  it('playground', () => {
    cy.mount(CLButton)
    cy.get('button').should('have.class', 'cl-button')
  })
})