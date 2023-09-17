import { createSlice } from "@reduxjs/toolkit";

const initialState = {}; 

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;
