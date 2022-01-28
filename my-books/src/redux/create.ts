import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './modules'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './modules/rootSaga'
import TokenService from '../services/TokenService'

const create = () => {
  const token = TokenService.get()

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export default create
