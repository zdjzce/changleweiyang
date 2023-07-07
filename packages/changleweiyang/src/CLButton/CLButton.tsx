import { defineComponent, ref, Ref, inject } from 'vue';



const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String
  },
  setup(props, { slots }) {

    return () => (
      <button class="cl-button">
        { slots?.default?.() }
      </button>
    )
  },

})
export default CLButton