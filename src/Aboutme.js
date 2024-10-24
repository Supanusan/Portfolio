import React from 'react'
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";


const Aboutme = () => {
    const socialmedia = [
        {
            tag: FaFacebookF,
            link: 'https://web.facebook.com/supa.supanusan.79/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true'
        },
        {
            tag: FaWhatsapp,
            link: 'https://wa.me/+94759920388?text=HI Supanu'
        },
        {
            tag: FaLinkedinIn
        }
    ]
    return (
        <div id='about'>
            <div className='py-9 flex justify-center items-center'>
                <h3 className='text-4xl font-bold' >ABOUT ME</h3>
            </div>
            <hr />

            {/* To mobile view */}
            <div className='w-full px-8 py-28 flex flex-col text-center md:hidden items-center  '>
                <div className='w-1/2 '>
                    <p className='font-semibold text-xl text-gray-600 text-center'>
                        A Passionate Developer in Web, Mobile, and Machine Learning
                    </p>

                    <p className='py-16 text-gray-400 '>
                        Hello! I'm Supanu, a passionate first-year university student with a strong interest in software development, particularly in web and mobile applications. I enjoy working with modern JavaScript frameworks like React, Express, and React Native to create dynamic, responsive, and efficient applications. My journey in programming has been driven by a desire to combine machine learning with web technologies, crafting innovative solutions that blend data science with accessible interfaces.

                        As I continue to grow in the tech field, I aim to deepen my knowledge in both frontend and backend development, always exploring new ways to create user-friendly and impactful digital products.

                        In my free time, I love experimenting with new tools, frameworks, and honing my skills in app development. I’m excited about future opportunities to work on diverse projects, collaborate with like-minded individuals, and contribute to the ever-evolving tech industry.

                    </p>


                </div>
                <div className='w-1/2 px-32'>
                    <img src="my.png" alt="myimg" />
                    <div className='text-black w-full h-10 bg-sky-200 flex justify-evenly py-2 rounded-sm'>
                        {socialmedia.map((app, index) => (
                            <a href={app.link} key={index} target="_blank" rel="noreferrer">  <app.tag className='hover:text-orange-600 text-2xl' /></a>
                        )
                        )}
                    </div>
                </div>
            </div>



            {/* To Laptop view */}
            <div className='w-full px-8 py-28  items-center hidden md:flex md:items-center'>
                <div className='w-1/2 '>
                    <p className='font-semibold text-xl text-gray-600 text-center'>
                        A Passionate Developer in Web, Mobile, and Machine Learning
                    </p>

                    <p className='py-16 text-gray-400 '>
                        Hello! I'm Supanu, a passionate first-year university student with a strong interest in software development, particularly in web and mobile applications. I enjoy working with modern JavaScript frameworks like React, Express, and React Native to create dynamic, responsive, and efficient applications. My journey in programming has been driven by a desire to combine machine learning with web technologies, crafting innovative solutions that blend data science with accessible interfaces.

                        As I continue to grow in the tech field, I aim to deepen my knowledge in both frontend and backend development, always exploring new ways to create user-friendly and impactful digital products.

                        In my free time, I love experimenting with new tools, frameworks, and honing my skills in app development. I’m excited about future opportunities to work on diverse projects, collaborate with like-minded individuals, and contribute to the ever-evolving tech industry.

                    </p>


                </div>
                <div className='w-1/2 px-32'>
                    <img src=" /my.jpg" alt=" profile" className='rounded' />
                    <div className='text-black w-full h-10 bg-sky-200 flex justify-evenly py-2 rounded-sm'>
                        {socialmedia.map((app, index) => (
                            <a href={app.link} key={index} >  <app.tag className='hover:text-orange-600 text-2xl' /></a>
                        )
                        )}
                    </div>
                </div>
            </div>

            <hr />
        </div>
    )
}

export default Aboutme
