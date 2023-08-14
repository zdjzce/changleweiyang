import { defineComponent, provide, reactive, PropType } from 'vue'
import CLLocaleConfig from './CLLocaleConfig'
import { type Locale } from '@/component/locale'

const CLConfigProps = {
  locale: {
    type: Object as PropType<Locale>,
  },
}

const CLConfig = defineComponent({
  name: 'CLConfig',
  props: CLConfigProps,
  setup(props, { slots }) {
    const configProvider = reactive({ ...props })

    provide('configProvider', configProvider)

    return () => (
      <CLLocaleConfig locale={props.locale}>
        {slots?.default?.()}
      </CLLocaleConfig>
    )
  },
})

export default CLConfig
