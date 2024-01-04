import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./Reducer/CreateSlice";

const store = configureStore({
  reducer: {
    cart: CreateSlice,
  },
});

export default store;
