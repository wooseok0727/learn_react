import React, { Component } from 'react'

export default class Example1 extends Component {
  state = { count: 0 }

  render() {
    const { count } = this.state
    return (
      <div>
        <p>You Clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    )
  }

  click = () => {
    this.setState({ count: this.state.count + 1 })
  }
}
