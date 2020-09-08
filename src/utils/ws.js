const ws = new WebSocket('ws://localhost:3040')

ws.addEventListener('open', () => {
    console.log('open')
})
ws.addEventListener('message', (e) => {
    console.log('data', e.data)
})

export {ws}