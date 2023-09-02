import { combineReducers } from 'redux';
import { SIGN_IN_ERROR, SIGN_IN_INIT, SIGN_IN_SUCCESS } from './actions';

export const signInLoading = (state = null, { type }) => {
  switch (type) {
    case SIGN_IN_INIT:
      return true;
    case SIGN_IN_SUCCESS:
    case SIGN_IN_ERROR:
      return false;
    default:
      return state;
  }
};

export const signInSuccess = (state = null, { type }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return true;
    default:
      return state;
  }
};

export const signInError = (state = null, { type = '', error }) => {
  switch (type) {
    case SIGN_IN_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  error: signInError,
  isLoading: signInLoading,
  isSignInSuccess: signInSuccess
});

export const getSignInError = (state) => state.signIn.error?.data?.message;
export const getSignInLoading = (state) => state.signIn.isLoading;
export const getIsSignInSuccess = (state) => state.signIn.isSignInSuccess;