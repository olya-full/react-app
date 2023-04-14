import { configureStore } from "@reduxjs/toolkit";
import { createdCardsSlice } from "./Slicers";

export const store = configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
  }
})

export type IRootState = ReturnType<typeof store.getState>;
export type IRootDispatch = typeof store.dispatch;