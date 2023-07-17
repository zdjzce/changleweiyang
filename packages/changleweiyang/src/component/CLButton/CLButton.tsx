import { defineComponent, ref, Ref, inject } from 'vue'
import style from './style/index.scss'

const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String,
  },
  setup(props, { slots }) {
    const a = [1, 2, 3]
    return () => (
      <button class='cl-button' style={style.CLButton}>
        {slots?.default?.()}
      </button>
    )
  },
})
export default CLButton
