import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import CreateList from './pages/CreateList'
import PostList from './pages/PostList'
import PostDetail from './pages/PostDetail'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route index element={ <Home/> }></Route>
          <Route path="/create-list" element={ <CreateList /> }></Route>
          <Route path="/listing" element={ <PostList /> }></Route>
          <Route path="/listing/:slug" element={ <PostDetail /> }></Route>
          <Route path="/*" element={ <h1>Error Page</h1> }></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
