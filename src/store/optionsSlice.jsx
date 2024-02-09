import { createSlice } from "@reduxjs/toolkit";

const initialOptionState = { isOptionsVisible: false };

const optionsSlice = createSlice({
  name: "option",
  initialState: initialOptionState,
  reducers: {
    display(state) {
      state.isOptionsVisible = true;
    },
    hide(state) {
      state.isOptionsVisible = false;
    },
  },
});

export const optionActions = optionsSlice.actions;

export default optionsSlice.reducer;
