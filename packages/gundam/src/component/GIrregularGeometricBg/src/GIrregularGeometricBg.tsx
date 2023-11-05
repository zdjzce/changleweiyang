import { generateClasses } from '@gundam/hooks/classes'
import { defineComponent, ref, onMounted } from 'vue'
const GIrregularGeometricBg = defineComponent({
  name: 'GIrregularGeometricBg',
  setup(props, { slots }) {
    const classes = generateClasses('irregularGeometricBg', props, [
      'type',
      'size',
      'loading',
    ])

    return () => (
      <div>
        <svg
          id='组_3'
          data-name='组 3'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 736 1058'>
          <path
            id='形状_321_1'
            data-name='形状 321 1'
            class='cls-1'
            d='
              M725,17
              c-0.632, 25.8.517, 27.368, 11, 41, 
              v73, l-11,11, V585
              c0,37.309.475,142.539,2.27,149.355
              S731.608,749.45,735,754, v54, l-10, 9,
              V928, l7,5, v68, l-7, 6, v40, 

              H629, q-4, 4.005-8, 8, 
              H487, q-4-4.005-8-8, H275, 
              q-5,4.005-10, 8, 
              H86, 
              q-3.5-4.005-7-8, 
              H15, v-24, L0, 1008, V917, l15-13, V201, L0, 187, V95, L15,
              81, V17, H77, L94, 1, H264, l17, 16, H463, L479, 2, h93, l15, 15,

              H725, ZM27, 28,
              c0.008, 16.127, 2.464, 16.369, 6, 25, 
              v99, l-6, 5, V822, l6, 5, V955, l-6, 5, v75, H326, 
              q30.5, -35.49, 61, -71, 
              H679, V836, l34, -31, V178, l-12, -11, V79, l12, -12, V28, H623, l-8, 9, 
              H494, l-9, -9, 
              H374, l-9, 9, 
              H192, l-8, -9, 
              H27, Z'
          />
        </svg>
      </div>
    )
  },
})
export default GIrregularGeometricBg
