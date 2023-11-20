import { defineComponent, computed } from 'vue'

const GDecorBase = defineComponent({
  name: 'GDecorBase',
  setup(props, { slots }) {
    return () => <div>GDecorBase</div>
  },
})
export default GDecorBase
