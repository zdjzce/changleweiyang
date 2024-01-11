import { defineComponent, computed, watch, ref, onMounted, nextTick } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'
import { setPathOffsetAnime } from '../anime'
import type { LineElement } from '../instance'
import { slashAnime, slashRunner } from '../anime/polyline'
import { DecorLineStyle } from '@gundam/hud/style'
import { typewriterEffect } from '@gundam/util/effect'
import {
  convertRealWorldPointToSVGPoint,
  convertSVGPointToRealWorldPoint,
  getPointsOnLineSegment,
} from '@gundam/util/calculate/lineSegment'

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
      getPoint()

      slashAnime([belowSlashLine.value, line.value, lineSecond.value])

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

    const thirdLinePointStart = ref()
    const thirdLinePointEnd = ref()
    const fourthLinePointStart = ref()
    const fifthLinePointStart = ref()
    const getPoint = () => {
      const svgElement = belowSlashLine.value as unknown as SVGPathElement
      const start = svgElement.getPointAtLength(0)
      const end = svgElement.getPointAtLength(svgElement.getTotalLength())

      const realWorldStart = convertSVGPointToRealWorldPoint(start, svgElement)
      const realWorldEnd = convertSVGPointToRealWorldPoint(end, svgElement)
      const linePaths = getPointsOnLineSegment(realWorldStart, realWorldEnd, 10)
      thirdLinePointStart.value = convertRealWorldPointToSVGPoint(
        linePaths[Math.floor(linePaths.length / 3)],
        svgElement,
      )

      const thirdLinePointEndDom = convertRealWorldPointToSVGPoint(
        linePaths[7],
        svgElement,
      )

      thirdLinePointEnd.value = {
        x: thirdLinePointEndDom.x - thirdLinePointStart.value.x,
        y: thirdLinePointEndDom.y - thirdLinePointStart.value.y,
      }

      fourthLinePointStart.value = convertRealWorldPointToSVGPoint(
        linePaths[7],
        svgElement,
      )

      fifthLinePointStart.value = convertRealWorldPointToSVGPoint(
        linePaths[9],
        svgElement,
      )

      nextTick(() => {
        setPathOffsetAnime(belowSlashLineThird.value, 300)
        setPathOffsetAnime(belowSlashLineFourth.value, 100)
        setPathOffsetAnime(belowSlashLineFifth.value, 150)
      })
    }

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
              d={`m6 ${belowSlashLength.value} l80 -${belowSlashLength.value}`}
            />
            <path
              ref={belowSlashLineThird}
              fill='none'
              stroke='rgb(131, 187, 186)'
              stroke-width='3'
              d={`m${thirdLinePointStart.value?.x} ${thirdLinePointStart.value?.y} l${thirdLinePointEnd.value?.x} ${thirdLinePointEnd.value?.y}`}
            />

            <path
              ref={belowSlashLineFourth}
              fill='none'
              stroke='black'
              d={`m${fourthLinePointStart.value?.x} ${fourthLinePointStart.value?.y} l10 0`}
            />
            <path
              ref={belowSlashLineFifth}
              fill='none'
              stroke='black'
              d={`m${fifthLinePointStart.value?.x} ${fifthLinePointStart.value?.y} l30 0`}
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
