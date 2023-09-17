import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import cityReducer from './citySlice';
import searchReducer from './searchSlice';
export default configureStore({
    reducer: {
        user: userReducer,
        cities: cityReducer,
        search: searchReducer,
    }
});