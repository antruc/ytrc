export default function resizeButtons(): void {
  const containerBT: NodeListOf<HTMLElement> =
    document.querySelectorAll('.container-bt')
  containerBT.forEach((i: HTMLElement): void => {
    i.style.width = window.innerWidth / 3 + 'px'
    i.style.height = window.innerHeight / 4 + 'px'
  })
  const buttonRC: NodeListOf<HTMLElement> =
    document.querySelectorAll('.button-rc')
  buttonRC.forEach((i: HTMLElement): void => {
    i.style.width = window.innerWidth / 3 - 20 + 'px'
    i.style.height = window.innerHeight / 4 - 20 + 'px'
  })
}
