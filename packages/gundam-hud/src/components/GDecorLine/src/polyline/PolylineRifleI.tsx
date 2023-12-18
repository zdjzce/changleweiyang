import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'
import { setPathOffsetAnime } from '../anime'
import type { LineElement } from '../instance'
import { slashAnime, slashRunner } from '../anime/polyline'
import { DecorLineStyle } from '@gundam/hud/style'

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
      containerWidth.value = svg.value?.getBoundingClientRect().width || 0
      setCircleAnime()

      slashAnime([
        belowSlashLine.value,
        belowSlashLineThird.value,
        belowSlashLineFourth.value,
        belowSlashLineFifth.value,
        line.value,
        lineSecond.value,
      ])

      slashRunner([belowSlashLineSecond.value, lineThird.value])
    })

    const svg = ref<LineElement>()
    const containerWidth = ref()

    const circleOne = ref<LineElement>()
    const circleTwo = ref<LineElement>()
    const setCircleAnime = () => {
      setPathOffsetAnime(circleOne.value)
      setPathOffsetAnime(circleTwo.value, 500)
    }

    const belowSlashLine = ref<LineElement>()
    const belowSlashLineSecond = ref<LineElement>()
    const belowSlashLineThird = ref<LineElement>()
    const belowSlashLineFourth = ref<LineElement>()
    const belowSlashLineFifth = ref<LineElement>()

    const line = ref<LineElement>()
    const lineSecond = ref<LineElement>()
    const lineThird = ref<LineElement>()

    const content = ref<LineElement>()
    const underText = ref<LineElement>()
    return () => (
      <div style={`max-width: ${containerWidth.value}px`}>
        <div style='position: relative'>
          <div
            ref={content}
            style='max-width: 50%; word-break: break-all; margin-left: auto;'>
            contentcontentcontentcontentcontent
            {/* {props.properties?.content || props.lineSlots?.content?.()} */}
          </div>
          <div style='position: absolute; right: 0; max-width: 50%; word-break: break-all; '>
            <div ref={underText}>
              contentcontentcontentcontent
              {/* {props.properties?.underText || props.lineSlots?.underText?.()} */}
            </div>
          </div>
        </div>
        <svg height='85' ref={svg}>
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
          <g>
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
              fill='none'
              stroke='rgb(131, 187, 186)'
              stroke-width='3'
              d='m25 60 l30 -30'
            />

            <path
              ref={belowSlashLineFourth}
              fill='none'
              stroke='black'
              d='m80 5 l10 0'
            />
            <path
              ref={belowSlashLineFifth}
              fill='none'
              stroke='black'
              d='m60 25 l30 0'
            />
          </g>
          <g>
            <path ref={line} fill='none' stroke='black' d='m85 0 l250 0' />
            <path
              ref={lineSecond}
              fill='none'
              stroke='red'
              stroke-width='2'
              d='m85 0 l230 0'
            />
            <path
              stroke-dasharray='0, 230'
              ref={lineThird}
              fill='none'
              stroke='green'
              stroke-width='3'
              d='m85 0 l230 0'
            />
          </g>
        </svg>
      </div>
    )
  },
})
export default PolylineRifleI
