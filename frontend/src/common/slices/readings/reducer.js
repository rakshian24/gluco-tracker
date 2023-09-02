import { combineReducers } from 'redux';
import { FETCH_READINGS_INIT, FETCH_READINGS_SUCCESS, FETCH_READINGS_ERROR } from './actions';

export const fetchReadingsLoading = (state = null, { type }) => {
  switch (type) {
    case FETCH_READINGS_INIT:
      return true;
    case FETCH_READINGS_SUCCESS:
    case FETCH_READINGS_ERROR:
      return false;
    default:
      return state;
  }
};

export const readings = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_READINGS_SUCCESS:
      return payload
    default:
      return state;
  }
};

export const fetchReadingsError = (state = null, { type, error }) => {
  switch (type) {
    case FETCH_READINGS_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  isLoading: fetchReadingsLoading,
  readingsData: readings,
  error: fetchReadingsError,
});

export const getReadingsLoading = (state) => state.readings.isLoading;
export const getReadings = (state) => state.readings.readingsData;
export const getReadingsError = (state) => state.readings.error?.data?.message;