import showAlert from './showAlert.ts'

export default async function sendKey(key: string): Promise<void> {
  try {
    await fetch('http://192.168.1.75', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: key
    })
  } catch (error: any) {
    if (error) {
      showAlert('Connection lost')
    }
  }
}
