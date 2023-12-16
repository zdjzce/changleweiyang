import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import { decorPolylineRifleIProps } from '../DecorLine'
import { setPathOffsetAnime } from '../anime'

const PolylineRifleI = defineComponent({
  name: 'PolylineRifleI',
  props: decorPolylineRifleIProps,
  setup(props, { slots }) {
    watch(
      () => props,
      (prop) => {
        console.log('prop:', prop)
      },
      { deep: true, immediate: true },
    )

    const circleOne = ref<HTMLElement | undefined>()
    const circleTwo = ref<HTMLElement | undefined>()
    onMounted(() => {
      setPathOffsetAnime(circleOne.value)
      setPathOffsetAnime(circleTwo.value, 500)
    })

    return () => (
      <div>
        <svg>
          <circle
            ref={circleOne}
            cx='5'
            cy='90'
            fill='none'
            r='2'
            stroke='black'
          />
          <circle
            cx='5'
            cy='90'
            fill='none'
            r='4'
            stroke='black'
            ref={circleTwo}
          />
          <path fill='none' stroke='black' d='m5 90 l80 -80'></path>
          {/* 第二条线流动后消失 */}
          {/* <path fill='none' stroke='red' d='m5 90 l80 -80'></path> */}
          {/* 第三条线流动后存在 只长一半 TODO 但d先这么写 还是可以使用一样的 d，只不过 dash 修改一下*/}
          <path fill='none' stroke='red' d='m5 90 l40 -40'></path>

          <path fill='none' stroke='black' d='m85 10 l250 0'></path>
          {/* TODO 跟前面一样有很多条重叠的线 */}
          {/* <path fill='none' stroke='black' d='m85 10 l250 0'></path> */}

          {/* TODO 第四条先始终存在 */}
          <path fill='none' stroke='black' d='m79 15 l20 0'></path>
          <path fill='none' stroke='black' d='m79 15 l20 0'></path>
        </svg>
      </div>
    )
  },
})
export default PolylineRifleI
