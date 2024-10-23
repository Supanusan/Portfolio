import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const li = [
        { name: 'ABOUT', to: 'about' },
        { name: 'EDUCATION', to: 'education' },
        { name: 'SKILLS', to: 'skils' },
        { name: 'PROJECTS', to: 'projects' },
        { name: 'CONTACT', to: 'contact' },
    ];

    const [isClicked, setIsClick] = useState(false);

    return (
        <>
            <div className="bg-white text-gray-700 py-8 px-5 flex shadow-md">
                <div className="font-extrabold w-1/2 text-2xl">
                    Develop<span className="text-orange-600">er</span>
                </div>

                {/* Mobile Menu */}
                <div className="w-1/2 text-gray-500 md:hidden flex-col text-center justify-center items-center">
                    {!isClicked ? <div className="flex flex-col absolute right-3" onClick={() => setIsClick(!isClicked)}>
                        <span className="w-10 h-1 bg-black my-2"></span>
                        <span className="w-10 h-1 bg-black"></span>
                        <span className="w-10 h-1 bg-black my-2"></span>
                    </div> : null}

                    {isClicked && (
                        <div className="flex flex-col items-center w-full h-full absolute left-0 top-0 bg-gray-500 text-white">

                            <div className=' absolute top-4 right-14 hover:text-red-700  px-4 py-4' onClick={() => setIsClick(!isClicked)}>
                                <span className=' absolute w-10 h-1 bg-white transform rotate-45'></span>
                                <span className=' absolute w-10 h-1 bg-white transform -rotate-45'></span>

                            </div>

                            <div className='flex flex-col pt-10'>

                                {li.map((list, index) => (
                                    <Link
                                        key={index}
                                        className="text-center px-4 py-10 hover:border-b-2 hover:text-orange-600 cursor-pointer"
                                        to={list.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsClick(!isClicked)}
                                    >
                                        {list.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop Menu */}
                <div className="w-1/2 text-gray-500 md:flex md:justify-evenly hidden sm:flex">
                    {li.map((list, index) => (
                        <Link
                            key={index}
                            className="text-center px-4 py-2 hover:border-b-2 hover:text-orange-600 cursor-pointer"
                            to={list.to}
                            smooth={true}
                            duration={500}
                        >
                            {list.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
