import {
  defineComponent,
  ref,
  onMounted,
  watch,
  reactive,
  Ref,
  nextTick,
  computed,
} from 'vue'
import { decorStraightPinProps, props } from '../DecorLine'
import { DecorLine, DecorLineHash, DecorLineStraight } from '../instance'
import anime from 'animejs/lib/anime.es.js'
import { DecorLineStyle } from '@gundam/hud/style/index'
import { typewriterEffect } from '@gundam/hud/hooks/textEffect'

type StraightPinElement = HTMLElement | undefined
const defaultProperties: DecorLineStraight<'pin'> = {
  lineStyle: 'pin',
  direction: 'left',
  lineWidth: 250,
  circleRadius: 30,
  padding: 20,
  circleColor: 'rgba(38, 38, 38, 0.3)',
  mainLineColor: 'rgb(81, 104, 104)',
  minorLineColor: 'rgb(81, 104, 104)',
}

const StraightPin = defineComponent({
  props: decorStraightPinProps,
  setup(props, { slots }) {
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
      anime
        .timeline({
          targets: circleContainer.value,
          easing: 'easeInOutQuad',
        })
        .add({
          scale: 0,
          duration: 0,
        })
        .add({
          scale: 1,
          duration: 300,
        })

      anime({
        targets: circleOne.value,
        easing: 'linear',
        rotate: 360,
        duration: 3500,
        loop: true,
      })
    }

    const pathOne: Ref<StraightPinElement> = ref()
    const pathTwo: Ref<StraightPinElement> = ref()
    const setPathAnime = () => {
      anime({
        targets: pathOne.value,
        easing: 'easeOutCubic',
        delay: 150,
        duration: 400,
        strokeDashoffset: [anime.setDashoffset, 0],
      })

      anime({
        targets: pathTwo.value,
        strokeDasharray: '100, 0',
        strokeDashoffset: (el: HTMLElement | SVGElement | null) => {
          anime.setDashoffset(el)
          return [-50, 0]
        },
        easing: 'easeOutCubic',
        delay: 400,
        duration: 700,
      })
    }

    const content: Ref<StraightPinElement> = ref()
    const underText: Ref<StraightPinElement> = ref()
    const setSlotsAnime = () => {
      anime({
        targets: content.value,
        easing: 'easeOutCubic',
        translateY: [70, 0],
        delay: 100,
        duration: 400,
      })

      anime({
        targets: underText.value,
        easing: 'easeOutCubic',
        translateY: [-70, 0],
        delay: 150,
        duration: 400,
      })

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
      <div class={DecorLineStyle.relative}>
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
              stroke='rgba(38, 38, 38, 0.3)'
              stroke-width='1.5'
              stroke-dasharray='35,20'
            />
          </g>

          <path
            ref={pathOne}
            stroke='black'
            stroke-width='0.3'
            stroke-dasharray='0, 220'
            d={`m${circleX.value} ${halfHeight.value}, l${property.value.lineWidth} 0`}
          />

          <path
            ref={pathTwo}
            style='filter: drop-shadow(0px 0px 3px rgb(0 239 244 / 1));'
            stroke='rgb(81, 104, 104)'
            stroke-width='1'
            stroke-dasharray={`0, ${Math.floor(property.value.lineWidth / 2)}`}
            d={`m${property.value.lineWidth} ${
              halfHeight.value
            }, l-${Math.floor(property.value.lineWidth / 2)} 0`}
          />
        </svg>
      </div>
    )
  },
})

export default StraightPin
