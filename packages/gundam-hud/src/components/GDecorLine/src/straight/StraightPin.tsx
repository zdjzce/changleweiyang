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
import { DecorLine, DecorLineHash } from '../instance'
import anime from 'animejs/lib/anime.es.js'
import { DecorLineStyle } from '@gundam/hud/style/index'
import { typewriterEffect } from '@gundam/hud/hooks/textEffect'

type StraightPinElement = HTMLElement | undefined
const StraightPin = defineComponent({
  props: decorStraightPinProps,
  setup(props, { slots }) {
    const property: Ref<DecorLineHash['straight'] | undefined> = ref(
      props.properties,
    )

    onMounted(() => {
      setAnime()
    })

    /* TODO 优化魔法数字 */
    const containerStyle = computed(() => {
      const width = props.properties?.lineWidth || 250
      const circleRadius = props.properties?.circleRadius || 30
      console.log('props.properties:', props.properties)
      return `max-width: ${width + circleRadius}px; max-height: ${
        circleRadius * 2 + 40
      }px;`
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
            <path
              ref={circleOne}
              class={DecorLineStyle.circleAnimate}
              d='m 31,50 m -30, 0, a 30,30 0 1,0 60,0, a 30,30 0 1,0 -60,0'
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
            d='m30 50, l220 0'
          />

          <path
            ref={pathTwo}
            style='filter: drop-shadow(0px 0px 3px rgb(0 239 244 / 1)); 
            '
            stroke='rgb(81, 104, 104)'
            stroke-width='1'
            stroke-dasharray='0, 100'
            d='m250 50, l-100 0'
          />
        </svg>
      </div>
    )
  },
})

export default StraightPin
