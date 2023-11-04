import {
  defineComponent,
  PropType,
  provide,
  inject,
  computed,
  ComputedRef,
  reactive,
  ref,
} from 'vue'
import { type Locale, type ComponentLocaleName } from '@gundam/component/locale'
import defaultLocale from '@gundam/component/locale/default'

export default defineComponent({
  name: 'CLLocaleConfig',

  props: {
    locale: {
      type: Object as PropType<Locale>,
      default: () => defaultLocale,
    },
  },

  setup(props, { slots }) {
    const state = reactive({
      locale: props.locale,
    })
    provide('locale', state.locale)

    return () => slots?.default?.()
  },
})

export type UseLocale = (
  T: ComponentLocaleName,
) => ComputedRef<Locale[Exclude<keyof Locale, 'locale'>]>
export const useLocale: UseLocale = (component: ComponentLocaleName) => {
  const localeData = inject('locale', {}) as Locale
  const locale = computed(() => {
    return localeData[component]
  })

  return locale
}
