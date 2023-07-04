import { defineComponent, ref, onMounted } from 'vue';



const CLButton = defineComponent({
  name: 'CLButton',
  setup(props, { slots }) {


    return {
      slots
    }
  },


  render() {
    return (
      <button class="cl-button">
        { this.slots?.default?.() }
        
      </button>
    )
  }
})
export default CLButton