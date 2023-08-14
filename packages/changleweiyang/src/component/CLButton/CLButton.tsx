import { defineComponent, ref, Ref, inject } from 'vue'
import style from './style/index.scss'
import { Classes } from '@/service/Classes'

const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String,
  },
  setup(props, { slots }) {
    const { defaultClass } = Classes.useClasses()
    const className = defaultClass('button')
    return () => (
      <button class={[className]} style={style.CLButton}>
        {slots?.default?.()}
        {className}
      </button>
    )
  },
})

// clwy-button
// $button-name: joinComponentVarName('button');

// .#{$button-name} {
//   background-color: getCssVarName('background', 'default');
// }
export default CLButton
