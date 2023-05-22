import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      console.log(action.payload);
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions

export default counterSlice.reducer