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
    // const classes = generateClasses('irregularGeometricBg', props)

    const pathMask = ref('')
    const path = ref('')
    onBeforeMount(() => {
      // path.value = calculatePath(props.styles)
      path.value = generateRandomTrapezoid(props.styles)
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
      <div>
        <svg viewBox={viewBox.value} xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <mask id='one'>
              <rect width='100%' height='100%' fill='white' />
              <path d={pathMask.value} fill='black'></path>
            </mask>
          </defs>

          {/* <path d={path.value} fill='black' mask='url(#one)' id='paths'></path> */}
          <path d={path.value} fill='none' stroke='black' id='paths'></path>
        </svg>
      </div>
    )
  },
})
export default GIrregularGeometricBg
