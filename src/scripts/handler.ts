import sendKey from './sendKey.ts'
import toggleIcon from './toggleIcon.ts'

export default function handler(): void {
  document.addEventListener('click', (event: MouseEvent): void => {
    const target: HTMLButtonElement = event.target as HTMLButtonElement
    const dataPost: string | undefined = target.dataset.post
    const dataToggle: string | undefined = target.dataset.toggle
    if (dataPost) {
      sendKey(dataPost)
      if (dataToggle) {
        toggleIcon(dataToggle)
      }
    }
  })
}
