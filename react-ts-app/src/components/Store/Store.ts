import { configureStore } from "@reduxjs/toolkit";
import { createdCardsSlice } from "./Slices/createdCardsSlice";
import { searchValueSlice } from "./Slices/searchValueSlice";

export const store = configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
    searchValue: searchValueSlice.reducer,
  }
})

export type IRootState = ReturnType<typeof store.getState>;
export type IRootDispatch = typeof store.dispatch;
