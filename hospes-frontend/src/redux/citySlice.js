import { createSlice } from "@reduxjs/toolkit";

const initialState =  [
    "New York City, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
    "Austin, TX",
    "Jacksonville, FL",
    "Fort Worth, TX",
    "Columbus, OH",
    "San Francisco, CA",
    "Charlotte, NC",
    "Indianapolis, IN",
    "Seattle, WA",
    "Denver, CO",
    "Washington, DC"
  ];

const citySlice = createSlice({
  name: "user", 
  initialState,
});

export default citySlice.reducer;