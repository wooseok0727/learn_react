import { useLocation } from 'react-router-dom'
import qs from 'qs'

export default function About() {
  const { search } = useLocation()
  // console.log(search)
  // const obj = new URLSearchParams(search)
  // console.log(obj.get('name'))

  const query = qs.parse(search, {
    ignoreQueryPrefix: true,
  })
  // console.log(query)

  return (
    <div>
      <h2>About 페이지입니다</h2>
      {query.name && <p>name 은 {query.name} 입니다</p>}
    </div>
  )
}
