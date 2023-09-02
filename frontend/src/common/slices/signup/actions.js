export const SIGN_UP_INIT = 'SIGN_UP_INIT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const signUpInit = (payload) => ({ type: SIGN_UP_INIT, payload });
export const signUpSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signUpError = (error) => ({ type: SIGN_UP_ERROR, error });