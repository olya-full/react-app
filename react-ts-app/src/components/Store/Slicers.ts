import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewCard } from "../../types/types";


export const createdCardsSlice = createSlice({
  name: "createdCards",
  initialState: {
    cards: []
  },
  reducers: {
    addNewCard: (state, action: PayloadAction<INewCard>) => {
      state.cards.push(action.payload);
    }
  }
})

