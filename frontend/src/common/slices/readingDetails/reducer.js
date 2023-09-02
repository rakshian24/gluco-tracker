import { combineReducers } from 'redux';
import { FETCH_READING_DETAILS_INIT, FETCH_READING_DETAILS_SUCCESS, FETCH_READING_DETAILS_ERROR } from './actions';

export const fetchReadingDetailsLoading = (state = null, { type }) => {
  switch (type) {
    case FETCH_READING_DETAILS_INIT:
      return true;
    case FETCH_READING_DETAILS_SUCCESS:
    case FETCH_READING_DETAILS_ERROR:
      return false;
    default:
      return state;
  }
};

export const readingDetails = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_READING_DETAILS_SUCCESS:
      return payload
    default:
      return state;
  }
};

export const fetchReadingsDetailsError = (state = null, { type, error }) => {
  switch (type) {
    case FETCH_READING_DETAILS_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  isLoading: fetchReadingDetailsLoading,
  readingDetailsData: readingDetails,
  error: fetchReadingsDetailsError,
});

export const getReadingDetailsLoading = (state) => state.readingDetails.isLoading;
export const getReadingDetails = (state) => state.readingDetails.readingDetailsData;
export const getReadingDetailsError = (state) => state.readingDetails.error?.data?.message;