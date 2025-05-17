import './app.css'
import './scripts/reload.js'
import onEvent from './scripts/onEvent.js'
import handler from './scripts/handler.js'
import resizeButtons from './scripts/resizeButtons.js'
import displayPage from './scripts/displayPage.js'

function app() {
  onEvent('click', handler)
  resizeButtons()
  displayPage()
}

function uncaught() {
  window.addEventListener('unhandledrejection', () => {
    alert('Connection lost')
  })
}

onEvent('DOMContentLoaded', app)
uncaught()
