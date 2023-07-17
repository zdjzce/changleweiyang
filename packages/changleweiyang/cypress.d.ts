import { mount } from 'cypress/vue'
import {
  VNode,
  RendererNode,
  RendererElement,
  ComponentPublicInstance,
} from 'vue'

type MountParams = Parameters<typeof mount>
type OptionsParam = MountParams[1]

/**
 * cypress tsx element was not support
 */
type MyVNode = VNode<RendererNode, RendererElement, { [key: string]: any }>

declare function tsxMount<V extends {}>(
  originalComponent: MyVNode,
  options?: MountingOptions<any> & Record<string, any>,
): Cypress.Chainable<{
  wrapper: VueWrapper<ComponentPublicInstance<V>>
  component: VueWrapper<ComponentPublicInstance<V>>['vm']
}>

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof tsxMount
    }
  }
}
