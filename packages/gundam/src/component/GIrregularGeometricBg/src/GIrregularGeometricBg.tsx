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

            l11,41

            v73, l-11,11
            v443,

            l2.5 149,

            s4.338,15.095,7.73,19.645
            v54,l-10,9,v111,l7,5,
            v68,l-7,6, v40, h-96, 
            
            q-4,4.005,-8,8, h-134, 
            q-4,-4.005,-8,-8,

            h-204, 

            q-5,4.005,-10,8, 

            h-179,

            q-3.5,-4.005,-7,-8,

            h-64,v-24, l-15,-15, v-91l15,-13, v-703, l-15,-14, v-92, l15,-14, v-64, h62, l17,-16, h170, l17,16,
            h182, l16,-15, h93, l15,15, h138, m-698,11, 

            c0.008,16.127,2.464,16.369,6,25,

            v99, l-6,5, v665, l6,5, v128, l-6,5, v75, h299, 

            q30.5,-35.49,61,-71,

            h292, v-128, l34,-31, v-627, l-12,-11, v-88, l12,-12, v-39, h-90, l-8,9, h-121, l-9,-9, h-111, l-9,9, h-173, l-8,-9, h-157z'
          />
        </svg>
      </div>
    )
  },
})
export default GIrregularGeometricBg
