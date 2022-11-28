import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import CreateList from './pages/CreateList'
import PostList from './pages/PostList'
import PostDetail from './pages/PostDetail'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth}></Navbar>
        <Routes>
          <Route index element={ <Home/> }></Route>
          <Route path='/register' element={ <Register/> }></Route>
          <Route path='/login' element={ <Login setIsAuth={setIsAuth}/> }></Route>
          <Route path='/reset-password' element={ <PasswordReset/> }></Route>
          <Route path="/create-list" element={ <CreateList /> }></Route>
          <Route path="/listing" element={ <PostList /> }></Route>
          <Route path="/listing/:id" element={ <PostDetail /> }></Route>
          <Route path="/*" element={ <h1>Error Page</h1> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
