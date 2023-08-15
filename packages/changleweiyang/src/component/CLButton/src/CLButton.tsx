import { defineComponent, ref, Ref, inject, computed } from 'vue'
import style from './style/index.scss'
import { useClasses } from '@/hooks/classes'

const CLButton = defineComponent({
  name: 'CLButton',
  props: {
    type: String,
  },
  setup(props, { slots }) {
    const { defaultClass } = useClasses()
    const className = defaultClass('button')

    const Tag = computed(() => {
      return props?.tag === 'link' ? 'a' : 'button'
    })

    return () => (
      <Tag.value class={[className]} style={style.CLButton}>
        {slots?.default?.()}
        {className}
      </Tag.value>
    )
  },
})

// clwy-button
// $button-name: joinComponentVarName('button');

// .#{$button-name} {
//   background-color: getCssVarName('background', 'default');
// }
export default CLButton
