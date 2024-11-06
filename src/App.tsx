import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />          
        </Routes>
      </Router>
    </>
  )
}

export default App
