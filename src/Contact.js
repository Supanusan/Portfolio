import React from 'react'

const Contact = () => {
    const details = [{
        name: 'Supanusan',
        possition: 'Full-Stack devloper And App developer',
        phone: 'phone',
        number: '+94759920388',
        email: 'email',
        emailadd: 'supanusans@gmail.com',
        website: 'website',
        websiteadd: '',


    }]
    return (
        <div id='contact' className=' px-20 bg-gray-100'>
            <p className='text-4xl font-bold text-center py-12'>CONTACT</p>
            <div>

                {/* To Mobile view */}
                <div className='flex md:hidden flex-col'>
                    <div className='w-full  flex flex-col   items-start text-gray-500 py-10'>
                        <span>
                            <input type="text" placeholder='Name' className='px-4 py-3 mr-4 focus:border-none pl-3 mb-3' />
                            <input type="email" placeholder='Email' className='px-4 py-3' />
                        </span>
                        <span className='py-4'>
                            <input type="text" placeholder='Subject' className='px-4 py-3 ' />
                        </span>
                        <span>
                            <input type="text" placeholder='message' className='w-80 h-20 pl-3' />
                        </span>
                        <button className='bg-orange-600 w-1/2 mt-4 h-10 text-white'>Submit</button>
                    </div>
                    <div className='1/2'>
                        {details.map((details) => (
                            <div className='py-10'>
                                <p className='text-2xl text-gray-800 font-semibold'>{details.name}</p>
                                <p className='text-xl text-gray-500 font-bold py-1'>{details.possition}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.phone}</p>
                                <p className='text-gray-500 py-1'>{details.number}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.email}</p>
                                <p className='text-gray-500 py-1'>{details.emailadd}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.website}</p>
                                <p className='text-gray-500 py-1'>{details.websiteadd}</p>
                            </div>

                        ))}

                    </div>
                </div>




                {/* To Laptop view */}
                <div className='hidden md:flex '>
                    <div className='w-1/2  flex flex-col   items-start text-gray-500 py-10'>
                        <span>
                            <input type="text" placeholder='Name' className='px-4 py-3 mr-4 focus:border-none pl-3 mb-3' />
                            <input type="email" placeholder='Email' className='px-4 py-3' />
                        </span>
                        <span className='py-4'>
                            <input type="text" placeholder='Subject' className='px-4 py-3 ' />
                        </span>
                        <span>
                            <input type="text" placeholder='message' className='w-80 h-20 pl-3' />
                        </span>
                        <button className='bg-orange-600 w-1/2 mt-4 h-10 text-white'>Submit</button>
                    </div>
                    <div className='1/2'>
                        {details.map((details) => (
                            <div className='py-10'>
                                <p className='text-2xl text-gray-800 font-semibold'>{details.name}</p>
                                <p className='text-xl text-gray-500 font-bold py-1'>{details.possition}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.phone}</p>
                                <p className='text-gray-500 py-1'>{details.number}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.email}</p>
                                <p className='text-gray-500 py-1'>{details.emailadd}</p>
                                <p className='text-gray-700 pt-5 pb-3'>{details.website}</p>
                                <p className='text-gray-500 py-1'>{details.websiteadd}</p>
                            </div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
