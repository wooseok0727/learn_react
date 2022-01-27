import { SHOW_ALL, SHOW_COMPLETE } from '../actions'

const initialState = 'ALL'

export default function filter(prevState = initialState, action) {
  switch (action.type) {
    case SHOW_COMPLETE:
      return 'COMPLETE'

    case SHOW_ALL:
      return 'ALL'

    default:
      return prevState
  }
}
