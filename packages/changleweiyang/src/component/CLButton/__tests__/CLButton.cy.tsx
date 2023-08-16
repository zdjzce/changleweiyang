import CLButton from '../src/CLButton'

describe('CLButton', () => {
  it('default component class name', () => {
    cy.mount(<CLButton>Content</CLButton>)
      .get('button')
      .should('have.class', 'clwy-button')
      .should('have.text', 'Content')
  })
})
