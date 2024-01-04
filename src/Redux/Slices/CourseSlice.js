import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
    try {
        const res = axiosInstance.get("/course")
        toast.promise(res, {
            loading: "Loading Courses...",
            success: "Courses loaded successfully",
            error: "Something went wrong!"
        })
        return (await res).data.course
    }
    catch (e) {
        toast.error(e?.response?.data?.message)
    }
})

const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default courseSlice.reducer