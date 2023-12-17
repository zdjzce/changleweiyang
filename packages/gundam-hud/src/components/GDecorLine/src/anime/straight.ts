import anime from 'animejs'
import type { LineElement } from '../instance'

export const setScaleAnime = (el: LineElement) => {
  el!.style['transformBox'] = 'fill-box'

  anime
    .timeline({
      targets: el,
      easing: 'easeInOutQuad',
    })
    .add({
      scale: 0,
      duration: 0,
    })
    .add({
      scale: 1,
      duration: 300,
    })
}

export const setRotateAnime = (el: LineElement) => {
  el!.style['transformOrigin'] = 'center center'
  anime({
    targets: el,
    easing: 'linear',
    rotate: 360,
    duration: 3500,
    loop: true,
  })
}

export const setMaskAnime = (
  elTop: LineElement,
  elBottom: LineElement,
  height: number,
) => {
  // 这个动画需要父容器被子元素撑开  然后设置子元素的 translateY
  anime({
    targets: elTop,
    easing: 'easeOutCubic',
    translateY: [height, 0],
    delay: 100,
    duration: 400,
  })

  anime({
    targets: elBottom,
    easing: 'easeOutCubic',
    translateY: [-height, 0],
    delay: 150,
    duration: 400,
  })
}

export const setPathOffsetAnime = (el: LineElement, delay = 150) => {
  anime({
    targets: el,
    easing: 'easeOutCubic',
    delay,
    duration: 400,
    strokeDashoffset: [anime.setDashoffset, 0],
  })
}

export const setCenterPathAnime = (el: LineElement, width: number) => {
  anime({
    targets: el,
    strokeDasharray: `${width}, 0`,
    strokeDashoffset: (el: HTMLElement | SVGElement | null) => {
      anime.setDashoffset(el)
      // 从中间开始绘制 所以得 / 2
      return [-Math.floor(width / 2), 0]
    },
    easing: 'easeOutCubic',
    delay: 400,
    duration: 700,
  })
}
