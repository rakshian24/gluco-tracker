export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const setCredentials = (payload) => ({ type: SET_CREDENTIALS, payload });
export const clearCredentials = () => ({ type: CLEAR_CREDENTIALS });