import { defineComponent, ref, onMounted } from 'vue'
import { decorStraightProps, props } from './DecorLine'
const GDecorStraight = defineComponent({
  props: decorStraightProps,
  setup(props, { slots }) {
    return () => (
      <div>
        <svg>
          <line id='line' x1='100' y1='50' x2='100' y2='50' stroke='black' />
        </svg>

        {props.lineSlots?.content?.()}
        {props.lineSlots?.underText?.()}
      </div>
    )
  },
})

export default GDecorStraight
