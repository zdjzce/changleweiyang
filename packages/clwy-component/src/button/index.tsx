import { defineComponent, ref, onMounted } from 'vue';



const Button = defineComponent({
  name: 'Button',
  setup(props, { slots }) {


    return {
      slots
    }
  },


  render() {
    return (
      <button>asjdjasd</button>
    )
  }
})
export default Button