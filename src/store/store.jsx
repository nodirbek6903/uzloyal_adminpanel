import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";
import authSlice from "../components/Login/loginSlice";

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    auth: authSlice,
  }
});
