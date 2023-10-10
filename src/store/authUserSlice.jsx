import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuth } = authUserSlice.actions;

export default authUserSlice.reducer;
