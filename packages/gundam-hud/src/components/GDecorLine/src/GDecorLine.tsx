import { defineComponent, computed, watch, onMounted } from 'vue'
import GDecorPolyLine from './GDecorPolyLine'
import { props } from './DecorLine'
import GDecorStraight from './GDecorStraight'
import { DecorLine, DecorLineType } from './instance'

const lineStyleComponent: Record<'polyline' | 'straight', any> = {
  polyline: GDecorPolyLine,
  straight: GDecorStraight,
}

const GDecorLine = defineComponent({
  name: 'GDecorLine',
  props,
  setup(props, { slots }) {
    console.log('slots:', slots)
    const LineStyle = computed(() => lineStyleComponent[props.type!])
    return () => {
      const { type } = props
      return <LineStyle.value {...props} lineSlots={slots}></LineStyle.value>
    }
  },
})
export default GDecorLine
