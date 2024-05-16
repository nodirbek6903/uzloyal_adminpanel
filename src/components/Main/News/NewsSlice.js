import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../service/api";
import { toast } from "react-toastify";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/news");
      return response.data.data;
    } catch (error) {
      console.error("Fetch News Error:", error.response);
      return rejectWithValue(error.message);
    }
  }
);

export const addNews = createAsyncThunk(
  "news/addNews",
  async (newNews, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("title_en", newNews?.title_en);
      formData.append("title_ru", newNews?.title_ru);
      formData.append("title_uz", newNews?.title_uz);
      formData.append("title_tr", newNews?.title_tr);
      formData.append("title_zh", newNews?.title_zh);
      formData.append("text_en", newNews?.text_en);
      formData.append("text_ru", newNews?.text_ru);
      formData.append("text_uz", newNews?.text_uz);
      formData.append("text_tr", newNews?.text_tr);
      formData.append("text_zh", newNews?.text_zh);
      formData.append("author", newNews?.author_news);
      newNews?.images.forEach(img => {formData.append("images", img)})
      const response = await axios.post("/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Add News Error:", error.response);
      return rejectWithValue(error.message);
    }
  }
);

export const editNews = createAsyncThunk(
  "news/editNews",
  async (updateNews, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("title_en", updateNews?.editTitleEn);
      formData.append("title_ru", updateNews?.editTitleRu);
      formData.append("title_uz", updateNews?.editTitleUz);
      formData.append("title_tr", updateNews?.editTitleTr);
      formData.append("title_zh", updateNews?.editTitleZh);
      formData.append("text_en", updateNews?.editText_en);
      formData.append("text_ru", updateNews?.editText_ru);
      formData.append("text_uz", updateNews?.editText_uz);
      formData.append("text_tr", updateNews?.editText_tr);
      formData.append("text_zh", updateNews?.editText_zh);
      formData.append("author", updateNews?.author_news);
      newNews?.images.forEach(img => {formData.append("images", img)})
      const response = await axios.put(`/news/${updateNews?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Edit News Error:", error.response);
      return rejectWithValue(error.message);
    }
  }
);

export const removeNews = createAsyncThunk(
  "news/removeNews",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`news/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    newsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.newsData.push(action.payload);
        toast.success("Added news successfully");
      })
      .addCase(addNews.rejected, (state, action) => {
        state.error = action.payload;
        toast.error("Failed to add news");
      })
      .addCase(editNews.fulfilled, (state, action) => {
        const index = state.newsData.findIndex(
          (news) => news.id === action.payload.id
        );
        if (index !== -1) {
          state.newsData[index] = action.payload;
        }
        toast.success("Edited news successfully");
      })
      .addCase(editNews.rejected, (state, action) => {
        state.error = action.payload;
        toast.error("Failed to edit news");
      })
      .addCase(removeNews.fulfilled, (state, action) => {
        state.newsData = state.newsData.filter(
          (news) => news.id !== action.payload
        );
        toast.success("Deleted news successfully");
      })
      .addCase(removeNews.rejected, (state, action) => {
        state.error = action.payload;
        toast.error("Failed to delete news");
      });
  },
});

export default newsSlice.reducer;
