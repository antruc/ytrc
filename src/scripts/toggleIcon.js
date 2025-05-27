export default function toggleIcon(data) {
  const buttonElm = document.querySelector(`[data-toggle="${data}"]`)
  buttonElm.classList.toggle('clicked')
}
