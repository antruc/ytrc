export default async function sendKey(key) {
  try {
    await fetch('http://192.168.1.75', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: key
    })
  } catch (error) {
    if (error) {
      alert('Connection lost')
    }
  }
}
