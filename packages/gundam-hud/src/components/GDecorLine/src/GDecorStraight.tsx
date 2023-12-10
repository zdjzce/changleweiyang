import { defineComponent, ref, onMounted } from 'vue'
import { decorStraightProps, props } from './DecorLine'
const GDecorStraight = defineComponent({
  props: decorStraightProps,
  setup(props, { slots }) {
    return () => (
      <div style='width: 250px; height: 50px;'>
        <svg style='width: 100%; height:100%'>
          <foreignObject x='0' y='0' width='100%' height='100%'>
            <div
              xmlns='http://www.w3.org/1999/xhtml'
              style='height: 100%; width: 100%; display:flex; justify-content: flex-end; align-items: flex-end;'>
              {props.lineSlots?.content?.()}
            </div>
          </foreignObject>
          <circle cx='50' cy='50' r='40' fill='none' stroke='black' />
          <path
            d='m 50,50 m -35, 0, a 35,35 0 1,0 70,0, a 35,35 0 1,0 -70,0'
            fill='none'
            stroke='red'
            stroke-width='2'
            stroke-dasharray='10,10'
          />
          <path
            class='path'
            stroke='black'
            stroke-width='0.3'
            d='m0 50, l250 0'
          />

          <path
            class='path'
            stroke='red'
            stroke-width='1'
            d='m250 50, l-100 0'
          />
        </svg>

        {/* {props.lineSlots?.content?.()} */}
        {props.lineSlots?.underText?.()}
      </div>
    )
  },
})

export default GDecorStraight
