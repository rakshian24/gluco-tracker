export const SIGN_OUT_INIT = 'SIGN_OUT_INIT';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR';

export const signOutInit = () => ({ type: SIGN_OUT_INIT });
export const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });
export const signOutError = (error) => ({ type: SIGN_OUT_ERROR, error });