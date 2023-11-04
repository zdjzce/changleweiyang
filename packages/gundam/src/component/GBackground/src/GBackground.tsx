import { defineComponent, ref, onMounted } from 'vue'
const GBackground = defineComponent({
  name: 'GBackground',
  setup(props, { slots }) {
    return () => <div>test</div>
  },
})
export default GBackground
