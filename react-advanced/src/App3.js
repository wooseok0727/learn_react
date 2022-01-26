import './App.css'
import React from 'react'

class Person extends React.PureComponent {
  // shouldComponentUpdate(prevProps) {
  //   for (const key in this.props) {
  //     if (prevProps[key] !== this.props[key]) return true
  //   }
  //   return false
  // }

  render() {
    console.log('Person render')
    const { name, age } = this.props
    return (
      <div>
        {name} / {age}
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    text: '',
    persons: [
      { id: 1, name: 'JOJO', age: 100 },
      { id: 2, name: 'HO', age: 50 },
    ],
  }

  render() {
    const { text, persons } = this.state
    return (
      <div>
        <input type="text" value={text} onChange={this._change} />
        <ul>
          {persons.map(person => {
            return (
              <Person
                {...person}
                key={person.id}
                onClick={this.toPersonClick}
              />
            )
          })}
        </ul>
      </div>
    )
  }

  _change = e => {
    this.setState({
      ...this.state,
      text: e.target.value,
    })
  }

  toPersonClick = () => {}
}

export default App
