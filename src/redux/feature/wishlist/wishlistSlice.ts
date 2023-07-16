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
}

const initialState: WishlistState = {
  books: [],
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
    // removeBook: (state, action: PayloadAction<string>) => {
    //   state.books = state.books.filter(
    //     (book) => book.id !== action.payload
    //   );
    //   localStorage.setItem(
    //     "wishlist",
    //     JSON.stringify(state.books)
    //   ); // Update wishlist in localStorage
    // },
    // markAsFinished: (
    //   state,
    //   action: PayloadAction<string>
    // ) => {
    //   const book = state.books.find(
    //     (book) => book.id === action.payload
    //   );
    //   if (book) {
    //     // Update book as finished reading
    //     book.finishedReading = true;
    //     localStorage.setItem(
    //       "wishlist",
    //       JSON.stringify(state.books)
    //     ); // Update wishlist in localStorage
    //   }
    // },
    loadWishlist: (state) => {
      const storedWishlist =
        localStorage.getItem("wishlist");
      if (storedWishlist) {
        state.books = JSON.parse(storedWishlist);
      }
    },
  },
});

export const {
  addBook,
  //   removeBook,
  //   markAsFinished,
  loadWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
