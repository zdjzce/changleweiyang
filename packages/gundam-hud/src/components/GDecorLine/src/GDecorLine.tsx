import { defineComponent, computed, watch, onMounted, Component } from 'vue'
import GDecorPolyLine from './GDecorPolyLine'
import { props } from './DecorLine'
import GDecorStraight from './GDecorStraight'
import { DecorLine, DecorLineType } from './instance'

const lineStyleComponent: Record<DecorLineType, any> = {
  polyline: GDecorPolyLine,
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
