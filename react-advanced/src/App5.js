import './App.css'
import React, { useCallback, useState } from 'react'
import Modal from './components/Modal'

// shouldComponentUpdate()
// PureComponent
// React.memo()

// const Person = React.memo(({ name, age }) => {
//   console.log('Person render')
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   )
// })

// function App() {
//   const [state, setState] = useState({
//     text: '',
//     persons: [
//       { id: 1, name: 'JOJO', age: 100 },
//       { id: 2, name: 'HO', age: 50 },
//     ],
//   })

//   const toPersonClick = useCallback(() => {}, [])
//   const _change = useCallback(
//     e => {
//       setState({
//         ...state,
//         text: e.target.value,
//       })
//     },
//     [state]
//   )

//   const { text, persons } = state
//   return (
//     <div>
//       <input type="text" value={text} onChange={_change} />
//       <ul>
//         {persons.map(person => {
//           return <Person {...person} key={person.id} onClick={toPersonClick} />
//         })}
//       </ul>
//     </div>
//   )
// }

function App() {
  const [visible, setVisible] = useState(false)

  const open = () => {
    setVisible(true)
  }

  const close = () => {
    setVisible(false)
  }

  return (
    <div>
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
            }}
            onClick={close}>
            Hello
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
