import { useClasses } from '@gundam/util/hooks/classes'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { decorStraightCalibrationProps } from '../DecorLine'
import { setCenterPathAnime } from '../anime'
import { DecorLineStyle } from '@gundam/hud/style'
import anime from 'animejs'
const StraightCalibration = defineComponent({
  name: 'StraightCalibration',
  props: decorStraightCalibrationProps,
  setup(props, { slots }) {
    const { defaultClass } = useClasses('line')
    const property = computed(() => {
      return { ...props.properties }
    })
    const pathOne = ref()
    const pathTwo = ref()
    const pathLeft = ref()
    const pathRight = ref()
    const pathCalibration = ref()

    onMounted(() => {
      setCenterPathAnime(pathOne.value, 150)
      setCenterPathAnime(pathTwo.value, 300)

      anime({
        targets: pathLeft.value,
        translateX: -140,
        easing: 'easeOutCubic',
        duration: 450,
        delay: 450,
      })
      anime({
        targets: pathRight.value,
        translateX: 145,
        easing: 'easeOutCubic',
        duration: 450,
        delay: 450,
      })

      anime({
        targets: pathCalibration.value,
        width: 110,
        easing: 'easeOutCubic',
        duration: 450,
        delay: 450,
      })
    })

    return () => (
      <div>
        <svg class={DecorLineStyle.WH100}>
          <path
            ref={pathOne}
            style='filter: drop-shadow(0px 0px 3px rgb(0 239 244 / 1));'
            stroke={property.value.minorLineColor}
            stroke-width='1'
            stroke-dasharray={'0, 150'}
            d={'m75 50, l150 0'}
          />
          <path
            ref={pathTwo}
            stroke='black'
            stroke-width='1'
            stroke-dasharray={'0, 300'}
            d={'m0 50, l300 0'}
          />
          <path
            ref={pathLeft}
            d='m140 50, l6 -6, l-6 6, l6 6, l-6 -6'
            stroke='black'
            fill='none'
          />
          <path
            ref={pathRight}
            d='m155 50, l-6 -6, l6 6, l-6 6, l6 -6'
            stroke='black'
            fill='none'
          />
          {/* 刻度位移pathOne的四分之一 TODO 动画 */}
          <g transform='translate(110, 0)' ref={pathCalibration} width={0}>
            {Array.from({ length: 10 }, (_, i) => i * 10).map((offset) => (
              <line x1={offset} y1='50' x2={offset} y2={45} stroke='black' />
            ))}
          </g>
        </svg>
      </div>
    )
  },
})
export default StraightCalibration
