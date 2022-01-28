import { AnyAction } from 'redux'
import { createActions, handleActions } from 'redux-actions'
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects'
import BookService from '../../services/BookService'
import { BookReqType, BooksState, BookType } from '../../types'

const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
  addDone: false,
}

const prefix = 'books'

export const { initialize, pending, success, fail } = createActions(
  'INITIALIZE',
  'PENDING',
  'SUCCESS',
  'FAIL',
  { prefix }
)

const reducer = handleActions<BooksState, BookType[]>(
  {
    INITIALIZE: state => ({
      ...state,
      addDone: false,
    }),
    PENDING: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      books: action.payload,
      loading: false,
      error: null,
      addDone: true,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
)

export default reducer

// saga
export const { getBooks, addBook, deleteBook } = createActions(
  'GET_BOOKS',
  'ADD_BOOK',
  'DELETE_BOOK',
  {
    prefix,
  }
)

interface AddBookSagaAction extends AnyAction {
  payload: BookReqType
}

function* getBooksSaga() {
  try {
    yield put(pending())
    const token: string = yield select(state => state.auth.token)
    const books: BookType[] = yield call(BookService.getBooks, token)
    yield put(success(books))
    yield put(initialize())
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')))
  }
}

function* addBookSaga(action: AddBookSagaAction) {
  try {
    yield put(pending())
    const token: string = yield select(state => state.auth.token)
    const book: BookType = yield call(
      BookService.addBook,
      token,
      action.payload
    )
    const books: BookType[] = yield select(state => state.books.books)
    yield put(success([...books, book]))
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')))
  }
}

interface DeleteBookSagaAction extends AnyAction {
  payload: number
}

function* deleteBookSaga(action: DeleteBookSagaAction) {
  try {
    const bookId = action.payload
    yield put(pending())
    const token: string = yield select(state => state.auth.token)
    yield call(BookService.deleteBook, token, bookId)
    const books: BookType[] = yield select(state => state.books.books)
    yield put(success(books.filter(book => book.bookId !== bookId)))
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')))
  }
}

export function* bookSaga() {
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga)
  yield takeEvery(`${prefix}/ADD_BOOK`, addBookSaga)
  yield takeEvery(`${prefix}/DELETE_BOOK`, deleteBookSaga)
}
