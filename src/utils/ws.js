const ws = new WebSocket('ws://localhost:5050')

ws.addEventListener('open', () => {
    console.log('open')
})
ws.addEventListener('message', (e) => {
    console.log('data', e.data)
})

export {ws}