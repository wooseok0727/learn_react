import axios from 'axios'
import { call, delay, put, takeEvery } from 'redux-saga/effects'

// 액션 타입 정의
const GET_USERS_START = 'users/GET_USERS_START'
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS'
const GET_USERS_FAIL = 'users/GET_USERS_FAIL'

// redux-promise-middlware
const GET_USERS = 'users/GET_USERS'

const GET_USERS_PENDING = 'users/GET_USERS_PENDING'
const GET_USERS_FULFILLED = 'users/GET_USERS_FULFILLED'
const GET_USERS_REJECTED = 'users/GET_USERS_REJECTED'

// 액션 생성 함수
export const getUserStart = () => ({ type: GET_USERS_START })
export const getUserSuccess = data => ({ type: GET_USERS_SUCCESS, data })
export const getUserFail = error => ({ type: GET_USERS_FAIL, error })

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
}

// 리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case GET_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// thunk
export function getUsersThunk() {
  return async dispatch => {
    try {
      dispatch(getUserStart())
      const res = await axios.get('https://api.github.com/users')
      dispatch(getUserSuccess(res.data))
    } catch (error) {
      dispatch(getUserFail(error))
    }
  }
}

// redux-promise-middleware
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users')
      return res.data
    },
  }
}

// redux-saga
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START'

function* getUsersSaga(action) {
  try {
    yield put(getUserStart())
    yield delay(2000)
    const res = yield call(axios.get, 'https://api.github.com/users')
    yield put(getUserSuccess(res.data))
  } catch (error) {
    yield put(getUserFail(error))
  }
}

export const getUsersSagaStart = () => ({ type: GET_USERS_SAGA_START })

export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga)
}
