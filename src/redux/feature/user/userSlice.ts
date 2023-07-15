/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getUserProfile } from "../../../Api";

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (token: string) => {
    const response = await getUserProfile(token);
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || "",
    isLoading: true,
    error: false,
    errorMessage: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.error = false;
        state.user = null;
        state.errorMessage = "";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action?.payload?.data;
        state.isLoading = false;
        state.error = false;
        state.errorMessage = "";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.error = true;
        state.errorMessage = action.error.message!;
        state.token = "";
        localStorage.removeItem("token");
      });
  },
});

export const { setUser, setToken, logout } =
  authSlice.actions;

export default authSlice.reducer;
