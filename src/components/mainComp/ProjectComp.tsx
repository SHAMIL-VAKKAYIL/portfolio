import { Link } from "react-router-dom"
import ProjectCardComp from "../normalComp/ProjectCardComp"
import Project from "../../pages/Project"

function ProjectComp() {

  const Projects = [
    {
      id: 1,
      title: 'Game Explore',
      desc: 'The Game Store App is an interactive web application designed to showcase a variety of video games, allowing users to explore games based on different genres, popularity. By integrating the RAWG API, the app pulls real-time data on the latest and trending games, giving users up-to-date information. The app features intuitive navigation, and a wishlist feature',
      image: 'https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1731032470~exp=1731036070~hmac=e8e8e48bfb2b89b1dc9bdb296320075786a0c1a6f8fa1e1d04dba6a9d5b018f9&w=900',
      Techs: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind'],
      path:'https://github.com/SHAMIL-VAKKAYIL/game_store'

    },
    {
      id: 2,
      title: 'Global Recipe Finder',
      desc: 'The Food Recipe Web App is a culinary exploration tool that provides users with various recipes from around the world. Using the MealDB API, the app fetches detailed recipes, including ingredients, instructions, and images, helping users discover and try new dishes.  making meal planning and cooking easier and more exciting',
      image: 'https://img.freepik.com/free-photo/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk_140725-76947.jpg?t=st=1731032564~exp=1731036164~hmac=a9e25f984aa75bfbcd1434c7f96417c7026df3f66fc75e786c112ec883684eba&w=900',
      Techs: ['React', 'JavaScript', 'Redux'],
      path:'https://github.com/SHAMIL-VAKKAYIL/food_recipe-web'

    },
    {
      id: 3,
      title: 'Memories Vault',
      desc: 'This mobile app allows users to capture and preserve their precious memories by uploading videos with descriptions. Users can upload personal videos that capture special moments and add descriptive text to remember the context or story behind each video. This app is designed to provide a nostalgic experience, allowing users to relive their cherished memories anytime.',
      image: 'https://img.freepik.com/free-photo/handheld-device-captures-stunning-city-skyline-night-generated-by-ai_188544-20370.jpg?ga=GA1.1.1144130175.1731032409&semt=ais_hybrid',
      Techs: ['ReactNative', 'Expo', 'TypeScript', 'Appwrite', 'Redux', 'Tailwind'],
      path:'https://github.com/SHAMIL-VAKKAYIL/aoraa_react_native'

    }
  ]


  return (
    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col   gap-y-2">
      <div className="border-2 border-secondary p-3 mt-3 rounded-lg">
        <div className='  bg-transparent rounded-lg '>
          <h3 className='font-bld text-white text-xl bg-transparent'>Projects</h3>
        </div>
        <div className="mt-5 flex flex-col gap-7">
        {Projects.map((project) => {
          return (
            <div key={project.id} className="mt-5 flex flex-col gap-7">
              <ProjectCardComp 
                description={project.desc}
                path={project.path}
                image={project.image}
                imageStyle="md:h-[40vh]  2xl:h-[32vh]"
                Techs={project.Techs}
                title={project.title}
                gridstyle="grid lg:grid-cols-2   2xl:h-[32vh]  "
              />

            </div>
          )
        })
        }
        </div>
        <Link to='/projects'>
          <h3 className="font-bld text-white text-xl bg-transparent">More</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProjectComp
