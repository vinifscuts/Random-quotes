import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./quoteSlice.js";

export const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
