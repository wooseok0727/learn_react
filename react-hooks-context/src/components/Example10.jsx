import React, { Component } from 'react'
import PersonContext from '../contexts/PersonContext'

export default class Example10 extends Component {
  // static contextType = PersonContext

  render() {
    const persons = this.context
    return (
      <ul>
        {persons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    )
  }
}

Example10.contextType = PersonContext
