import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: "",
  },
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateSearchValue } = searchValueSlice.actions;
