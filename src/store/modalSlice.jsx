import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  isModalVisible: false,
  actionType: null,
  data: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    modalData(state, action) {
      state.data = action.payload;
    },
    display(state, action) {
      state.isModalVisible = true;
      state.actionType = action.payload;
    },
    hide(state) {
      state.isModalVisible = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
