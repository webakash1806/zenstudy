import React from 'react'
import { FcBusinessContact } from "react-icons/fc";

import HomeLayout from '../Layouts/HomeLayout'

const ContactPage = () => {
    return (
        <HomeLayout>
            <div className='min-h-[90vh] flex items-center flex-col justify-between text-white bg-[#15191d]'>
                <form noValidate action="" className='relative h-fit py-8 flex flex-col items-center justify-center gap-[9px] mt-[8rem] bg-[#1A202A] p-4 rounded-lg rounded-tl-none shadow-md shadow-[#6D75DE]'>
                    <div className='flex items-center bg-[#1A202A] justify-between w-fit p-[6px] gap-3 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                        <FcBusinessContact className='text-[#BEC1FC] text-[1.8rem]' />
                        <h1 className='tracking-wide'>Contact Us</h1>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="name" className='text-[#a6b0bb] font-semibold text-[0.85rem] tracking-wide'>Full name
                        </label>
                        <input type="text" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='name'
                            id='name'
                            placeholder='Enter full name...'

                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[0.5px]">
                        <label htmlFor="email" className='text-[#a6b0bb] font-semibold text-[0.85rem] tracking-wide'>Email
                        </label>
                        <input type="email" required
                            className='min-w-[17rem] sm:w-[20.5rem] rounded-[3px] border h-full border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            name='email'
                            id='email'
                            placeholder='Enter Email...'
                        />
                    </div>
                    <div className='min-w-[17rem] sm:w-[20.5rem] flex flex-col items-start gap-[0.5px]'>
                        <label htmlFor="message"
                            className='capitalize cursor-pointer text-[#a6b0bb] font-semibold text-[0.9rem]  tracking-wide'
                        >Message</label>
                        <textarea
                            className='w-full rounded-[3px] border h-[9rem] border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                            type="text" name='message' id='message' placeholder='Enter your message...'
                        />
                    </div>
                    <button type='submit' className='bg-[#FFB827] hover:bg-[#fbb66d] duration-300 mt-2 text-[#000] w-full rounded-md p-[5px] font-semibold text-[1.05rem]'>Submit</button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3623.333915000624!2d84.36398907487639!3d24.749737849680088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705812780578!5m2!1sen!2sin" className='w-full h-[16rem] mt-[10rem]' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </HomeLayout>
    )
}

export default ContactPage
