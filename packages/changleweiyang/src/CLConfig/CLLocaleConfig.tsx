import { defineComponent, PropType, provide, inject, computed, ComputedRef } from 'vue'
import { type Locale, type ComponentLocaleName } from '@/locale'
import defaultLocale from '@/locale/default'

export default defineComponent({
  name: 'CLLocaleConfig',

  props: {
    locale: Object as PropType<Locale>,
  },

  setup(props, { slots }) {

    provide('locale', props.locale)
    return () => slots?.default?.()
  },
})

export const useLocale = (component: ComponentLocaleName) => {
  const localeData = inject('locale') as Locale

  const locale = computed(() => {
    return localeData ? localeData[component] : defaultLocale[component]
  })

  return locale

}
