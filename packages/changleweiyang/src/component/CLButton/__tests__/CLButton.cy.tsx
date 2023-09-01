import { reactive, ref } from 'vue'
import CLButton from '../src/CLButton'
import { ButtonProps } from '../src/button'
import { mount } from 'cypress/vue'

describe('CLButton', () => {
  it('default component class name', () => {
    const props = reactive({
      type: 'success',
      size: 'small',
      loading: false,
    }) as ButtonProps

    const onClick = () => {
      setTimeout(() => {
        props.type = 'error'
        props.size = 'big'
        props.loading = true
      }, 1000)
    }

    mount(() => (
      <CLButton
        type={props.type}
        size={props.size}
        loading={props.loading}
        onClick={onClick}>
        Content
      </CLButton>
    ))
      .get('button')
      .should('have.class', 'clwy-button clwy-button-type-success')
      .should('have.text', 'Content')
      .click()
    // .should('have.class', 'clwy-button-type-error')
  })
})
