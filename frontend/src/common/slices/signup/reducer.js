import { combineReducers } from 'redux';
import { SIGN_UP_ERROR, SIGN_UP_INIT, SIGN_UP_SUCCESS } from './actions';

export const signUpLoading = (state = null, { type }) => {
  switch (type) {
    case SIGN_UP_INIT:
      return true;
    case SIGN_UP_SUCCESS:
    case SIGN_UP_ERROR:
      return false;
    default:
      return state;
  }
};

export const signUpSuccess = (state = null, { type }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
      return true;
    default:
      return state;
  }
};

export const signUpError = (state = null, { type = '', error }) => {
  switch (type) {
    case SIGN_UP_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  error: signUpError,
  isLoading: signUpLoading,
  isSignUpSuccess: signUpSuccess
});

export const getSignUpError = (state) => state.signup.error?.data?.message;
export const getSignUpLoading = (state) => state.signup.isLoading;
export const getIsSignUpSuccess = (state) => state.signup.isSignUpSuccess;