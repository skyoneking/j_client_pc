import React from 'react'

import fetch from './utils/fetch'

export default function App() {
    function clickGet() {
        fetch('http://localhost:5000/get?getA=1&getB=2').then(res => res.json()).then(res => console.log(res))
    }
    function clickPost() {
        fetch('http://localhost:5000/post', 'POST').then(res => res.json()).then(res => console.log(res))
    }
    return <div>
        hehe lala
        <div><button onClick={clickGet}>clickGet</button><button onClick={clickPost}>clickPost</button></div>
    </div>
}