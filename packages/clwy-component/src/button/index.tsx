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
      <div>
        {
          this.slots?.default?.()
        }
      </div>
    )
  }
})
export default Button