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
      <div style='display: flex;'>
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

              H629q-4, 4.005-8, 8, 
              H487q-4-4.005-8-8H275q-5,4.005-10,
              8H86q-3.5-4.005-7-8H15v-24L0,
              1008V917l15-13V201L0, 187V95L15,
              81V17H77L94, 1H264l17, 16H463L479, 2h93l15,15,

              H725ZM27, 28
              c0.008,16.127,2.464,16.369,6,
              25v99l-6,
              5V822l6,
              5V955l-6,
              5v75H326q30.5-35.49,
              61-71H679V836l34-31V178l-12-11V79l12-12V28H623l-8,
              9H494l-9-9H374l-9,
              9H192l-8-9H27Z'
          />
        </svg>
      </div>
    )
  },
})
export default GIrregularGeometricBg
