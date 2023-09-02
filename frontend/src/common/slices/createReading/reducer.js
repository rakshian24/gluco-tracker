import { combineReducers } from 'redux';
import { CREATE_READING_INIT, CREATE_READING_SUCCESS, CREATE_READING_ERROR } from './actions';

export const createReadingLoading = (state = null, { type }) => {
  switch (type) {
    case CREATE_READING_INIT:
      return true;
    case CREATE_READING_SUCCESS:
    case CREATE_READING_ERROR:
      return false;
    default:
      return state;
  }
};

export const reading = (state = null, { type, payload }) => {
  switch (type) {
    case CREATE_READING_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};

export const createReadingError = (state = null, { type, error }) => {
  switch (type) {
    case CREATE_READING_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  error: createReadingError,
  isLoading: createReadingLoading,
  reading
});

export const getCreateReadingError = (state) => state.createReading.error?.data?.message;
export const getCreateReadingLoading = (state) => state.createReading.isLoading;
export const getNewReading = (state) => state.createReading.reading;