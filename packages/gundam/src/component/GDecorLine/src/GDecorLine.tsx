import { defineComponent, computed } from 'vue'

const GDecorLine = defineComponent({
  name: 'GDecorLine',
  setup(props, { slots }) {
    return () => <div>GDecorLine</div>
  },
})
export default GDecorLine
