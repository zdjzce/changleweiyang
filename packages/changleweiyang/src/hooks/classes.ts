import { config } from '@/config/index'
import { computed, ref, watch } from 'vue'
const { defaultName, commonSeparator, clwySeparator, statePrefix } = config

const useClasses = (componentName: string, props?: any) => {
  const defaultClass = (name: string) => {
    return defaultName + commonSeparator + name
  }

  const conditionClass = (type: string) => {
    const compute = computed(() => {
      return props[type] ? composeClass([componentName, type, props[type]]) : ''
    })

    watch(
      compute,
      (newComputed) => {
        console.log('newComputed===', newComputed)
      },
      { immediate: true, deep: true },
    )
    return compute
  }

  return {
    defaultClass,
    conditionClass,
  }
}

// ['button', 'type', 'default']  ->  clwy-button-type-default
const composeClass = (names: string[]) => {
  names.unshift(defaultName)
  return names.join(commonSeparator)
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
