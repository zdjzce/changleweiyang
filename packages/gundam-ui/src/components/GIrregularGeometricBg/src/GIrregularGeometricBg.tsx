import { composeClass, generateClasses } from '@gundam-ui/hooks/classes'
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeMount,
  VNodeRef,
  computed,
  getCurrentInstance,
  reactive,
} from 'vue'
import { props } from './IrregularGeometric'
import {
  calculatePath,
  generateRandomTrapezoid,
} from '@gundam-ui/utils/trapezoidCalculations'
import anime from 'animejs/lib/anime.es.js'
import { nextTick } from 'vue'

const GIrregularGeometricBg = defineComponent({
  name: 'GIrregularGeometricBg',
  props,
  setup(props, { slots }) {
    const classes = generateClasses('irregularGeometricBg', props, [])

    const pathMask = ref('')
    const path = ref('')
    const getSvgPath = (styles: typeof props.styles) => {
      path.value = calculatePath(styles)
      pathMask.value = generateRandomTrapezoid(styles)
    }

    onMounted(() => {
      let contentHeight
      if (!props.styles.height) {
        contentHeight = getContentHeight()
      }

      getSvgPath({
        ...props.styles,
        height: contentHeight || props.styles.height || 300,
      })

      nextTick(() => {
        setBoxAnimation()
      })
    })

    const svgContent = ref<SVGElement & VNodeRef>()
    const regularSvgPath = ref<SVGPathElement & VNodeRef>()
    const viewBox = reactive<{ viewBox: string; box: DOMRect | undefined }>({
      viewBox: '0 0 0 0',
      box: undefined,
    })

    const getContentHeight = () => {
      const height = sectionContent.value?.offsetHeight
      if (height) {
        return height
      }
    }

    const setBoxAnimation = () => {
      viewBox.box = regularSvgPath.value?.getBBox()
      viewBox.viewBox = `${viewBox.box?.x} ${viewBox.box?.y} ${viewBox.box?.width} ${viewBox.box?.height}`
      anime({
        targets: [svgContent.value, sectionContent.value],
        // targets: [svgContent.value],
        easing: 'easeOutQuart',
        keyframes: [
          { opacity: 1, scaleY: 0, duration: 50 },
          { opacity: 0.2, scaleY: 0.15, duration: 50 },
          { opacity: 1, scaleY: 0.2, duration: 50 },
          { opacity: 0.2, scaleY: 0.25, duration: 50 },
          { opacity: 1, scaleY: 1, duration: 450 },
        ],
      })
    }

    const svgContainerStyle = computed(() => {
      return `max-width: ${
        props.styles?.width ?? viewBox.box?.width
      }px; max-height: ${props.styles?.height ?? viewBox.box?.height}px`
    })

    const sectionContent = ref<HTMLElement & VNodeRef>()

    return () => (
      /* TODO 可以组合成很多方式 white black 对调、单独线条、纯黑背景无mask 可以有很多花样 */
      <div class={classes.value} style={svgContainerStyle.value}>
        <svg
          class={composeClass(['irregularGeometricBg', 'svg'])}
          ref={svgContent}
          viewBox={viewBox.viewBox}
          xmlns='http://www.w3.org/2000/svg'>
          <mask id='irregular-child'>
            <path d={path.value} fill='white'></path>
            <path d={pathMask.value} fill='black'></path>
          </mask>

          <path
            ref={regularSvgPath}
            d={path.value}
            mask='url(#irregular-child)'
            fill={props.styles.background || 'black'}></path>
        </svg>
        <section
          ref={sectionContent}
          id='test-section'
          style={svgContainerStyle.value}>
          {slots.default?.()}
        </section>
      </div>
    )
  },
})

export default GIrregularGeometricBg
