import { defineComponent, computed } from 'vue'
import GDecorPolyLine from './GdecorPolyLine'
import { props } from './DecorLine'
import { DecorLine } from './instance'

const lineStyleComponent: Record<'polyline' | 'straight', any> = {
  polyline: GDecorPolyLine,
  straight: GDecorPolyLine,
}

const GDecorLine = defineComponent<typeof props>({
  name: 'GDecorLine',
  setup(props, { slots }) {
    const LineStyle = computed(() => lineStyleComponent[props.type])
    return () => {
      const { type } = props
      return <LineStyle.value {...props}>{slots.default?.()}</LineStyle.value>
    }
  },
})
export default GDecorLine
