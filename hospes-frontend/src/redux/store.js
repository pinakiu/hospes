import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import cityReducer from './citySlice';
export default configureStore({
    reducer: {
        user: userReducer,
        cities: cityReducer,
    }
});