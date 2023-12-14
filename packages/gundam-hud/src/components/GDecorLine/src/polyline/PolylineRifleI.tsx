import { defineComponent, computed, watch } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'

const PolylineRifleI = defineComponent({
  name: 'PolylineRifleI',
  props: decorPolylineRifleIProps,
  setup(props, { slots }) {
    watch(
      () => props,
      (prop) => {
        console.log('prop:', prop)
      },
      { deep: true, immediate: true },
    )

    return () => (
      <div>
        <svg>
          <circle cx='5' cy='100' fill='none' r='2' stroke='black' />
          <circle cx='5' cy='100' fill='none' r='4' stroke='black' />
          <path></path>
        </svg>
      </div>
    )
  },
})
export default PolylineRifleI
