import { createSlice } from '@reduxjs/toolkit';
import  secureLocalStorage  from  "react-secure-storage";

const initialState = {
  userInfo: secureLocalStorage.getItem('userInfo')
    ? JSON.parse(secureLocalStorage.getItem('userInfo'))
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      secureLocalStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    clearCredentials: (state, action) => {
      state.userInfo = null;
      secureLocalStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;