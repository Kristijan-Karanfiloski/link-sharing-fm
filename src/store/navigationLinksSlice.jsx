import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: "Links",
};

const navigationLinksSlice = createSlice({
  name: "navigationLinks",
  initialState,
  reducers: {
    setActiveLink: (state, action) => {
      // state.activeIcon = !state.activeIcon;
      state.activeLink = action.payload;
    },
  },
});

export const { setActiveLink } = navigationLinksSlice.actions;

export default navigationLinksSlice.reducer;
