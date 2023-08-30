import { defineComponent, ref, Ref, inject, computed } from 'vue'
import style from '../style/index.scss'
import { generateClasses, useClasses } from '@/hooks/classes'
import { props } from './button'

const CLButton = defineComponent({
  name: 'CLButton',
  props,
  setup(props, { slots }) {
    // const { defaultClass, conditionClass } = useClasses('button', props)
    // const className = defaultClass('button')
    const Tag = computed(() => {
      return props?.tag === 'link' ? 'a' : 'button'
    })

    const classes = generateClasses('button', props, [
      'type',
      'size',
      'loading',
    ])

    return () => (
      <Tag.value class={classes} style={style.CLButton}>
        {slots?.default?.()}
      </Tag.value>
    )
  },
})
export default CLButton
