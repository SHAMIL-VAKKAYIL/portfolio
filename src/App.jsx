
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Project from './Components/Project'
import Service from './Components/Service'

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Service />
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
