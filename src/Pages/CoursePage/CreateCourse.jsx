import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BsArrowLeft } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import uploadImg from '../../assets/uploadImg.gif'
import HomeLayout from '../../Layouts/HomeLayout'
import { createCourse } from '../../Redux/Slices/CourseSlice'

const CreateCourse = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        courseImage: ""
    })

    function getCourseImage(e) {
        e.preventDefault()

        const uploadedImage = e.target.files[0]

        if (uploadedImage) {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener('load', function () {
                setInput({
                    ...input,
                    courseImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    }

    function handleCourseInput(e) {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }

    const addCourse = async (e) => {
        e.preventDefault()

        const { title, description, category, createdBy, thumbnail } = input

        if (!title || !description || !category || !createdBy || !thumbnail) {
            return toast.error("Please fill all fields!")
        }

        let formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('createdBy', createdBy)
        formData.append('thumbnail', thumbnail)

        const response = await dispatch(createCourse(formData))

        if (response?.payload?.success) {
            setInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                courseImage: ""
            })
            navigate('/LMS_Client/course')

        }


    }

    return (
        <HomeLayout>
            <div className='flex items-center justify-center min-h-[90vh] bg-gradient-to-b from-[#854ede] to-[#18b5cd] p-10'>
                <form onSubmit={addCourse}
                    className='text-white bg-[#1A202A] p-4 rounded-lg relative rounded-tl-none mt-8 '
                >
                    <div className='flex items-center bg-[#1A202A] justify-between w-fit p-2 gap-6 pr-5 rounded-lg left-0 rounded-b-none absolute top-[-2.7rem] text-[1.1rem]'>
                        <Link onClick={() => navigate(-1)}
                            className=' p-1 rounded-tl-lg rounded-sm  bg-[#653aab]'>
                            <BsArrowLeft />
                        </Link>
                        <h1 className='tracking-wide'>Create <span className='text-[#BEC1FC] font-[500]'>Course</span></h1>
                    </div>
                    <main>
                        <div>
                            <label htmlFor="image_uploads" className='capitalize cursor-pointer text-[#828D9A] font-semibold text-[0.9rem] tracking-wide'>
                                <p className='mb-1'>Upload course thumbnail</p>
                                {
                                    input.courseImage ? <img src={input.courseImage} alt="" className='border w-[17.5rem] h-[9rem] rounded object-cover' /> :
                                        <img src={uploadImg} alt="" className='border w-[17.5rem] h-[9rem] rounded object-cover' />
                                }
                            </label>
                            <input onChange={getCourseImage} type="file" id='image_uploads' name='image_uploads' className='hidden' accept='.jpg, .jpeg, .png, .svg' />
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor="title"
                                className='capitalize cursor-pointer text-[#a6b0bb] font-semibold text-[0.9rem] tracking-wide'
                            >Title</label>
                            <input
                                className='w-[17.5rem] rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide'
                                type="text" name='title' id='title' placeholder='Enter course title'
                                onChange={handleCourseInput}
                                value={input.title} />
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor="description"
                                className='capitalize cursor-pointer text-[#a6b0bb] font-semibold text-[0.9rem] tracking-wide'
                            >description</label>
                            <textarea
                                className='w-[17.5rem] rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide resize-none'
                                type="text" name='description' id='description' placeholder='Enter course description'
                                onChange={handleCourseInput}
                                value={input.description} />
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor="category"
                                className='capitalize cursor-pointer text-[#a6b0bb] font-semibold text-[0.9rem] tracking-wide'
                            >category</label>
                            <input
                                className='w-[17.5rem] rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide'
                                type="text" name='category' id='category' placeholder='Enter course category'
                                onChange={handleCourseInput}
                                value={input.category} />
                        </div>
                        <div className='flex flex-col items-start gap-1'>
                            <label htmlFor="title"
                                className='capitalize cursor-pointer text-[#a6b0bb] font-semibold text-[0.9rem] tracking-wide'
                            >createdBy</label>
                            <input
                                className='w-[17.5rem] rounded-[3px] border border-[#2d3a4b] p-2 focus:border-[#745FDC]  outline-none bg-transparent text-[0.95rem] tracking-wide'
                                type="text" name='createdBy' id='createdBy' placeholder='Enter course Expert'
                                onChange={handleCourseInput}
                                value={input.createdBy} />
                        </div>

                    </main>
                </form>
            </div>
        </HomeLayout>
    )
}

export default CreateCourse
