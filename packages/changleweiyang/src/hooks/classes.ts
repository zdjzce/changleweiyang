import { config } from '@/config/index'
import { computed } from 'vue'
const { defaultName, commonSeparator, clwySeparator, statePrefix } = config

const useClasses = () => {
  const defaultClass = (name: string) => {
    return defaultName + commonSeparator + name
  }

  const disabled = () => {
    return computed(() => 1)
  }

  return {
    defaultClass,
  }
}

export { useClasses }
