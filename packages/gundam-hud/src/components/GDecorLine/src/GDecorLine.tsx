import { defineComponent, computed } from 'vue'
import { props } from './DecorLine'
import GDecorPolyline from './polyline/GDecorPolyline'
import GDecorStraight from './straight/GDecorStraight'
import type { DecorLineType } from './instance'

const lineStyleComponent: Record<DecorLineType, any> = {
  polyline: GDecorPolyline,
  straight: GDecorStraight,
}

const GDecorLine = defineComponent({
  name: 'GDecorLine',
  props,
  setup(props, { slots }) {
    const LineStyle = computed(() => lineStyleComponent[props.type!])
    return () => {
      return <LineStyle.value {...props} lineSlots={slots}></LineStyle.value>
    }
  },
})
export default GDecorLine
