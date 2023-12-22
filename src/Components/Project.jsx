import searchengine from '../assets/search.jpg'

const projects=[{
    title:"Giphy-Search Engine",
    img:searchengine,
    discrp:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque ipsam accusantium debitis tempore facilis. Inventore non est ducimus sint earum expedita. Atque minus perferendis nam beatae tempora maxime unde."
    },
    {
        title:"Giphy-Search Engine",
        img:searchengine,
        discrp:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque ipsam accusantium debitis tempore facilis. Inventore non est ducimus sint earum expedita. Atque minus perferendis nam beatae tempora maxime unde."
    },
    {
        title:"Giphy-Search Engine",
        img:searchengine,
        discrp:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque ipsam accusantium debitis tempore facilis. Inventore non est ducimus sint earum expedita. Atque minus perferendis nam beatae tempora maxime unde."
    }
]

let items=projects.map((item)=>{
    return(
        <div key={item.title} className='cursor-pointer'>
        <div className="flex  gap-5 shadow-md border-4 border-white shadow-white rounded-md bg-gray-200 overflow-hidden ">
                        <img
                            src={item.img}
                            alt=""
                            className="w-[35%]   object-cover object-center  hover:scale-110 transition duration-300 ease-in-out rounded-md "
                            />
                        <p className="p-5">{item.discrp}</p>
                    </div>
                    <h1 className='flex justify-center text-white mt-5 text-xl font-semibold hover:scale-110 duration-300 ease-in-out '>{item.title}</h1>
    </div>
    )
})

function Project() {
    return (
        <div className="bg-[#191919]"><br /><br /><br />
            <h1 className=" flex justify-center text-white text-4xl">Projects</h1>
            <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="-mt-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:gap-x-8">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default Project
