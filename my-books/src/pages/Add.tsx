import { Navigate } from 'react-router-dom'
import AddContainer from '../containers/AddContainer'
import useToken from '../hooks/useToken'

export default function Add() {
  const token = useToken()

  if (!token) {
    return <Navigate replace to="/signin" />
  }

  return <AddContainer />
}
