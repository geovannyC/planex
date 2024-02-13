import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  loading: boolean;
};

const initialState = {
  loading: true,
} as InitialState;

export const initialStateApp = createSlice({
  name: "initialStateApp",
  initialState,
  reducers: {
    reset: () => initialState,
    handleChangueState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  // increment: (state) => {
  //   state.value += 1;
  // },
  // decrement: (state) => {
  //   state.value -= 1;
  // },
  // incrementByAmount: (state, action: PayloadAction<number>) => {
  //   state.value += action.payload;
  // },
  // decrementByAmount: (state, action: PayloadAction<number>) => {
  //   state.value -= action.payload;
  // },
});

export const { handleChangueState } = initialStateApp.actions;
export default initialStateApp.reducer;
