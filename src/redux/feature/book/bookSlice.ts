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
    filteredGenre: null,
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
    setFilteredGenre: (state, action) => {
      state.filteredGenre = action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSearchResults,
  setFilteredGenre,
} = bookSlice.actions;

export default bookSlice.reducer;
