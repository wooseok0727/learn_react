import { NavLink, useLocation } from 'react-router-dom'

const activeStyle = { color: 'green' }

export default function NavLinks() {
  const { search } = useLocation()

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}></NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          end
          style={({ isActive }) => ({ color: isActive ? 'green' : '' })}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/1"
          style={({ isActive }) => ({ color: isActive ? 'green' : '' })}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive && !search ? activeStyle : null)}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=jojo"
          style={({ isActive }) =>
            isActive && search === '?name=jojo' ? activeStyle : null
          }>
          About?name=jojo
        </NavLink>
      </li>
    </ul>
  )
}
