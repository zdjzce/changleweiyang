import { defineComponent, ref, Ref, inject } from 'vue';
import style from './style/index.module.scss'


const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String
  },
  setup(props, { slots }) {

    return () => (
      <button class="cl-button" style={style.CLButton}>
        { slots?.default?.() }
      </button>
    )
  },

})   
export default CLButton