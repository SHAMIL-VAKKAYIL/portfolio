import ProjectCardComp from '../components/reusable/ProjectCardComp'
import devChatImg from '../assets/images/dev_chat.png'
import openSourceImg from '../assets/images/opensource_investment.png'
import ecomImg from '../assets/images/ecom_microservice.png'


function Project() {



  const Projects = [
    {
      id: 11,
      title: 'DevChat - Real-time Messaging',
      desc: 'A full-stack real-time messaging platform supporting encrypted one-to-one and group conversations. Built with a scalable Node.js/Socket.io backend and a responsive React frontend. Orchestrated across separate client and server repositories for modular development and high-performance communication.',
      image: devChatImg,
      live: '',
      path: 'https://github.com/SHAMIL-VAKKAYIL/devChatServer'
    },
    {
      id: 9,
      title: 'OpenSource Investment',
      desc: 'A robust investment platform built with a microservices architecture. It leverages Apache Kafka for real-time event streaming, Node.js for scalable backend services, and React for a dynamic frontend. Integrated with Stripe for development-mode payment processing, showcasing a complete end-to-end fintech solution.',
      image: openSourceImg,
      live: '',
      path: 'https://github.com/SHAMIL-VAKKAYIL/opensource_investement'
    },
    {
      id: 10,
      title: 'Ecom Microservice Migration',
      desc: 'Successfully architected and implemented the migration of a monolithic e-commerce application into a high-performance microservices ecosystem. This project focuses on inter-service communication using gRPC and Protocol Buffers, significantly enhancing system scalability and reducing latency.',
      image: ecomImg,
      live: '',
      path: 'https://github.com/SHAMIL-VAKKAYIL/ecom_microservice'
    },
    {
      id: 1,
      title: 'Game Explore',
      desc: 'The Game Store App is an interactive web application designed to showcase a variety of video games, allowing users to explore games based on different genres and popularity. By integrating the RAWG API, the app pulls real-time data ,users can search games , giving users up-to-date information. It features intuitive navigation, a wishlist feature, and detailed game information to enhance the user experience.',
      image: 'https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005792.jpg?t=st=1731032470~exp=1731036070~hmac=e8e8e48bfb2b89b1dc9bdb296320075786a0c1a6f8fa1e1d04dba6a9d5b018f9&w=900',
      live: 'https://game--store.vercel.app/',
      path: 'https://github.com/SHAMIL-VAKKAYIL/game_store'

    },
    {
      id: 2,
      title: 'Digital Diary ',
      desc: 'The Digital Diary application enables users to create and manage their daily entries with ease, allowing them to attach images to complement their content. Users can view their entire diary in an organized format and utilize advanced filtering options to locate specific entries by date. The project also includes session-based authentication to ensure user data remains private and secure, providing a seamless and safe experience.',
      image: 'https://img.freepik.com/free-photo/still-life-with-lamp-pen-lantern-book_188544-8807.jpg?uid=R138940299&ga=GA1.1.361786185.1733717915&semt=ais_hybrid',
      live: '',
      path: 'https://github.com/SHAMIL-VAKKAYIL/digi_dairy-express'

    },
    {
      id: 8,
      title: 'Anonnymos Group Chat ',
      desc: 'This real-time group chat application, built with Socket.IO and Node.js, allows users to connect and chat anonymously without any registration or data storage. It utilizes WebSockets to enable instant communication, ensuring a seamless and dynamic user experience. The app highlights my expertise in event-driven architecture and real-time data handling, demonstrating my ability to create efficient and responsive applications.',
      image: 'https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459581.jpg?uid=R138940299&ga=GA1.1.84414674.1735485753&semt=ais_hybrid',
      live: 'https://anonyytalk.vercel.app/',
      path: 'https://github.com/SHAMIL-VAKKAYIL/chatApp_server'

    },
    // {
    //   id: 6,
    //   title: 'Netflix_clone',
    //   desc: 'The Netflix clone is a fully responsive web application replicating key features of Netflix. It allows users to securely sign up or log in using Firebase Authentication. Real-time movie and TV show data is fetched from the TMDB API and displayed in categories like Trending and Top Rated. The sleek, Netflix-inspired design includes interactive elements like scrollable carousels and hover effects for additional details.',
    //   image: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D',
    //   live: '',
    //   path: 'https://github.com/SHAMIL-VAKKAYIL/netflix_clone'
    // },
    // {
    //   id: 7,
    //   title: 'Global Recipe Finder',
    //   desc: 'The Food Recipe Web App is a culinary exploration tool that provides users with various recipes from around the world. Using the MealDB API, the app fetches detailed recipes, including ingredients, instructions, and images, helping users discover and try new dishes.  making meal planning and cooking easier and more exciting',
    //   image: 'https://img.freepik.com/free-photo/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk_140725-76947.jpg?t=st=1731032564~exp=1731036164~hmac=a9e25f984aa75bfbcd1434c7f96417c7026df3f66fc75e786c112ec883684eba&w=900',
    //   live: '',
    //   path: 'https://github.com/SHAMIL-VAKKAYIL/food_recipe-web'
    // },
    {
      id: 3,
      title: 'Memories Vault',
      desc: 'This mobile app allows users to capture and preserve their precious memories by uploading videos with descriptions. Users can upload personal videos that capture special moments and add descriptive text to remember the context or story behind each video. This app is designed to provide a nostalgic experience, allowing users to relive their cherished memories anytime.',
      image: 'https://img.freepik.com/free-photo/handheld-device-captures-stunning-city-skyline-night-generated-by-ai_188544-20370.jpg?ga=GA1.1.1144130175.1731032409&semt=ais_hybrid',
      live: '',
      path: 'https://github.com/SHAMIL-VAKKAYIL/aoraa_react_native'
    },
    // {
    //   id: 4,
    //   title: 'Simple To-Do List',
    //   desc: 'The To-Do List App is a simple and user-friendly productivity tool that helps users organize their tasks efficiently. Users can add and delete tasks with ease. The application was built with React, focusing on responsive design and clean functionality, making it perfect for managing daily tasks.',
    //   image: 'https://img.freepik.com/free-photo/work-team-digital-art_23-2151492153.jpg?ga=GA1.1.1144130175.1731032409&semt=ais_hybrid',
    //   live: '',
    //   path: 'https://github.com/SHAMIL-VAKKAYIL/Todolist'
    // },
    // {
    //   id: 5,
    //   title: 'Weather Now',
    //   desc: 'The Weather Web App is a simple and efficient tool that helps users stay updated on current weather conditions. By entering a city name, users can quickly view the current temperature, weather description, and other essential information. This project uses a weather API to fetch real-time weather data, offering users a straightforward way to check the weather in any location.',
    //   image: 'https://img.freepik.com/free-photo/young-child-enjoying-childhood-happiness-by-playing-puddle-water-after-rain_23-2151469978.jpg?uid=R138940299&ga=GA1.1.361786185.1733717915&semt=ais_hybrid',
    //   live: '',
    //   path: 'https://github.com/SHAMIL-VAKKAYIL/weather_app'
    // },
  ]

  return (

    <div className="mt-[5%] mb-[5%] mx-auto sm:w-[85%] lg:w-[75%]  p-2">
      <div className="border-2 border-secondary p-2 mt-3 rounded-lg mb-3  ">
        <div className='bg-transparent rounded-lg mt-3 '>
          <h3 className='font-bld text-white text-2xl  bg-transparent text-center'>Projects</h3>
        </div>
        <div className=' gap-3 bg-transparent w-full  flex flex-wrap  justify-center mb-3'>
          {Projects.map((project) => {
            return (
              <div key={project.id} className="mt-5 md:w-[40%]   flex gap-3 grayscale hover:grayscale-0 hover:scale-105 ease-in-out transform transition-all duration-300">
                <ProjectCardComp
                  description={project.desc}
                  live={project.live}
                  path={project.path}
                  image={project.image}
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
