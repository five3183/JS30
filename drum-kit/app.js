const keys = document.querySelectorAll('.key')

keys.forEach(key => {
   key.addEventListener('mousedown', () => {
      const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`)
      audio.currentTime = 0
      key.classList.add('playing')
      audio.play()
   })
   key.addEventListener('mouseup', () => {
      key.classList.remove('playing')
   })
});

window.addEventListener('keydown', (e) => {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if(!audio) {
      return
   } else {
      audio.currentTime = 0
      key.classList.add('playing')
      audio.play()
   }
})

window.addEventListener('keyup', (e) => {
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
   if(!key) {
      return
   } else {
      key.classList.remove('playing')
   }
})