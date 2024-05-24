import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "../components/Layout/menuSlice/menuSlice";
<<<<<<< HEAD
import categoriesReducer from "../components/Main/Categories/CategorySlice/CategorySlice";
import sourcesReducer from "../components/Main/Sources/SourcesSlice/SourcesSlice"
import blogsReducer from "../components/Main/Blogs/BlogSlice/BlogSlice";
=======
import categoriesReducer from "../components/Main/Categories/CategorySlice/CategorySlice"
import newsReducer from "../components/Main/News/NewsSlice"
>>>>>>> 9c6c20e80f9291bdd9c3347cffa96bccf97ad18c
import authSlice from "../components/Login/loginSlice";

export const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    categories: categoriesReducer,
<<<<<<< HEAD
    blogs: blogsReducer,
    sources: sourcesReducer,
=======
    news: newsReducer,
>>>>>>> 9c6c20e80f9291bdd9c3347cffa96bccf97ad18c
    auth: authSlice,
  },
});
