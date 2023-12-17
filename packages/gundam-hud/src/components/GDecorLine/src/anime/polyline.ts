import anime from 'animejs'
import type { LineElement } from '../instance'
import { setPathOffsetAnime } from './straight'

export const slashAnime = (slashList: LineElement[]) => {
  setPathOffsetAnime(slashList[0])
  anime({
    targets: slashList[1],
    strokeDasharray: '45, 100',
    strokeDashoffset: (el: HTMLElement | SVGElement | null) => {
      anime.setDashoffset(el)
      return [0, -70]
    },
    easing: 'easeOutCubic',
    delay: 250,
    duration: 400,
  })
  setPathOffsetAnime(slashList[2], 350)
}
