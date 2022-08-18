import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  courses:[],
  coursesLoading:false,
  coursesError:false,
};

const courses = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
      state.coursesLoading=false;
      state.coursesError=false;
      return state
    },
    setCoursesLoading: (state) => {
      state.coursesLoading = true;
      state.coursesError=false;
      return state;
    },
    setCoursesError: (state) => {
      state.coursesLoading = false;
      state.coursesError=true;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const coursesActions = courses.actions;

export const coursesReducer = courses.reducer;
