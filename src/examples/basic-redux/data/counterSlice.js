import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count1: 0,
    count2: 0,
  },
  reducers: {
    incrementCount1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count1 += 1;
    },
    decrementCount1: (state) => {
      state.count1 -= 1;
    },
    incrementCount2: (state) => {
      state.count2 += 1;
    },
    decrementCount2: (state) => {
      state.count2 -= 1;
    },
  },
});

export const {
  decrementCount1,
  incrementCount1,
  decrementCount2,
  incrementCount2,
} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount1 = (state) => state.counter.count1;
export const selectCount2 = (state) => state.counter.count2;

export default counterSlice.reducer;
