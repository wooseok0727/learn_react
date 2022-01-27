import { createActions, handleActions } from 'redux-actions'

// 액션 타입 정의
// const SHOW_ALL = 'filter/SHOW_ALL'
// const SHOW_COMPLETE = 'filter/SHOW_COMPLETE'

export const { showAll, showComplete } = createActions(
  'SHOW_ALL',
  'SHOW_COMPLETE',
  {
    prefix: 'filter',
  }
)

console.log(showAll())

// 액션 생성 함수
// export const showAll = () => ({ type: SHOW_ALL })
// export const showComplete = () => ({ type: SHOW_COMPLETE })

// 초기값
const initialState = 'ALL'

const reducer = handleActions(
  {
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: () => 'COMPELETE',
  },
  initialState,
  { prefix: 'filter' }
)

export default reducer

// // 리듀서
// export default function reducer(prevState = initialState, action) {
//   switch (action.type) {
//     case SHOW_COMPLETE:
//       return 'COMPLETE'

//     case SHOW_ALL:
//       return 'ALL'

//     default:
//       return prevState
//   }
// }
