export default function toggleIcon(data: string): void {
  const buttonElm: Element | null = document.querySelector(
    `[data-toggle="${data}"]`
  )
  if (buttonElm) {
    buttonElm.classList.toggle('clicked')
  }
}
