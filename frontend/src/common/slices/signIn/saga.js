import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import { signInSuccess, signInError, SIGN_IN_INIT } from './actions';
import { API_ENDPOINTS } from '../../../constants';
import { setCredentials } from '../auth/actions';
import { formatErrorObject } from '../../../utils';

export function* signIn(action) {
  try {
    let response = yield axios.post(API_ENDPOINTS.SIGN_IN, {
      ...action.payload
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    yield put(setCredentials(response.data.data));
    yield put(signInSuccess(response.data.data));
  } catch (error) {
    yield put(signInError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(SIGN_IN_INIT, signIn);
}

export default rootSaga;
