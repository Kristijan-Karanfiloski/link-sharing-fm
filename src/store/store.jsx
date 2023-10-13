import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUserSlice.jsx";
import navigationLinksSlice from "./navigationLinksSlice.jsx";
import linkSelectorSlice from "./linkSelectorSlice.jsx";

const store = configureStore({
  reducer: {
    authUserSlice: authUserSlice,
    navigationLinksSlice: navigationLinksSlice,
    linkSelectorSlice: linkSelectorSlice,
  },
});

export default store;
