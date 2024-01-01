import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';

import HomeLayout from '../Layouts/HomeLayout'

const SignupPage = () => {

    const [image, setImage] = useState('');

    return (
        <HomeLayout>
            <div className='h-[90vh] flex items-center justify-center text-white'>
                <form action="" className='flex flex-col items-center justify-center gap-[8px] bg-black p-4 rounded-lg shadow-md shadow-[#ffb7275a]'>
                    <h1 className='font-semibold text-[1.4rem] tracking-[0.6px]'>Register</h1>
                    <label htmlFor="image_uploads">
                        {
                            image ? <img src="" alt="" className='w-[3.8rem] h-[3.8rem] border-[2.5px] border-[#FFB827] rounded-full' /> :
                                <BsPersonCircle className='w-[3.8rem] h-[3.8rem]' />
                        }
                    </label>
                    <input type="file" id='image_uploads' name='image_uploads' className='hidden' accept='.jpg, .jpeg, .png, .svg' />
                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="userName" className='text-[0.82rem] font-semibold'>UserName
                        </label>
                        <input type="text" required
                            className='p-1 px-2 rounded-md text-[0.92rem] w-[16rem] outline-none shadow-sm shadow-[#FFB827] text-[#FFB827] bg-[#2c2c2ca1]'
                            name='userName'
                            id='userName'
                            placeholder='Enter User Name...' />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="fullName" className='text-[0.82rem] font-semibold'>Full Name
                        </label>
                        <input type="text" required
                            className='p-1 px-2 rounded-md text-[0.92rem] w-[16rem] outline-none shadow-sm shadow-[#FFB827] text-[#FFB827] bg-[#2c2c2ca1]'
                            name='fullName'
                            id='fullName'
                            placeholder='Enter Full Name...' />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="email" className='text-[0.82rem] font-semibold'>Email
                        </label>
                        <input type="email" required
                            className='p-1 px-2 rounded-md text-[0.92rem] w-[16rem] outline-none shadow-sm shadow-[#FFB827] text-[#FFB827] bg-[#2c2c2ca1]'
                            name='email'
                            id='email'
                            placeholder='Enter Email...' />
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="password" className='text-[0.82rem] font-semibold'>Password
                        </label>
                        <input type="password" required
                            className='p-1 px-2 rounded-md text-[0.92rem] w-[16rem] outline-none shadow-sm shadow-[#FFB827] text-[#FFB827] bg-[#2c2c2ca1]'
                            name='password'
                            id='password'
                            placeholder='Enter Password...' />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="confirmPassword" className='text-[0.82rem] font-semibold'>Confirm Password
                        </label>
                        <input type="password" required
                            className='p-1 px-2 rounded-md text-[0.92rem] w-[16rem] outline-none shadow-sm shadow-[#FFB827] text-[#FFB827] bg-[#2c2c2ca1]'
                            name='confirmPassword'
                            id='confirmPassword'
                            placeholder='Enter Confirm Password...' />
                    </div>
                    <button className='bg-[#FFB827] hover:bg-[#fbb66d] duration-300 mt-2 text-[#000] w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Register</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default SignupPage
