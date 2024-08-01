import { createSlice } from '@reduxjs/toolkit';

const billSlice = createSlice({
  name: 'bill',
  initialState: [],
  reducers: {
    addBill: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBill } = billSlice.actions;
export default billSlice.reducer;
