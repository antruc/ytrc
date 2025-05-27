export default function resizeButtons() {
  const containerBT = document.querySelectorAll('.container-bt')
  containerBT.forEach((i) => {
    i.style.width = window.innerWidth / 3 + 'px'
    i.style.height = window.innerHeight / 4 + 'px'
  })
  const buttonRC = document.querySelectorAll('.button-rc')
  buttonRC.forEach((i) => {
    i.style.width = window.innerWidth / 3 - 20 + 'px'
    i.style.height = window.innerHeight / 4 - 20 + 'px'
  })
}
