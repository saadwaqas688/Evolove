import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recentSearches:[],

};

const recentSearches = createSlice({
  name: "recentSearches",
  initialState,
  reducers: {
    setRecentSearches: (state, action) => {
      state.recentSearches = action.payload;

      return state
    },
  },
});

// Action creators are generated for each case reducer function
export const recentSearchesActions = recentSearches.actions;

export const recentSearchesReducer = recentSearches.reducer;
