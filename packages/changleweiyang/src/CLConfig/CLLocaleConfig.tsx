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
import { type Locale, type ComponentLocaleName } from '@/locale'
import defaultLocale from '@/locale/default'

export default defineComponent({
  name: 'CLLocaleConfig',

  props: {
    locale: Object as PropType<Locale>,
  },

  setup(props, { slots }) {
    const state = reactive({
      locale: props.locale,
    })
    console.log('state.locale:', state.locale)
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
