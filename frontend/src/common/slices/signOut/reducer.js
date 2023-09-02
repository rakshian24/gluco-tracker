import { combineReducers } from 'redux';
import { SIGN_OUT_ERROR, SIGN_OUT_INIT, SIGN_OUT_SUCCESS } from './actions';

export const signOutLoading = (state = null, { type }) => {
  switch (type) {
    case SIGN_OUT_INIT:
      return true;
    case SIGN_OUT_SUCCESS:
    case SIGN_OUT_ERROR:
      return false;
    default:
      return state;
  }
};

export const signOutSuccess = (state = null, { type }) => {
  switch (type) {
    case SIGN_OUT_SUCCESS:
      return true;
    default:
      return state;
  }
};

export const signOutError = (state = null, { type = '', error }) => {
  switch (type) {
    case SIGN_OUT_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  error: signOutError,
  isLoading: signOutLoading,
  isSignOutSuccess: signOutSuccess
});

export const getSignOutError = (state) => state.signOut.error?.data?.message;
export const getSignOutLoading = (state) => state.signOut.isLoading;
export const getIsSignOutSuccess = (state) => state.signOut.isSignOutSuccess;