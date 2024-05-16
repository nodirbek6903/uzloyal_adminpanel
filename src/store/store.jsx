import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";
import categoriesReducer from "../components/Main/Categories/CategorySlice/CategorySlice"
import newsReducer from "../components/Main/News/NewsSlice"
import authSlice from "../components/Login/loginSlice";

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    categories: categoriesReducer,
    news: newsReducer,
    auth: authSlice,
  }
});
