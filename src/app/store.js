import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/PostSlice"

export const store = configureStore({
    reducer:{
        post : postReducer,
    },  
})