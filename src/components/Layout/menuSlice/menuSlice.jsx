import { createSlice } from "@reduxjs/toolkit";

const activeMenuSlice =  createSlice({
    name:"activeMenu",
    initialState:"dashboard",
    reducers:{
        setActiveMenu: (state,action) => {
            return action.payload
        }
    }
})

export const {setActiveMenu} = activeMenuSlice.actions

export default activeMenuSlice.reducer