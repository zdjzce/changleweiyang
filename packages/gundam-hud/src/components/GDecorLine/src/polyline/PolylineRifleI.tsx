import { defineComponent, computed, watch, ref, onMounted, nextTick } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'
import { setPathOffsetAnime } from '../anime'
import type { LineElement } from '../instance'
import { slashAnime, slashRunner } from '../anime/polyline'
import { DecorLineStyle } from '@gundam/hud/style'
import { typewriterEffect } from '@gundam/util/effect'

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
      nextTick(() => {
        if (props.properties?.typeWriter) {
          props.properties?.content &&
            typewriterEffect(content.value, content.value?.innerText || '')

          props.properties?.underText &&
            typewriterEffect(underText.value, underText.value?.innerText || '')
        }
      })
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

    const belowSlashLength = computed(() => {
      return props.properties?.belowLineLength || 80
    })

    return () => (
      <div style={`max-width: ${containerWidth.value}px`}>
        <div style='position: relative'>
          <div
            ref={content}
            class={DecorLineStyle.hiddenScroll}
            style='max-width: 50%; word-break: break-all; margin-left: auto; display: -webkit-box;
            -webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: scroll;'>
            {props.properties?.content || props.lineSlots?.content?.()}
          </div>
          <div
            style='position: absolute; right: 0; max-width: 50%; word-break: break-all; margin-left: auto; display: -webkit-box;
            -webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: scroll;'
            class={DecorLineStyle.hiddenScroll}>
            <div ref={underText}>
              {props.properties?.underText || props.lineSlots?.underText?.()}
            </div>
          </div>
        </div>
        <svg height={belowSlashLength.value + 5} ref={svg}>
          <g>
            <circle
              ref={circleOne}
              cx='5'
              cy={belowSlashLength.value}
              fill='none'
              r='2'
              stroke='black'
            />
            <circle
              cx='5'
              cy={belowSlashLength.value}
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
              d={`m5 ${belowSlashLength.value} l80 -${belowSlashLength.value}`}
            />
            <path
              ref={belowSlashLineSecond}
              stroke-dasharray='0, 65'
              fill='none'
              stroke='rgba(128, 142, 151, 0.8)'
              d={`m15 ${belowSlashLength.value - 10} l80 -${
                belowSlashLength.value
              }`}
            />
            <path
              ref={belowSlashLineThird}
              fill='none'
              stroke='rgb(131, 187, 186)'
              stroke-width='3'
              // TODO 计算长度
              d={'m25 60 l30 -30'}
            />

            <path
              ref={belowSlashLineFourth}
              fill='none'
              stroke='black'
              d={'m80 5 l10 0'}
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
