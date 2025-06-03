import './app.css'
import './scripts/reload.js'
import handler from './scripts/handler.ts'
import uncaught from './scripts/uncaught.ts'
import resizeButtons from './scripts/resizeButtons.ts'
import displayPage from './scripts/displayPage.ts'

function app(): void {
  document.addEventListener('DOMContentLoaded', (): void => {
    handler()
    uncaught()
    resizeButtons()
    displayPage()
  })
}

app()
