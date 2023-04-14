import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewCard } from "../../types/types";

interface ICreatedCardsState {
  cards: INewCard[];
}

export const createdCardsSlice = createSlice({
  name: "createdCards",
  initialState: {
    cards: [],
  } as ICreatedCardsState,
  reducers: {
    addNewCard: (state, action: PayloadAction<INewCard>) => {
      state.cards.push(action.payload);
    }
  }
})

export const { addNewCard } = createdCardsSlice.actions;

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: localStorage.getItem("bestSearchValue") || "",
  },
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem("bestSearchValue", action.payload);
    }
  }
})

export const {updateSearchValue} = searchValueSlice.actions;
