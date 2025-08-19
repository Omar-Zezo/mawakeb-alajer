import baseUrl from "@/store/baseUrl"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getHome = createAsyncThunk(
    "home/getHome", 
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            return await baseUrl.get("/home")
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const initialState = {
    data: null,
    error: null
}

const home = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHome.pending, (state) => {
            state.error = null
        })
        builder.addCase(getHome.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(getHome.rejected, (state, action) => {
            state.data = null
            state.error = action.payload
        })
    }
})

export default home.reducer
