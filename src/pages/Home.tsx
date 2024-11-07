import Hero from '../components/mainComp/Hero'
import TechStack from '../components/mainComp/TechStack'
import Project from '../components/mainComp/Project'

function Home() {
  return (
    <div className='mt-[5%] mb-[5%]'>
      <Hero />
      <TechStack />
      <Project />
    </div>
  )
}

export default Home
