import sendKey from './sendKey.js'
import toggleIcon from './toggleIcon.js'

export default function handler() {
  document.addEventListener('click', (event) => {
    const dataPost = event.target.dataset.post
    const dataToggle = event.target.dataset.toggle
    if (dataPost) {
      sendKey(dataPost)
      if (dataToggle) {
        toggleIcon(dataToggle)
      }
    }
  })
}
