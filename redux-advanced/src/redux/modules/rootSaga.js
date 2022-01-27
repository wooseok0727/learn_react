import { all } from 'redux-saga/effects'
import { usersSaga } from './users'

export default function* rootSata() {
  yield all([usersSaga()])
}
