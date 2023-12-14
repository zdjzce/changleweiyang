import {
  defineComponent,
  ref,
  onMounted,
  type Ref,
  nextTick,
  computed,
  watch,
} from 'vue'
import { decorStraightPinProps } from '../DecorLine'
import type { DecorLineStraight } from '../instance'
import anime from 'animejs/lib/anime.es.js'
import { DecorLineStyle } from '@gundam/hud/style/index'
import { typewriterEffect } from '@gundam/util/effect'
import { generateClasses, useClasses } from '@gundam/util/hooks/classes'
import {
  setCenterPathAnime,
  setMaskAnime,
  setPathOffsetAnime,
  setRotateAnime,
  setScaleAnime,
} from '../anime'

type StraightPinElement = HTMLElement | undefined
const defaultProperties: DecorLineStraight<'pin'> = {
  lineStyle: 'pin',
  direction: 'left',
  lineWidth: 280,
  circleRadius: 30,
  padding: 20,
  // TODO 获取主题色
  circleColor: 'rgba(38, 38, 38, 0.3)',
  mainLineColor: 'black',
  minorLineColor: 'rgb(81, 104, 104)',
}

const StraightPin = defineComponent({
  props: decorStraightPinProps,
  setup(props, { slots }) {
    const { defaultClass } = useClasses('line')
    const property = computed(() => {
      return { ...defaultProperties, ...props.properties }
    })

    onMounted(() => {
      setAnime()
    })

    const circleX = computed(() => property.value.circleRadius + 1)
    const halfHeight = computed(
      () => property.value.circleRadius + property.value.padding!,
    )

    const containerStyle = computed(() => {
      return `max-width: ${
        property.value.lineWidth + property.value.circleRadius
      }px; max-height: ${halfHeight.value * 2}px;`
    })

    const setAnime = () => {
      setCircleAnime()
      setPathAnime()
      setSlotsAnime()
    }

    const circleOne: Ref<StraightPinElement> = ref()
    const circleContainer: Ref<StraightPinElement> = ref()
    const setCircleAnime = () => {
      setScaleAnime(circleContainer.value)
      setRotateAnime(circleOne.value)
    }

    const pathOne: Ref<StraightPinElement> = ref()
    const pathTwo: Ref<StraightPinElement> = ref()
    const setPathAnime = () => {
      setPathOffsetAnime(pathOne.value)
      setCenterPathAnime(
        pathTwo.value,
        Math.floor(property.value.lineWidth! / 2),
      )
    }

    const content: Ref<StraightPinElement> = ref()
    const underText: Ref<StraightPinElement> = ref()
    const setSlotsAnime = () => {
      setMaskAnime(content.value, underText.value, halfHeight.value)

      nextTick(() => {
        if (props.properties?.typeWriter) {
          props.properties?.content &&
            typewriterEffect(content.value, content.value?.innerText || '')

          props.properties?.underText &&
            typewriterEffect(underText.value, underText.value?.innerText || '')
        }
      })
    }

    return () => (
      <div
        class={[DecorLineStyle.relative, DecorLineStyle[defaultClass('line')]]}>
        <svg class={DecorLineStyle.WH100} style={containerStyle.value}>
          <foreignObject x='0' y='0' width='100%' height='100%'>
            <div class={[DecorLineStyle.content]}>
              <div ref={content} style={props.properties?.contentStyle}>
                {props.properties?.content || props.lineSlots?.content?.()}
              </div>
            </div>

            <div class={DecorLineStyle.underText}>
              <div ref={underText} style={props.properties?.underTextStyle}>
                {props.properties?.underText || props.lineSlots?.underText?.()}
              </div>
            </div>
          </foreignObject>

          <g ref={circleContainer} class={DecorLineStyle.circleAnimate}>
            <circle
              ref={circleOne}
              class={DecorLineStyle.circleAnimate}
              // 落笔点 x 应是半径 + 1
              cx={circleX.value}
              // 落笔点 y 应是高度的一半
              cy={halfHeight.value}
              r={property.value.circleRadius}
              fill='none'
              stroke={property.value.circleColor}
              stroke-width='1.5'
              stroke-dasharray='35,20'
            />
          </g>

          <path
            ref={pathOne}
            stroke={property.value.mainLineColor}
            stroke-width='0.3'
            stroke-dasharray={`0, ${property.value.lineWidth}`}
            d={`m${circleX.value} ${halfHeight.value}, l${property.value.lineWidth} 0`}
          />

          <path
            ref={pathTwo}
            style='filter: drop-shadow(0px 0px 3px rgb(0 239 244 / 1));'
            stroke={property.value.minorLineColor}
            stroke-width='1'
            stroke-dasharray={`0, ${Math.floor(property.value.lineWidth / 2)}`}
            d={`m${property.value.lineWidth + circleX.value} ${
              halfHeight.value
            }, l-${Math.floor(property.value.lineWidth / 2)} 0`}
          />
        </svg>
      </div>
    )
  },
})

export default StraightPin
