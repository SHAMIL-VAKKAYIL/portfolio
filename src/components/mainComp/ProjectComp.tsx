import { Link } from "react-router-dom"
import ProjectCardComp from "../normalComp/ProjectCardComp"
import { GoArrowRight } from "react-icons/go"
import { useState } from "react"

const Projects = [
  {
    id: 1,
    title: 'Game Explore',
    desc: 'The Game Store App is an interactive web application designed to showcase a variety of video games, allowing users to explore games based on different genres, popularity. By integrating the RAWG API, the app pulls real-time data on the latest and trending games, giving users up-to-date information. The app features intuitive navigation, and a wishlist feature',
    image: 'https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1731032470~exp=1731036070~hmac=e8e8e48bfb2b89b1dc9bdb296320075786a0c1a6f8fa1e1d04dba6a9d5b018f9&w=900',
    Techs: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
    path: 'https://github.com/SHAMIL-VAKKAYIL/game_store'

  },
  {
    id: 4,
    title: 'Netflix_clone',
    desc: 'The Netflix clone is a fully responsive web application replicating key features of Netflix. It allows users to securely sign up or log in using Firebase Authentication. Real-time movie and TV show data is fetched from the TMDB API and displayed in categories like Trending and Top Rated. The sleek, Netflix-inspired design includes interactive elements like scrollable carousels and hover effects for additional details.',
    image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D',
    Techs: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    path: 'https://github.com/SHAMIL-VAKKAYIL/netflix_clone'
  },
  {
    id: 2,
    title: 'Global Recipe Finder',
    desc: 'The Food Recipe Web App is a culinary exploration tool that provides users with various recipes from around the world. Using the MealDB API, the app fetches detailed recipes, including ingredients, instructions, and images, helping users discover and try new dishes.  making meal planning and cooking easier and more exciting',
    image: 'https://img.freepik.com/free-photo/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk_140725-76947.jpg?t=st=1731032564~exp=1731036164~hmac=a9e25f984aa75bfbcd1434c7f96417c7026df3f66fc75e786c112ec883684eba&w=900',
    Techs: ['React', 'JavaScript', 'Redux'],
    path: 'https://github.com/SHAMIL-VAKKAYIL/food_recipe-web'

  },
  {
    id: 3,
    title: 'Memories Vault',
    desc: 'This mobile app allows users to capture and preserve their precious memories by uploading videos with descriptions. Users can upload personal videos that capture special moments and add descriptive text to remember the context or story behind each video. This app is designed to provide a nostalgic experience, allowing users to relive their cherished memories anytime.',
    image: 'https://img.freepik.com/free-photo/handheld-device-captures-stunning-city-skyline-night-generated-by-ai_188544-20370.jpg?ga=GA1.1.1144130175.1731032409&semt=ais_hybrid',
    Techs: ['ReactNative', 'Expo', 'TypeScript', 'Appwrite', 'Redux', 'Tailwind'],
    path: 'https://github.com/SHAMIL-VAKKAYIL/aoraa_react_native'

  }
]

function ProjectComp() {



  const [hover, sethover] = useState(false)


  const btnhover = () => {
    sethover(true)
  }
  const btnhoverrem = () => {
    sethover(false)
  }
  return (
    <div className=" mx-auto w-[95%] sm:w-[85%] lg:w-[70%] flex flex-col   gap-y-2" >
      <div className="border-2 border-secondary p-3 mt-2 bg-card rounded-lg">
        <div className='  bg-transparent rounded-lg '>
          <h3 className='font-bld text-white text-xl bg-transparent'>Projects</h3>
        </div>
        <div className="mt-5 flex flex-col gap-7 bg-transparent">
          {Projects.map((project) => {
            return (
              <div key={project.id} className="mt-5 flex flex-col gap-7 ">
                <ProjectCardComp
                  description={project.desc}
                  path={project.path}
                  image={project.image}
                  imageStyle="md:h-[40vh]  2xl:h-[31.4vh]"
                  Techs={project.Techs}
                  title={project.title}
                  gridstyle="grid lg:grid-cols-2   2xl:h-[32.5vh]  "
                />

              </div>
            )
          })
          }
        </div>
        <Link to='/projects'>
          <div className="flex justify-end  text-white transition-transform   mt-3  bg-transparent ">
            <div className="border-2 border-secondary rounded-lg flex items-center px-4 py-1 hover:border-primary group gap-1 justify-around">
              <h3 className="font-med group-hover:text-primary bg-transparent -mt-0.5">More</h3>
              <GoArrowRight size={15} color={`${hover ? '#58A6FF ' : '#f0f0f0'}`} className="bg-transparent" onMouseEnter={btnhover} onMouseLeave={btnhoverrem} strokeWidth={1} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectComp
