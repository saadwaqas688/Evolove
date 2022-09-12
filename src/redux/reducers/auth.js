import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: "false",
  userData:""
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginHandler: (state, payload) => {
      state.loggedIn = payload.payload.loggedIn;
      if (state.loggedIn === "true") {
        localStorage.setItem("auth", payload.payload.token);
      }
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const authActions = auth.actions;

export const authReducer = auth.reducer;
