export default function uncaught() {
    window.addEventListener('unhandledrejection', () => {
      alert('Connection lost')
    })
  }
  