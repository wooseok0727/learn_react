import { ADD_TODO, COMPLETE_TODO } from '../actions'

const initialState = []

export default function todos(prevState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...prevState, { text: action.text, done: false }]

    case COMPLETE_TODO:
      return prevState.map((todo, index) =>
        index === action.index ? { ...todo, done: true } : todo
      )

    default:
      return prevState
  }
}
