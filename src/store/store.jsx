import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";
import categoriesReducer from "../components/Main/Categories/CategorySlice/CategorySlice"

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    categories: categoriesReducer
  }
});
