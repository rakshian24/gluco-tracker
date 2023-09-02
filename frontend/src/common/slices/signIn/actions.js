export const SIGN_IN_INIT = 'SIGN_IN_INIT';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';

export const signInInit = (payload) => ({ type: SIGN_IN_INIT, payload });
export const signInSuccess = () => ({ type: SIGN_IN_SUCCESS });
export const signInError = (error) => ({ type: SIGN_IN_ERROR, error });