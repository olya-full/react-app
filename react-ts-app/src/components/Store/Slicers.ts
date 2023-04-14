import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewCard } from "../../types/types";

interface ICreatedCardsState {
  cards: INewCard[];
}

export const createdCardsSlice = createSlice({
  name: "createdCards",
  initialState: {
    cards: []
  } as ICreatedCardsState,
  reducers: {
    addNewCard: (state, action: PayloadAction<INewCard>) => {
      state.cards.push(action.payload);
    }
  }
})

export const { addNewCard } = createdCardsSlice.actions;
