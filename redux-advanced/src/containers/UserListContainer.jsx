import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import UserList from '../components/UserList'
import {
  getUsersPromise,
  getUsersSagaStart,
  getUsersThunk,
} from '../redux/modules/users'

export default function UserListContainer() {
  const users = useSelector(state => state.users.data)
  const dispatch = useDispatch()

  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUserStart())
  //     const res = await axios.get('https://api.github.com/users')
  //     dispatch(getUserSuccess(res.data))
  //   } catch (error) {
  //     dispatch(getUserFail(error))
  //   }
  // }, [dispatch])
  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart())
  }, [dispatch])

  return <UserList users={users} getUsers={getUsers} />
}
