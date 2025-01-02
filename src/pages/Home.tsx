import Hero from '../components/mainComp/Hero'
import TechStack from '../components/mainComp/TechStack'
import MediaCard from '../components/mainComp/SocialMedia'

function Home() {
  return (
    <div className='mt-[18%] md:mt-[5%] mb-[5%]'>
      <Hero />
      <TechStack />
      {/* <ProjectComp /> */}
      <MediaCard />
    </div>
  )
}

export default Home
