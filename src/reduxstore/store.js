import { configureStore } from "@reduxjs/toolkit";
import addBookReducer from "../reduxSlice/addBookslice"

export const store = configureStore({
    reducer:{
        addBook:addBookReducer
        
    }
})