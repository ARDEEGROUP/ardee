import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

const initialState = {
  isLoggedIn: false,
  user: null,
  authToken: null,
  sessionId: null,
  appVersion: null,
};

// Second reducer
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, user: action.payload, isLoggedIn: true };
    },
    setAuthToken: (state, action) => {
      return { ...state, authToken: action.payload };
    },
    setSessionId: (state, action) => {
      return { ...state, sessionId: action.payload };
    },
    setAppVersion: (state, action) => {
      return { ...state, appVersion: action.payload };
    },
    clearUser: () => {
      console.log("clearing user");
      return {
        isLoggedIn: false,
        user: null,
        authToken: null,
        sessionId: null,
        appVersion: null,
      };
    },
  },
});

export const { setUser, setAuthToken, setSessionId, setAppVersion, clearUser } =
  authSlice.actions;

export default authSlice;
