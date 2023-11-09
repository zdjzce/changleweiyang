import { generateClasses } from '@gundam/hooks/classes'
import { defineComponent, ref, onMounted, onBeforeMount } from 'vue'
import { props } from './IrregularGeometric'
import { IrregularStyles } from './instance'
const GIrregularGeometricBg = defineComponent({
  name: 'GIrregularGeometricBg',
  props,
  setup(props, { slots }) {
    // const classes = generateClasses('irregularGeometricBg', props)
    const calculatePath = (style: IrregularStyles) => {
      const { width, height, randomEdge } = style
      const rectangleEdges = [width, height, width, height]

      // 需要保留每次遍历后的最后点位。用于下次遍历的起始点位
      let startPoint = { x: 0, y: 0 }

      for (let i = 0; i < rectangleEdges.length; i++) {
        // 要绘制到的点位并且限制每次绘制的边的最大长度
        let maxLength = 0

        // 每轮随机的最大个数, 来判断是否要生成梯形
        let randomMax = 0
        while (maxLength < +rectangleEdges[i]) {
          maxLength = Math.floor(
            (+rectangleEdges[i] - Math.random() * +rectangleEdges[i]) / 3,
          )
          // 随机生成线条或者随机生成梯形
          const lineOrTrapezoid = Math.floor(Math.random() * 2)
          // 只要开始绘制梯形就得循环把它绘制完...
          if (lineOrTrapezoid <= 1 && randomMax < randomEdge) {
            // 随机生成梯形，延展的梯形斜边的角度为 45°，即在绘制梯形时，下一个点位的坐标是：延展出来的长度为x, 高度也为x
            randomMax++
          }
          // maxLength+=这次绘画的最终距离
          maxLength += 111
        }
      }
      console.log('style:', style)
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
