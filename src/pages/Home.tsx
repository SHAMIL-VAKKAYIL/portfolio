import Hero from '../components/mainComp/Hero'
import TechStack from '../components/mainComp/TechStack'
import ProjectComp from '../components/mainComp/ProjectComp'
import Contact from '../components/mainComp/Contact'

function Home() {
  return (
    <div className='mt-[5%] mb-[5%]'>
      <Hero />
      <TechStack />
      <ProjectComp />
      <Contact />
    </div>
  )
}

export default Home
