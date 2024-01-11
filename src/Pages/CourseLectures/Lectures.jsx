import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import HomeLayout from '../../Layouts/HomeLayout'
import { getCourseLectures } from '../../Redux/Slices/LectureSlice'

const Lectures = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { state } = useLocation()
    const courseId = state._id

    const { lectures } = useSelector((state) => state?.lecture)
    const { role } = useSelector((state) => state?.auth)

    const getLecturesList = async () => {
        const response = await dispatch(getCourseLectures(courseId))
        console.log(response)
    }

    useEffect(() => {
        if (!state) {
            return navigate('/LMS-Client/course')
        }
        getLecturesList()
    }, [])
    return (
        <HomeLayout>
            lectures
        </HomeLayout>
    )
}

export default Lectures
