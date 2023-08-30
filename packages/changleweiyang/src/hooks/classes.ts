import { config } from '@/config/index'
import { computed, ref } from 'vue'
const { defaultName, commonSeparator, clwySeparator, statePrefix } = config

const useClasses = (componentName: string, props?: any) => {
  const defaultClass = (name: string) => {
    return defaultName + commonSeparator + name
  }

  const conditionClass = (type: string) => {
    return computed(() => {
      return props[type] ? composeClass([componentName, type, props[type]]) : ''
    })
  }

  return {
    defaultClass,
    conditionClass,
  }
}

const generateClasses = (
  componentName: string,
  props: any,
  attributes: string[],
) => {
  const { defaultClass, conditionClass } = useClasses(componentName, props)
  const classes = [defaultClass(componentName)]
  attributes.forEach((attr) => {
    const conditionValue = conditionClass(attr).value
    if (conditionValue) {
      classes.push(conditionValue)
    }
  })
  return classes
}

const composeClass = (names: string[]) => {
  names.unshift(defaultName)
  return names.join(commonSeparator)
}

export { useClasses, composeClass, generateClasses }
