import { createSlice } from "@reduxjs/toolkit";
const initialPopupState = { isPopupVisible: false };
const popupSlice = createSlice({
  name: "popup",
  initialState: initialPopupState,
  reducers: {
    display(state) {
      state.isPopupVisible = true;
    },
    hide(state) {
      state.isPopupVisible = false;
    },
  },
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;
