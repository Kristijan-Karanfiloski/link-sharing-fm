import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  link: "GitHub",
};

const linkSelectorSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    selectLink(state, action) {
      state.link = action.payload;
    },
  },
});

export const { selectLink } = linkSelectorSlice.actions;

export default linkSelectorSlice.reducer;
