import { useRef } from 'react'

export default function TodoForm({ add }) {
  const inputRef = useRef()

  function click() {
    add(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>ADD</button>
    </div>
  )
}
