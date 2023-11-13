import { generateClasses } from '@gundam/hooks/classes'
import { defineComponent, ref, onMounted, onBeforeMount } from 'vue'
import { props } from './IrregularGeometric'
import { IrregularStyles } from './instance'
import { calculateTopLength } from '@gundam/utils/trapezoidCalculations'
const GIrregularGeometricBg = defineComponent({
  name: 'GIrregularGeometricBg',
  props,
  setup(props, { slots }) {
    // const classes = generateClasses('irregularGeometricBg', props)
    const calculatePath = (style: IrregularStyles) => {
      const { width, height, randomEdge } = style
      const rectangleEdges = [width, height, width, height]
      const maxY = 10

      // 需要保留每次遍历后的最后点位。用于下次遍历的起始点位
      let startPoint = { x: 0, y: 0 }
      let path = 'm0 0'

      // 偶数顶边，奇数底边
      for (let i = 0; i < 1; i++) {
        // 当前需要绘制的线段与梯形数量，单条线段数量应是梯形个数 + 1
        const maxCount = randomEdge * 2 + 1
        // 限制每次绘制的最大长度
        const maxLength = Math.floor(+rectangleEdges[i] / maxCount)
        // 当前已绘制梯形个数
        let randomMax = 0
        // 上一个绘制的是什么图形
        let isTrapezoid = Math.random() < 0.5

        for (let j = 0; j < maxCount; j++) {
          if (!isTrapezoid && randomMax < randomEdge) {
            const topLine = calculateTopLength(maxLength, 60)
            console.log('topLine:', topLine)
            const x = Math.floor((maxLength - topLine) / 2)
            path += ` l${x} -${maxY} l${topLine} 0 l${x} ${maxY}`
            // 右边的边 path += ` l${maxY} ${x}  l0 ${topLine} l${-maxY} ${x} `

            randomMax += 1
            isTrapezoid = true
          } else {
            // 线条
            path += ` l${maxLength} 0`
            // 右边是 path += ` 0 l${maxLength}`
            // 底边是 path += ` l${-maxLength} 0`
            // 左边是 path += ` 0 l${-maxLength}`

            isTrapezoid = false
          }

          // 转弯的逻辑
        }

        startPoint = { x: 0, y: 0 }
      }
      console.log('path:', path)
    }

    onBeforeMount(() => {
      calculatePath(props.styles)
      console.log('calculatePath(props.styles):', calculatePath(props.styles))
    })

    return () => (
      <div>
        {/* <svg
          id='组_3'
          data-name='组 3'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 736 1058'>
          <path
            id='形状_321_1'
            data-name='形状 321 1'
            class='cls-1'
            d='
            M725,17, l11,41, v73, l-11,11, v443, l2.5 149, l7.73, 19, v54, l-10, 9 ,v111, l7, 5, v68,l-7,6, v40, h-96, 
            l-8,8, h-134, l-8,-8,
            h-204, l-10,8, h-179, l-7,-8, h-64, v-24, l-15,-15, v-91, l15,-13, v-703, l-15,-14, v-92, l15,-14, v-64, h62, l17,-16, h170, l17,16,
            h182, l16,-15, h93, l15,15, h138, 
            m-698,11, 
            c0.008,16.127,2.464,16.369,6,25, 
            v99, l-6,5, v665, l6,5, v128, l-6,5, v75, h299, l61,-71,

            h292, v-128, l34,-31, v-627, l-12,-11, v-88, l12,-12, v-39, h-90, l-8,9, h-121, l-9,-9, h-111, l-9,9, h-173, l-8,-9, h-157z'
          />
        </svg> */}
      </div>
    )
  },
})
export default GIrregularGeometricBg
