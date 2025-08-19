import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getPhotos = createAsyncThunk(
    "home/getPhotos", 
    async ({str}, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/media-center/photos?${str}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const photos = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPhotos.pending, (state) => {
            state.error = null
        })
        builder.addCase(getPhotos.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getPhotos.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default photos.reducer
