import { reactive, ref } from 'vue'
import CLButton from '../src/CLButton'
import { ButtonProps } from '../src/button'
import { mount } from 'cypress/vue'

describe('CLButton', () => {
  it('default component class name', () => {
    const props = reactive({
      type: 'success',
      loading: false,
    }) as ButtonProps

    const onClick = () => {
      props.type = 'error'
      props.size = 'small'
      props.loading = true
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
      .should(
        'have.class',
        'clwy-button clwy-button--success clwy-button--small',
      )
      .click()
      .should('have.class', 'clwy-button--error clwy-button--large is-loading')
  })
})
