import { useLocale } from '@/CLConfig/CLLocaleConfig';
import { defineComponent, ref, onMounted, inject } from 'vue';



const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String
  },
  setup(props, { slots }) {

    const locale = useLocale('Button')
    const locale2 = inject('test')

    return () => (
      <button class="cl-button">
        { slots?.default?.() }

        {/* { locale.value?.test } */}
        { locale2 }
      </button>
    )
  },

})
export default CLButton