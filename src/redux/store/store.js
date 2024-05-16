import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../LoginReducer";

const store = configureStore({
    reducer:LoginReducer
})
export default store