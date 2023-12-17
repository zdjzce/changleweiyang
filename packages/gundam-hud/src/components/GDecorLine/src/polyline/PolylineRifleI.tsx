import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'
import { setPathOffsetAnime } from '../anime'
import type { LineElement } from '../instance'
import { slashAnime } from '../anime/polyline'

const PolylineRifleI = defineComponent({
  name: 'PolylineRifleI',
  props: decorPolylineRifleIProps,
  setup(props, { slots }) {
    watch(
      () => props,
      (prop) => {
        console.log('prop:', prop)
      },
      { deep: true, immediate: true },
    )

    onMounted(() => {
      setCircleAnime()
      slashAnime([
        belowSlashLine.value,
        belowSlashLineSecond.value,
        belowSlashLineThird.value,
      ])
    })

    const circleOne = ref<LineElement>()
    const circleTwo = ref<LineElement>()
    const setCircleAnime = () => {
      setPathOffsetAnime(circleOne.value)
      setPathOffsetAnime(circleTwo.value, 500)
    }

    const belowSlashLine = ref<LineElement>()
    const belowSlashLineSecond = ref<LineElement>()
    const belowSlashLineThird = ref<LineElement>()

    return () => (
      <div>
        <svg>
          <g>
            <circle
              ref={circleOne}
              cx='5'
              cy='80'
              fill='none'
              r='2'
              stroke='black'
            />
            <circle
              cx='5'
              cy='80'
              fill='none'
              r='4'
              stroke='black'
              ref={circleTwo}
            />
          </g>
          <path
            ref={belowSlashLine}
            fill='none'
            stroke='rgba(128, 142, 151, 0.5)'
            d='m5 80 l80 -80'
          />
          <path
            ref={belowSlashLineSecond}
            stroke-dasharray='0, 65'
            fill='none'
            stroke='rgba(128, 142, 151, 0.8)'
            d='m15 70 l80 -80'
          />

          <path
            ref={belowSlashLineThird}
            // stroke-dasharray='0, 65'
            fill='none'
            stroke='rgb(131, 187, 186)'
            stroke-width='3'
            d='m25 60 l30 -30'
          />

          {/* <path fill='none' stroke='black' d='m85 0 l250 0'></path>
          <path fill='none' stroke='black' d='m69 15 l20 0'></path>
          <path fill='none' stroke='black' d='m49 35 l20 0'></path>
          <path fill='none' stroke='red' d='m300 0 l-60 0'></path> */}
        </svg>
      </div>
    )
  },
})
export default PolylineRifleI
