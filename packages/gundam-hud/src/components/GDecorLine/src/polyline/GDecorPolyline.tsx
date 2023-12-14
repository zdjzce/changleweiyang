import { defineComponent, computed } from 'vue'
import { decorPolylineProps } from '../DecorLine'
import type { PolylineStyle, StraightLineStyle } from '../instance'
import PolylineRifleI from './PolylineRifleI'

const decorLinePolyline: Record<PolylineStyle, any> = {
  'rifle-I': PolylineRifleI,
  'rifle-II': null,
}

const GDecorPolyline = defineComponent({
  props: decorPolylineProps,
  setup(props, { slots }) {
    const Polyline = computed(
      () => decorLinePolyline[props.properties?.lineStyle || 'rifle-I'],
    )

    return () => {
      return <Polyline.value {...props}></Polyline.value>
    }
  },
})

export default GDecorPolyline
