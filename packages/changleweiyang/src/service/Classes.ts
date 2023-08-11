import { config } from '@/config/index'

class Classes {
  static useClasses() {
    const { defaultName, commonSeparator, clwySeparator, statePrefix } = config

    const defaultClass = (name: string) => {
      return defaultName + commonSeparator + name
    }

    return {
      defaultClass,
    }
  }
}

export { Classes }
