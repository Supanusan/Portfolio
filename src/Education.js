import React from 'react'

const Education = () => {
    const data = [
        {
            degree: {
                year: 2019,
                result: '5A,3B,C'
            },
            instute: 'BT/PD/THETTATIVU M.V',
            location: 'Thettativu-01',
            details: 'GCE OL 2019 Frist Say'
        },
        {
            degree: {
                year: 2022,
                result: '2B,C'
            },
            instute: 'BT/PD/KALUTHAVALI N.S',
            location: 'Kaluthavali-01',
            details: 'GCE AL 2022 Frist Say'
        },

    ]
    return (

        // To Mobile view
        <div id='education' className='bg-gray-200 py-20 px-20'>
            <div className='flex justify-center'>
                <h3 className='text-4xl font-bold'>EDUCATION</h3>
            </div>
            <hr />




            {/* To mobile view */}
            <div className='flex  w-full py-16 overflow-auto md:hidden'>
                {data.map((data, index) => (
                    <div key={index} className='flex flex-col px-10  py-4 mx-9 border-solid border-4 border-sky-200 '>
                        <p className='text-gray-600'>  {data.degree.year}</p>
                        <p className='py-3 text-gray-400'>{data.degree.result}</p>
                        <div className='flex items-center'>
                            <div className='bg-orange-600 rounded-full w-2 h- pb-4'></div>
                            <hr className='border-gray-500 border-2 flex-grow mx-2' />
                        </div>

                        <p className=' py-5 text-gray-600'>{data.instute}</p>
                        <p className=' text-gray-400'>{data.location}</p>
                        <p className=' text-gray-400'>{data.details}</p>
                    </div>

                ))}

            </div>



            {/* To Laptop view */}
            <div className=' hidden py-16 overflow-auto sm:flex'>
                {data.map((data, index) => (
                    <div key={index} className='flex flex-col px-20  py-4 mx-9 border-solid border-4 border-sky-200 '>
                        <p className='text-gray-600'>  {data.degree.year}</p>
                        <p className='py-3 text-gray-400'>{data.degree.result}</p>
                        <div className='flex items-center'>
                            <div className='bg-orange-600 rounded-full w-2 h- pb-4'></div>
                            <hr className='border-gray-500 border-2 flex-grow mx-2' />
                        </div>

                        <p className=' py-5 text-gray-600'>{data.instute}</p>
                        <p className=' text-gray-400'>{data.location}</p>
                        <p className=' text-gray-400'>{data.details}</p>
                    </div>

                ))}

            </div>
        </div>

    )
}

export default Education
