import './index.css';
import { FaLink } from 'react-icons/fa'
const Project = () => {
    const projects = [
        {
            img: "/3.png",
            discription: "Account creation llike FB",
            link: 'https://github.com/Supanusan/Mernstack-Login-register'
        },
        {
            img: '/2.png',
            discription: "Chatting Application",
            link: ' '
        },
        {
            img: '/1.webp',
            discription: "CRUD operation in Express.js",
            link: ' https://github.com/Supanusan/Test'
        },
        // {
        //     img: "/3.png",
        //     discription: "About Portfolio",
        //     link: ' '
        // }
    ]
    return (
        <div id='projects' className='py-10 px-8 bg-slate-300 w-full  '>
            <h3 className='text-4xl font-bold text-center'>PROJECTS</h3>
            <hr className='my-10 border-gray-500' />
            <div className='flex flex-wrap  '>
                {projects.map((project, index) => (
                    <div key={index} className='mx-7 my-4 relative w-[300px] h-[200px] hover-trigger' >

                        <img src={project.img} alt={`${project.discription}img`} className=' text-center w-[300px] h-[200px] absolute top-0 left-0 hover-img transition-opacity duration-500' />
                        <div className='w-[300px] h-[200px] absolute top-0 left-0 bg-sky-500 hover-div transition-opacity duration-500 flex justify-center items-center opacity-0'>
                            <a href={project.link}
                                onClick={(e) => {

                                }} >
                                <FaLink className='text-white text-2xl z-10' onClick={(e) => { console.log(`${e.target.index} clicked`) }} />
                            </a>
                        </div>
                        <div className=' absolute bottom-0 left-0 bg-sky-700 w-full text-center text-white'>
                            <h1>{project.discription}</h1>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
