import React, { useState } from 'react'

export default function Example2() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  )

  function click() {
    setCount(count + 1)
  }
}
