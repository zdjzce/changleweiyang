import { Component, VueElement } from 'vue'
import components from './component'

type ComponentsKey = keyof typeof components
const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = (<Record<ComponentsKey, Component>>components)[prop as ComponentsKey]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin