import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getSeasonalProject = createAsyncThunk(
    "home/getSeasonalProject", 
    async (slug, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get(`/seasonal-projects/${slug}`)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const seasonalProject = createSlice({
    name: "seasonalProject",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSeasonalProject.pending, (state) => {
            state.error = null
        })
        builder.addCase(getSeasonalProject.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getSeasonalProject.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default seasonalProject.reducer
