import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Links from './components/Links'
import NavLinks from './components/NavLinks'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'

const isLogin = false

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route
          path="/login"
          element={isLogin ? <Navigate replace to="/" /> : <Login />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />}>
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
