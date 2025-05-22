import * as toolkitRaw from "@reduxjs/toolkit";
const { combineReducers } = toolkitRaw.default ?? toolkitRaw;

import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import drawerSlice from "./slices/drawerSlice";

// Combine reducers
const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
  drawer: drawerSlice.reducer,
});

export default rootReducer;
