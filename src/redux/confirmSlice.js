import { createSlice } from "@reduxjs/toolkit";

export const confirmSlice = createSlice({
  name: "confirm",
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { setTrue, setFalse } = confirmSlice.actions;

export const selectConfirm = (state) => state.confirm.value;

export default confirmSlice.reducer;
