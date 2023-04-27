import { configureStore } from "@reduxjs/toolkit";
import { createdCardsSlice } from "./Slices/createdCardsSlice";
import { searchValueSlice } from "./Slices/searchValueSlice";
import { photoApi } from "./PhotoApi";

export const store = configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
    searchValue: searchValueSlice.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDeafultMiddleware) => getDeafultMiddleware().concat(photoApi.middleware),
});

export type IRootState = ReturnType<typeof store.getState>;
export type IRootDispatch = typeof store.dispatch;
