import { useCallback, useMemo, useState } from 'react'

function sum(persons) {
  console.log('sum...')
  return persons.map(person => person.age).reduce((l, r) => l + r, 0)
}

export default function Example7() {
  const [value, setValue] = useState('')
  const [persons] = useState([
    { name: 'JOJO', age: 100 },
    { name: 'Anna', age: 50 },
  ])

  const count = useMemo(() => {
    return sum(persons)
  }, [persons])

  const click = useCallback(() => {
    console.log(value)
  }, [])

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  )

  function change(e) {
    setValue(e.target.value)
  }
}
