export default function toggleIcon(data) {
  let buttonElm = document.querySelector(`[data-toggle="${data}"]`)
  buttonElm.classList.toggle('clicked')
}
