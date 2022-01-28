import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Add from '../components/Add'
import { BookReqType, RootState } from '../types'
import { logout as logoutSagaStart } from '../redux/modules/auth'
import { addBook as addBookSagaStart, initialize } from '../redux/modules/books'

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(state => state.books.loading)
  const addDone = useSelector<RootState, boolean>(state => state.books.addDone)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const back = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const logout = useCallback(() => {
    dispatch(logoutSagaStart())
  }, [dispatch])

  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart(book))
    },
    [dispatch]
  )

  useEffect(() => {
    if (addDone) {
      navigate('/')
    }

    return () => {
      dispatch(initialize())
    }
  }, [addDone, dispatch, navigate])

  return <Add loading={loading} back={back} logout={logout} add={add} />
}

export default AddContainer
