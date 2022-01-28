import { Navigate } from 'react-router-dom'
import SigninContainer from '../containers/SigninContainer'
import useToken from '../hooks/useToken'

export default function Signin() {
  const token = useToken()

  if (token) {
    return <Navigate replace to="/" />
  }

  return <SigninContainer />
}
