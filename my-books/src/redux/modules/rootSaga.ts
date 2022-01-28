import { all } from 'redux-saga/effects'
import { authSaga } from './auth'
import { bookSaga } from './books'

export default function* rootSaga() {
  yield all([authSaga(), bookSaga()])
}
