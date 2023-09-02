import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import { fetchReadingsSuccess, fetchReadingsError, FETCH_READINGS_INIT } from './actions';
import { API_ENDPOINTS } from '../../../constants';
import { formatErrorObject } from '../../../utils';

export function* fetchReadings() {
  try {
    let response = yield axios.get(API_ENDPOINTS.GET_ALL_READING_URL);
    yield put(fetchReadingsSuccess(response.data));
  } catch (error) {
    yield put(fetchReadingsError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_READINGS_INIT, fetchReadings);
}

export default rootSaga;
