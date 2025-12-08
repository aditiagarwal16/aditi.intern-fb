import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCount = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    // simulate API call
    return 5;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    addByAmount(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCount.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      });
  },
});

export const { increment, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
