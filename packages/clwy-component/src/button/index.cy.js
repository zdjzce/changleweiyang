import Index from './index.tsx'

describe('<Index />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index)
  })


  it('click', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Index)
    cy.get('button').click()
  })
})