import { defineComponent, ref, onMounted, watch, reactive, Ref } from 'vue'
import { decorStraightProps, props } from '../DecorLine'
import { DecorLineStyle } from '@gundam/hud/style/index'
import { DecorLine, DecorLineHash } from '../instance'
import anime from 'animejs/lib/anime.es.js'

const StraightPin = defineComponent({
  props: decorStraightProps,
  setup(props, { slots }) {
    const property: Ref<DecorLineHash['straight'] | undefined> = ref(
      props.properties,
    )

    onMounted(() => {
      setAnime()
    })

    const circleOne: Ref<HTMLElement | undefined> = ref()
    const circleContainer: Ref<HTMLElement | undefined> = ref()
    const pathOne: Ref<HTMLElement | undefined> = ref()
    const pathTwo: Ref<HTMLElement | undefined> = ref()

    const setAnime = () => {
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

      const path = anime.path(pathOne.value || '')

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

    return () => (
      <div
        style='max-width: 250px; max-height: 100px;'
        class={DecorLineStyle.relative}>
        <svg
          class={DecorLineStyle.WH100}
          style='max-width: 250px; max-height: 100px;'>
          <foreignObject x='0' y='0' width='100%' height='100%'>
            <div class={[DecorLineStyle.absoluteRightBottomHalf]}>
              {props.lineSlots?.content?.()}
            </div>
          </foreignObject>

          <g ref={circleContainer} class={DecorLineStyle.circleAnimate}>
            <path
              ref={circleOne}
              class={DecorLineStyle.circleAnimate}
              d='m 31,50 m -30, 0, a 30,30 0 1,0 60,0, a 30,30 0 1,0 -60,0'
              fill='none'
              stroke='red'
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
            class={DecorLineStyle.path}
            stroke='red'
            stroke-width='1'
            stroke-dasharray='0, 100'
            d='m250 50, l-100 0'
          />
        </svg>

        {/* {props.lineSlots?.content?.()} */}
        {props.lineSlots?.underText?.()}
      </div>
    )
  },
})

export default StraightPin
