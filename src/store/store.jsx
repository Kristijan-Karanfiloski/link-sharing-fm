import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice.jsx";

const store = configureStore({
  reducer: {
    authUserSlice: authUserSlice,
  },
});

export default store;
