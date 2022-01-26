import React, { useEffect, useState } from 'react'

export default function Example5() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('componentDidMount')

    return () => {
      // cleanup
      // compoentWillUnmount
    }
  }, [])

  useEffect(() => {
    console.log('componentDidMount & componentDidUpdate by count', count)

    return () => {
      // cleanup
      console.log('cleanup by count', count)
    }
  }, [count])

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
