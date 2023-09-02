import { spawn } from 'redux-saga/effects';
import { signUpSaga, signInSaga, signOutSaga } from './common/slices';

export default function* rootSaga() {
  yield spawn(signUpSaga);
  yield spawn(signInSaga);
  yield spawn(signOutSaga);
}
