import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer
  }
});
