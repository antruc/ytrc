export default function displayPage(): void {
  const root: Element | null = document.querySelector('#app')
  if (root) {
    root.classList.add('is-visible')
  }
}
