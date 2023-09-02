import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import { fetchReadingsDetailsSuccess, fetchReadingsDetailsError, FETCH_READING_DETAILS_INIT } from './actions';
import { API_ENDPOINTS } from '../../../constants';
import { formatErrorObject } from '../../../utils';

export function* fetchReadingDetails(action) {
  try {
    let response = yield axios.get(`${API_ENDPOINTS.READING_URL}/${action.payload}`);
    yield put(fetchReadingsDetailsSuccess(response.data));
  } catch (error) {
    yield put(fetchReadingsDetailsError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_READING_DETAILS_INIT, fetchReadingDetails);
}

export default rootSaga;
