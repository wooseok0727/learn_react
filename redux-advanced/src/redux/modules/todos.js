// 액션 타입 정의
const ADD_TODO = 'todos/ADD_TODO'
const COMPLETE_TODO = 'todos/COMPLETE_TODO'

// 액션 생성 함수
export const addTodo = text => ({ type: ADD_TODO, text })
export const completeTodo = index => ({ type: COMPLETE_TODO, index })

// 초기값
const initialState = []

// 리듀서
export default function reducer(prevState = initialState, action) {
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
