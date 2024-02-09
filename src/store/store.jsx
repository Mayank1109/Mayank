import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import popupReducer from "./componentSlice";
import modalReducer from "./modalSlice";
import optionReducer from "./optionsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    popup: popupReducer,
    modal: modalReducer,
    option: optionReducer,
  },
});

export default store;
