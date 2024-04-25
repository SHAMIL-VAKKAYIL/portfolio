import searchengine from '../assets/search.jpg'

const projects = [
    {
        title: "Giphy-Search Engine",
        img: searchengine,
        discrp: "A search engine for animated GIFs, short, looped video clips without sound that are often used in social media ",
        href:"https://github.com/SHAMIL-VAKKAYIL/giphy-search-engine/tree/main/giphy"
    },
    {
        title: "Nodemailer-App",
        img: "https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        discrp: "Send emails easily  using NodeMailerApp. Just fill in the form and click 'Send Email' to get started. ",
        href:"https://github.com/SHAMIL-VAKKAYIL/nodemailer"
    },
    {
        title: "Food Recipes",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        discrp: "It helps to. Find the ingredients and list of instructions of a prepared foods.    ",
        href:"https://github.com/SHAMIL-VAKKAYIL/react--Food_recipes/tree/main/Food-menus"
    }
]

let items = projects.map((item) => {
    return (
        <div key={item.title} className='cursor-pointer'>
            <a href={item.href}>
                <div className="flex flex-col :flex lg:flex-row lg:gap-5 shadow-md border-4 border-white shadow-white rounded-md bg-gray-200 overflow-hidden ">
                    <img
                        src={item.img}
                        alt=""
                        className="lg:w-[35%] lg:h-auto h-[8rem] sm:h-[8rem]  object-cover object-center  hover:scale-110 transition duration-300 ease-in-out rounded-md "
                    />
                    <p className="p-5">{item.discrp}</p>
                </div>
                <p className='flex justify-center text-white mt-5 text-xl font-semibold  '>{item.title}</p>
            </a>
        </div>
    )
})

function Project() {
    return (
        <div id='Project' className="bg-[#191919]"><br /><br /><br />
            <h1 className=" flex justify-center text-white text-4xl"> <h1 className='text-[rgb(241,141,59)]'>P</h1> roject<h1 className='text-[rgb(241,141,59)]'>s</h1></h1>
            <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="-mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default Project
