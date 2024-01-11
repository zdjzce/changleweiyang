import anime from 'animejs'
import type { LineElement } from '../instance'
import { setPathOffsetAnime } from './straight'

export const slashAnime = (slashList: LineElement[]) => {
  let delay = 0
  slashList.forEach((slash, index) => {
    index % 2 === 0 ? (delay += 200) : (delay -= 200)
    setPathOffsetAnime(slash, delay)
  })
}

export const slashRunner = (slashList: LineElement[]) => {
  anime({
    targets: slashList[0],
    strokeDasharray: '45, 100',
    strokeDashoffset: (el: HTMLElement | SVGElement | null) => {
      anime.setDashoffset(el)
      return [0, -70]
    },
    easing: 'easeOutCubic',
    delay: 250,
    duration: 500,
  })

  anime({
    targets: slashList[1],
    strokeDasharray: '50, 300',
    strokeDashoffset: (el: HTMLElement | SVGElement | null) => {
      anime.setDashoffset(el)
      return [0, -170]
    },
    easing: 'easeOutCubic',
    delay: 550,
    duration: 600,
  })
}
