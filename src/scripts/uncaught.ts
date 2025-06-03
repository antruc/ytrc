import showAlert from './showAlert.ts'

export default function uncaught(): void {
  window.addEventListener('unhandledrejection', (): void => {
    showAlert('Connection lost')
  })
}
