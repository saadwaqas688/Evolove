import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogs:[],
  blogsLoading:false,
  blogError:false,
};

const blogs = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.blogsLoading=false;
      state.blogError=false;
      return state
    },
    setBlogLoading: (state) => {
      state.blogsLoading = true;
      state.blogError=false;
      return state;
    },
    setBlogError: (state) => {
      state.blogsLoading = false;
      state.blogError=true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const blogsActions = blogs.actions;

export const blogsReducer = blogs.reducer;
