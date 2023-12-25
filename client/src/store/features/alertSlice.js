import { createSlice } from '@reduxjs/toolkit'

const initialstate={
    loading:false,
}

export const alertSlice=createSlice({
    name:"alert",
    initialState:initialstate,
    reducers:{
        showLoading:(state)=>{state.loading=true},
        hideLoading:(state)=>{state.loading=false},

    },
})

export const { showLoading,hideLoading } = alertSlice.actions