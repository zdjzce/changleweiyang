import { generateClasses } from '@gundam/hooks/classes'
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeMount,
  VNodeRef,
  computed,
  getCurrentInstance,
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

    const viewBox = ref<{ viewBox: string; box: DOMRect | undefined }>({
      viewBox: '0 0 0 0',
      box: undefined,
    })
    const svgContent = ref<SVGElement & VNodeRef>()
    const regularSvgPath = ref<SVGPathElement & VNodeRef>()

    onMounted(() => {
      viewBox.value.box = regularSvgPath.value?.getBBox()
      viewBox.value.viewBox = `${viewBox.value.box?.x} ${viewBox.value.box?.y} ${viewBox.value.box?.width} ${viewBox.value.box?.height}`
      anime({
        targets: svgContent.value,
        translateX: 0,
        easing: 'easeOutQuart',
        keyframes: [
          { opacity: 1, scaleY: 0.05, duration: 50 },
          { opacity: 0.2, scaleY: 0.25, duration: 50 },
          { opacity: 1, scaleY: 0.35, duration: 50 },
          { opacity: 0.2, scaleY: 0.55, duration: 50 },
          { opacity: 1, scaleY: 1, duration: 450 },
        ],
      })

      console.log(
        'getCurrentInstance()?.subTree.children',
        getCurrentInstance()?.subTree.children,
      )
    })

    const svgContainerStyle = computed(() => {
      return `max-width: ${viewBox.value.box?.width}px; max-height: ${viewBox.value.box?.height}px`
    })

    return () => (
      /* TODO 可以组合成很多方式 white black 对调、单独线条、纯黑背景无mask 可以有很多花样 */
      <div class={classes.value} style={svgContainerStyle.value}>
        <svg
          // TODO change class
          class='test-svg'
          style='transform: scaleY(0.1);'
          ref={svgContent}
          viewBox={viewBox.value.viewBox}
          xmlns='http://www.w3.org/2000/svg'>
          <mask id='irregular-child'>
            <path d={path.value} fill='white'></path>
            <path d={pathMask.value} fill='black'></path>
          </mask>

          <path
            ref={regularSvgPath}
            d={path.value}
            mask='url(#irregular-child)'
            stroke='black'></path>
        </svg>
        <section>{slots.default?.()}</section>
      </div>
    )
  },
})

export default GIrregularGeometricBg
