import { config } from '@/config/index'
import { computed } from 'vue'
const { defaultName, commonSeparator, clwySeparator, statePrefix } = config

const useClasses = (componentName: string, props?: any) => {
  const defaultClass = (name: string) => {
    return defaultName + commonSeparator + name
  }

  const conditionClass = (type: string) => {
    return computed(() => {
      return props[type] ? composeClass([componentName, props[type]]) : ''
    })
  }

  return {
    defaultClass,
    conditionClass,
  }
}

const composeClass = (names: string[]) => {
  names.unshift(defaultName)
  return names.join(commonSeparator)
}

export { useClasses, composeClass }
