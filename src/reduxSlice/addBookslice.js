import { createSlice } from "@reduxjs/toolkit";

const addBookslice = createSlice({
  name: "addBook",
  initialState: {
    isOpen: false,
    books: []
  },
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: Date.now() });
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    }
  }
});
export const { toggleModal, addBook, deleteBook, updateBook } = addBookslice.actions;
export default addBookslice.reducer;