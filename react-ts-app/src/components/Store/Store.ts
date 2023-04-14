import { configureStore } from "@reduxjs/toolkit";
import { createdCardsSlice } from "./Slicers";

export default configureStore({
  reducer: {
    createdCards: createdCardsSlice.reducer,
  }
})