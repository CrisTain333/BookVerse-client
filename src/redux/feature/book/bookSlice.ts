/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    searchQuery: "",
    searchResults: [],
  },
  reducers: {
    setSearchQuery: (
      state,
      action: PayloadAction<string>
    ) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchResults } =
  bookSlice.actions;

export default bookSlice.reducer;
