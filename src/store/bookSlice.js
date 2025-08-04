import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;


import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
});