import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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