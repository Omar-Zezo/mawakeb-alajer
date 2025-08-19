import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getVideos = createAsyncThunk(
    "home/getVideos", 
    async ({str}, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/media-center/videos?${str}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const videos = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVideos.pending, (state) => {
            state.error = null
        })
        builder.addCase(getVideos.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getVideos.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default videos.reducer
