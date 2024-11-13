import ProjectCardComp from '../components/normalComp/ProjectCardComp'

function Project() {



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
    },
    {
      id: 4,
      title: 'Simple To-Do List',
      desc: 'The To-Do List App is a simple and user-friendly productivity tool that helps users organize their tasks efficiently. Users can add and delete tasks with ease. The application was built with React, focusing on responsive design and clean functionality, making it perfect for managing daily tasks.',
      image: 'https://img.freepik.com/free-photo/work-team-digital-art_23-2151492153.jpg?ga=GA1.1.1144130175.1731032409&semt=ais_hybrid',
      Techs: ['React', 'TypeScript', 'Tailwind'],
      path: 'https://github.com/SHAMIL-VAKKAYIL/Todolist'
    },
    {
      id: 5,
      title: 'Weather Now',
      desc: 'The Weather Web App is a simple and efficient tool that helps users stay updated on current weather conditions. By entering a city name, users can quickly view the current temperature, weather description, and other essential information. This project uses a weather API to fetch real-time weather data, offering users a straightforward way to check the weather in any location.',
      image: 'https://img.freepik.com/free-vector/weather-concept-illustration_114360-1189.jpg?t=st=1731033106~exp=1731036706~hmac=9069682e502b195578507e6ac332d49fc13b88e568f1d481936330f82ed7ab41&w=740',
      Techs: ['React', 'JavaScript', 'Tailwind'],
      path: 'https://github.com/SHAMIL-VAKKAYIL/weather_app'
    },
  ]

  return (

    <div className=" mx-auto sm:w-[85%] lg:w-[70%] flex flex-col   gap-y-2">
      <div className="border-2 border-secondary p-3 mt-3 rounded-lg mb-3 bg-card">
        <div className='bg-transparent rounded-lg '>
          <h3 className='font-bld text-white text-xl bg-transparent'>Projects</h3>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-3 bg-transparent'>
          {Projects.map((project) => {
            return (
              <div key={project.id} className="mt-5 flex flex-col gap-7">
                <ProjectCardComp
                  description={project.desc}
                  path={project.path}
                  descClass='hidden'
                  imageStyle="md:h-[40vh] lg:h-full xl:h-[40vh]"
                  image={project.image}
                  Techs={project.Techs}
                  title={project.title}
                />

              </div>
            )
          })
          }
        </div>
      </div>
    </div >

  )
}

export default Project
