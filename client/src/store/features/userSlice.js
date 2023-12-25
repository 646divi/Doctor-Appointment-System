import { createSlice } from '@reduxjs/toolkit'

const initialstate={
    user:null,
}

export const userSlice=createSlice({
    name:"user",
    initialState:initialstate,
    reducers:{
        getUser:(state,action)=>{
            state.user=action.payload
        }

    },
})

export const { getUser } = userSlice.actions
