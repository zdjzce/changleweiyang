import anime from 'animejs/lib/anime.es.js'
const typewriterEffect = (element, text: string) => {
  const textArray = text.split('')
  const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const animation = anime.timeline({
    targets: element,
  })

  textArray.forEach((char, i) => {
    for (let j = 0; j < 2; j++) {
      const randomChar =
        possibleChars[Math.floor(Math.random() * possibleChars.length)]
      animation.add({
        targets: element,
        update: () =>
          (element!.innerText = text.substring(0, i) + randomChar || ''),
        duration: 10,
        easing: 'linear',
      })
    }

    animation.add({
      targets: element,
      update: () => (element!.innerText = text.substring(0, i + 1)),
      duration: 50,
      easing: 'easeOutQuad',
    })
  })

  animation.play()
}

export { typewriterEffect }
