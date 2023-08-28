import { createSlice } from '@reduxjs/toolkit';
import { themes } from '../constants';

const initialState = {
  theme: themes.green
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    getTheme: (state) => state.theme,
  },
});

export const { setTheme, getTheme } = themeSlice.actions;

export default themeSlice.reducer;