import { generateClasses } from '@gundam/hooks/classes'
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeMount,
  nextTick,
  VNodeRef,
} from 'vue'
import { props } from './IrregularGeometric'
import {
  calculatePath,
  generateRandomTrapezoid,
} from '@gundam/utils/trapezoidCalculations'
import anime from 'animejs/lib/anime.es.js'

const GIrregularGeometricBg = defineComponent({
  name: 'GIrregularGeometricBg',
  props,
  setup(props, { slots }) {
    const classes = generateClasses('irregularGeometricBg', props, [])

    const pathMask = ref('')
    const path = ref('')
    onBeforeMount(() => {
      path.value = calculatePath(props.styles)
      pathMask.value = generateRandomTrapezoid(props.styles)
    })

    const viewBox = ref('0 0 0 0')
    const svgContent = ref<SVGElement & VNodeRef>()
    const regularSvgPath = ref<SVGPathElement & VNodeRef>()
    onMounted(() => {
      console.log('svgContent:', svgContent.value)
      const box = regularSvgPath.value?.getBBox()
      viewBox.value = `${box?.x} ${box?.y} ${box?.width} ${box?.height}`
      anime({
        targets: svgContent.value,
        translateX: 0,
        height: '100%',
        // easing: 'easeOutQuad',
        // easing: 'easeOutQuint',
        // easing: 'easeInOutQuad',
        easing: 'easeOutQuart',
        keyframes: [
          { opacity: 1, scaleY: 0.05, duration: 50 },
          { opacity: 0.5, scaleY: 0.25, duration: 50 },
          { opacity: 1, scaleY: 0.35, duration: 50 },
          { opacity: 0.5, scaleY: 0.55, duration: 50 },
          { opacity: 1, scaleY: 1, duration: 450 },
        ],
      })
    })

    return () => (
      /* TODO 可以组合成很多方式 white black 对调、单独线条 可以有很多花样 */
      <div class={classes.value}>
        <svg
          height='0'
          style='transform: scaleY(0.1);'
          ref={svgContent}
          viewBox={viewBox.value}
          xmlns='http://www.w3.org/2000/svg'>
          <mask id='one'>
            <path d={path.value} fill='white'></path>
            <path d={pathMask.value} fill='black'></path>
          </mask>

          <path
            ref={regularSvgPath}
            d={path.value}
            mask='url(#one)'
            stroke='black'
            class='line'></path>
        </svg>
      </div>
    )
  },
})

export default GIrregularGeometricBg
