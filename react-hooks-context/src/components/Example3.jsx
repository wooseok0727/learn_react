import React, { useState } from 'react'

export default function Example3() {
  const [state, setState] = useState({ count: 0 })

  return (
    <div>
      <p>You Clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  )

  function click() {
    setState(state => ({ count: state.count + 1 }))
  }
}
