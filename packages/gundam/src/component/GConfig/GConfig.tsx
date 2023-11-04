import { defineComponent, provide, reactive, PropType } from 'vue'
import GLocaleConfig from './GLocaleConfig'
import { type Locale } from '@gundam/component/locale'

const GConfigProps = {
  locale: {
    type: Object as PropType<Locale>,
  },
}

const GConfig = defineComponent({
  name: 'GConfig',
  props: GConfigProps,
  setup(props, { slots }) {
    const configProvider = reactive({ ...props })

    provide('configProvider', configProvider)

    return () => (
      <GLocaleConfig locale={props.locale}>{slots?.default?.()}</GLocaleConfig>
    )
  },
})

export default GConfig
