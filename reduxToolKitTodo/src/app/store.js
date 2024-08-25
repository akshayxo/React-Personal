import {configureStore } from "@reduxjs/toolkit";
import todoReduce from './todoSlice'

export const store = configureStore({
    reducer : todoReduce
})
