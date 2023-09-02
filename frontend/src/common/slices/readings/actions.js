export const FETCH_READINGS_INIT = 'FETCH_READINGS_INIT';
export const FETCH_READINGS_SUCCESS = 'FETCH_READINGS_SUCCESS';
export const FETCH_READINGS_ERROR = 'FETCH_READINGS_ERROR';

export const fetchReadingsInit = (payload) => ({ type: FETCH_READINGS_INIT, payload });
export const fetchReadingsSuccess = (payload) => ({ type: FETCH_READINGS_SUCCESS, payload });
export const fetchReadingsError = (error) => ({ type: FETCH_READINGS_ERROR, error });