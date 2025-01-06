import './App.css'
import Navbar from './components/mainComp/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer theme='dark' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Analytics />
      </Router>
    </>
  )
}

export default App
