import './app.css'
import './scripts/reload.js'
import handler from './scripts/handler.js'
import uncaught from './scripts/uncaught.js'
import resizeButtons from './scripts/resizeButtons.js'
import displayPage from './scripts/displayPage.js'

function app() {
  document.addEventListener('DOMContentLoaded', () => {
    handler()
    uncaught()
    resizeButtons()
    displayPage()
  })
}

app()
