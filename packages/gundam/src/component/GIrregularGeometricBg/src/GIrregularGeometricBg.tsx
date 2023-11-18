import { generateClasses } from '@gundam/hooks/classes'
import { defineComponent, ref, onMounted, onBeforeMount, nextTick } from 'vue'
import { props } from './IrregularGeometric'
import {
  calculatePath,
  generateRandomTrapezoid,
} from '@gundam/utils/trapezoidCalculations'

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
    onMounted(() => {
      nextTick(() => {
        const paths = document.getElementById('paths')
        const box = paths?.getBBox()
        viewBox.value = `${box?.x} ${box?.y} ${box?.width} ${box?.height}`
      })
    })

    return () => (
      <div class={classes.value}>
        <svg viewBox={viewBox.value} xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <clipPath id='clip'>
              <rect x='-10' y='-10' width='0' height='0'>
                <animate
                  attributeName='width'
                  from='0'
                  to='100%'
                  dur='0.6s'
                  fill='freeze'
                />
                <animate
                  attributeName='height'
                  from='0'
                  to='100%'
                  dur='0.7s'
                  fill='freeze'
                />
              </rect>
            </clipPath>
          </defs>

          <mask id='one'>
            {/* TODO 可以组合成很多方式 white black 对调、单独线条 可以有很多花样 */}
            <path d={path.value} fill='white' id='paths'></path>
            <path d={pathMask.value} fill='black'></path>
          </mask>

          <path
            d={path.value}
            clip-path='url(#clip)'
            mask='url(#one)'
            id='paths'
            stroke='black'
            class='line'></path>
        </svg>
      </div>
    )
  },
})
export default GIrregularGeometricBg
