import CLButton from '../CLButton'

describe('CLButton.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<CLButton>123</CLButton>)
    cy.get('button').should('have.class', 'cl-button')
  })
})
