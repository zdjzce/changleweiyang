import { defineComponent, ref, Ref, inject, computed } from 'vue'
import style from '../style/index.scss'
import { useClasses } from '@/hooks/classes'
import { props } from './button'

const CLButton = defineComponent({
  name: 'CLButton',
  props,
  setup(props, { slots }) {
    const { defaultClass } = useClasses()
    const className = defaultClass('button')

    const Tag = computed(() => {
      return props?.tag === 'link' ? 'a' : 'button'
    })

    return () => (
      <Tag.value class={[className]} style={style.CLButton}>
        {slots?.default?.()}
      </Tag.value>
    )
  },
})
export default CLButton
