import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialState {}
const initialState: InitialState = {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getRecord: (state: InitialState, action) => {
      state = action.payload;
    },
  },
});

export const { getRecord } = authSlice.actions;
export default authSlice.reducer;
