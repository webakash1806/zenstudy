import React from 'react'

import missionImg from '../assets/mission.png'
import HomeLayout from '../Layouts/HomeLayout'

const AboutUs = () => {
    return (
        <HomeLayout>
            <div className='p-2 px-4'>
                <div className='flex flex-col items-center justify-center gap-2 text-white'>
                    <div className='text-center'>
                        <h1 className='text-[1.8rem] font-[610]  mb-3'>About Us</h1>
                        <p className='text-[0.9rem] font-[350] tracking-wide'>Welcome to [Your LMS Name], where education meets innovation! We are passionate about transforming the way people learn and grow, making education accessible, engaging, and effective.</p>
                    </div>
                    <img
                        className=' w-[18rem] p-4'
                        src={missionImg} alt="Our Mission Image" />
                    <div className='text-center'>
                        <h1 className='text-[1.8rem] font-[610]  mb-3'>Our Mission</h1>
                        <p className='text-[0.9rem] font-[350] tracking-wide'>At [Your LMS Name], our mission is to empower individuals and organizations with the tools they need to thrive in the digital age. We believe that learning is a lifelong journey, and our goal is to provide a dynamic and user-friendly platform that fosters continuous learning and professional development.</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUs
