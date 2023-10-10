import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeLink: null,
};

const navigationLinksSlice = createSlice({
  name: "navigationLinks",
  initialState,
  reducers: {
    setActiveIcon: (state, action) => {
      // state.activeIcon = !state.activeIcon;
      state.activeIcon = action.payload;
    },
  },
});

export const { setActiveIcon } = navigationLinksSlice.actions;

export default navigationLinksSlice.reducer;
