import './App.css'
import Navbar from './components/mainComp/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />          
          <Route path='/contact' element={<Contact />} />          
        </Routes>
      </Router>
    </>
  )
}

export default App
