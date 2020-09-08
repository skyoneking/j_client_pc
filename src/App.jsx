import React from 'react'

import {ws} from './utils/ws'

export default function App() {
    function click() {
        ws.send('lala')
    }
    return <div>
        hehe lala
        <div><button onClick={click}>click</button></div>
    </div>
}