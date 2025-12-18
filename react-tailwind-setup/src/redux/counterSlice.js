// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchCount = createAsyncThunk("counter/fetchCount", async () => {
//   return 5; // simulate API call
// });

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { value: 0, loading: false },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     addByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCount.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchCount.fulfilled, (state, action) => {
//         state.loading = false;
//         state.value += action.payload;
//       });
//   },
// });

// // SELECTOR
// export const selectCounterValue = (state) => state.counter.value;

// export const { increment, decrement, addByAmount } = counterSlice.actions;
// export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// Selector
export const selectCounterValue = (state) => state.counter.value;

export default counterSlice.reducer;
