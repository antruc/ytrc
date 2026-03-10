export default function toggleIcon(data: string): void {
  document.querySelector(`[data-toggle="${data}"]`)?.classList.toggle('clicked')
}
