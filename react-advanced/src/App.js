import './App.css'
import React, { useRef } from 'react'
import MyInput from './components/MyInput'

function App() {
  const myInputRef = useRef()

  const click = () => {
    console.log(myInputRef.current.value)
  }

  return (
    <div>
      <MyInput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  )
}

export default App
