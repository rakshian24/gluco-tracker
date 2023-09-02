export const FETCH_READING_DETAILS_INIT = 'FETCH_READING_DETAILS_INIT';
export const FETCH_READING_DETAILS_SUCCESS = 'FETCH_READING_DETAILS_SUCCESS';
export const FETCH_READING_DETAILS_ERROR = 'FETCH_READING_DETAILS_ERROR';

export const fetchReadingsDetailsInit = (payload) => ({ type: FETCH_READING_DETAILS_INIT, payload });
export const fetchReadingsDetailsSuccess = (payload) => ({ type: FETCH_READING_DETAILS_SUCCESS, payload });
export const fetchReadingsDetailsError = (error) => ({ type: FETCH_READING_DETAILS_ERROR, error });