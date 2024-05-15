import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";
<<<<<<< HEAD
import categoriesReducer from "../components/Main/Categories/CategorySlice/CategorySlice"
=======
import authSlice from "../components/Login/loginSlice";
>>>>>>> f92bbd421c7804e0637be588f9d7a4abbf946814

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
<<<<<<< HEAD
    categories: categoriesReducer
=======
    auth: authSlice,
>>>>>>> f92bbd421c7804e0637be588f9d7a4abbf946814
  }
});
