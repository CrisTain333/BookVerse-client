/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { INewBook } from "../../../page/allBook";

interface WishlistState {
  books: INewBook[];
  reading: INewBook[];
  finished: INewBook[];
}

const initialState: WishlistState = {
  books: [],
  reading: [],
  finished: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<INewBook>) => {
      const existingBookIndex = state.books.findIndex(
        (book) => book._id === action.payload._id
      );
      if (existingBookIndex !== -1) {
        // Book already exists in the wishlist, remove it
        state.books.splice(existingBookIndex, 1);
      } else {
        // Book doesn't exist in the wishlist, add it
        state.books.push(action.payload);
      }
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.books)
      );
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload
      );
      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.books)
      ); // Update wishlist in localStorage
    },
    addToReading: (
      state,
      action: PayloadAction<INewBook>
    ) => {
      const existingBookIndex = state.reading.findIndex(
        (book) => book._id === action.payload._id
      );
      if (existingBookIndex === -1) {
        state.reading.push(action.payload);
      }
      localStorage.setItem(
        "reading",
        JSON.stringify(state.reading)
      );
    },
    removeFromReading: (
      state,
      action: PayloadAction<string>
    ) => {
      state.reading = state.reading.filter(
        (book) => book._id !== action.payload
      );
      localStorage.setItem(
        "reading",
        JSON.stringify(state.reading)
      );
    },

    loadWishlist: (state) => {
      const storedWishlist =
        localStorage.getItem("wishlist");
      if (storedWishlist) {
        state.books = JSON.parse(storedWishlist);
      }
      const storedReading = localStorage.getItem("reading");
      if (storedReading) {
        state.reading = JSON.parse(storedReading);
      }
      const storedFinished =
        localStorage.getItem("finished");
      if (storedFinished) {
        state.finished = JSON.parse(storedFinished);
      }
    },
  },
});

export const {
  addBook,
  removeBook,
  //   markAsFinished,
  removeFromReading,
  loadWishlist,
  addToReading,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
