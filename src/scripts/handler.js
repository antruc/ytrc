import sendKey from './sendKey.js'
import toggleIcon from './toggleIcon.js'

export default function handler(event) {
  let dataPost = event.target.dataset.post
  let dataToggle = event.target.dataset.toggle
  if (dataPost) {
    sendKey(dataPost)
    if (dataToggle) {
      toggleIcon(dataToggle)
    }
  }
}
