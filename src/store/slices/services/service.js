import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getService = createAsyncThunk(
    "home/getService", 
    async (slug, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/our-services/${slug}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const service = createSlice({
    name: "service",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getService.pending, (state) => {
            state.error = null
        })
        builder.addCase(getService.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getService.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default service.reducer
