import { put, takeLatest } from 'redux-saga/effects';
import axios from "axios";

import { signOutSuccess, signOutError, SIGN_OUT_INIT } from './actions';
import { API_ENDPOINTS } from '../../../constants';
import { clearCredentials } from '../auth/actions';
import { formatErrorObject } from '../../../utils';

export function* signOut() {
  try {
    yield axios.post(API_ENDPOINTS.SIGN_OUT, {}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    yield put(clearCredentials());
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutError(formatErrorObject(error)));
  }
}

function* rootSaga() {
  yield takeLatest(SIGN_OUT_INIT, signOut);
}

export default rootSaga;
