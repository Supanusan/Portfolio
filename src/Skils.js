import React from 'react'

const Skils = () => {
    const skils = [
        {
            type: 'web development',
            persentage: 90
        },
        {
            type: 'App development',
            persentage: 50
        },
        {
            type: 'Back-end development',
            persentage: 90
        }
    ]
    return (
        <div id='skils' className='py-14 flex flex-col justify-center w-full'>
            <div className='text-center  text-4xl font-bold'>SKILS</div>

            {/* To mobile view */}
            <div className='md:hidden sm:flex px-4'>
                <div className='w-full'>
                    {
                        skils.map((skil, index) => (
                            <div key={index} className='py-3'>

                                <p>{skil.type}</p>
                                <div className='flex items-center' >

                                    <div className='w-[80%] h-1 bg-gray-300 rounded flex flex-row relative'>
                                        <div className=' h-1 rounded bg-orange-600 absolute ' style={{ width: `${skil.persentage}%` }} ></div>

                                    </div>
                                    <p className='px-3'>
                                        {skil.persentage}%
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                </div>



            </div>





            {/* To laptop view */}
            <div className='hidden md:flex px-8 py-10 '>
                <div className='w-1/2'>
                    {
                        skils.map((skil, index) => (
                            <div key={index} className='py-3'>
                                {index % 2 === 1 ? (<></>) :
                                    <>
                                        <p>{skil.type}</p>
                                        <div className='flex items-center' >

                                            <div className='w-[80%] h-1 bg-gray-300 rounded flex flex-row relative'>
                                                <div className=' h-1 rounded bg-orange-600 absolute ' style={{ width: `${skil.persentage}%` }} ></div>

                                            </div>
                                            <p className='px-3'>
                                                {skil.persentage}%
                                            </p>
                                        </div>
                                    </>}
                            </div>
                        ))
                    }
                </div>


                <div className='w-1/2'>
                    {
                        skils.map((skil, index) => (
                            <div key={index}>
                                {index % 2 === 0 ? (<></>) :
                                    <>
                                        <p>{skil.type}</p>
                                        <div className='flex items-center' >

                                            <div className='w-[80%] h-1 bg-gray-300 rounded flex flex-row relative'>
                                                <div className=' h-1 rounded bg-orange-600 absolute ' style={{ width: `${skil.persentage}%` }} ></div>

                                            </div>
                                            <p className='px-3'>
                                                {skil.persentage}%
                                            </p>
                                        </div>
                                    </>}
                            </div>
                        ))
                    }
                </div>



            </div>


        </div>

    )
}

export default Skils
