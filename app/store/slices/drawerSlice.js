import * as toolkitRaw from "@reduxjs/toolkit";
const { createSlice } = toolkitRaw.default ?? toolkitRaw;

const initialState = {
  isExpanded: true,
  isHidden: false,
  isOverlayExpanded: false,
};

// Second reducer
const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    expandDrawer: (state) => {
      return { ...state, isExpanded: true };
    },
    shrinkDrawer: (state) => {
      return { ...state, isExpanded: false };
    },
    hideDrawer: (state) => {
      return { ...state, isHidden: true };
    },
    showDrawer: (state) => {
      return { ...state, isHidden: false };
    },
    hideOverlay: (state) => {
      return { ...state, isOverlayExpanded: false };
    },
    showOverlay: (state) => {
      return { ...state, isOverlayExpanded: true };
    },
    resetDrawer: () => {
      console.log("resetting drawer");
      return {
        isExpanded: true,
        isHidden: false,
      };
    },
  },
});

export const {
  expandDrawer,
  shrinkDrawer,
  hideDrawer,
  showDrawer,
  resetDrawer,
  hideOverlay,
  showOverlay,
} = drawerSlice.actions;

export default drawerSlice;
