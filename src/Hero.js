import React from 'react';

const Hero = () => {
    return (
        <div className='bg-sky-400'>
            <div className='flex flex-col items-center justify-center py-52 text-white'>
                <p className='font-bold text-4xl py-4'>HI , I AM</p>
                <p className='font-semibold text-4xl py-4'>SUPANUSAN</p>
                <p className='text-2xl py-10'>Full-Stack Developer and AI Engineer <span className='font-extrabold text-orange-600'>.</span></p>
                <button className='bg-orange-600 rounded px-5 py-3 text-xl'>Download Resume</button>
            </div>
        </div>
    );
};

export default Hero;
