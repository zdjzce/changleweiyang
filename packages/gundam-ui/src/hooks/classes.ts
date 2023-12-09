import { config } from '@gundam-ui/config/index'
import { computed } from 'vue'
const { defaultName, commonSeparator, commonAttrSeparator, statePrefix } =
  config

const useClasses = (componentName: string, props?: any) => {
  const defaultClass = (name: string) => {
    return defaultName + commonSeparator + name
  }

  const conditionClass = (type: string) => {
    return computed(() => {
      const propsType = typeof props[type] === 'boolean'

      if (props[type] && !propsType) {
        return composeClass([componentName, props[type]])
      } else {
        return props[type] ? statePrefix + type : ''
      }
    })
  }

  return {
    defaultClass,
    conditionClass,
  }
}

// ['button', 'default']  ->  clwy-button--default
const composeClass = (names: string[]) => {
  names.unshift(defaultName + commonSeparator)
  return names.slice(0, 1) + names.slice(1).join(commonAttrSeparator)
}

const generateClasses = (
  componentName: string,
  props: any,
  attributes: string[],
) => {
  const { defaultClass, conditionClass } = useClasses(componentName, props)

  // TODO 如果不返回响应式对象 那么只有conditionClass的computed 会自己更新，但 classes 不会更新。暂时用 computed 解决 目前会有单个 props 变更整个classes 重新计算的现象 需要优化。
  return computed(() => {
    const classes = [defaultClass(componentName)]
    attributes.forEach((attr) => {
      const conditionValue = conditionClass(attr).value
      if (conditionValue) {
        classes.push(conditionValue)
      }
    })
    return classes
  })
}

export { useClasses, composeClass, generateClasses }
