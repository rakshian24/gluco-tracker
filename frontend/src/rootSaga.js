import { spawn } from 'redux-saga/effects';
import { signUpSaga, signInSaga, signOutSaga, createReadingSaga } from './common/slices';

export default function* rootSaga() {
  yield spawn(signUpSaga);
  yield spawn(signInSaga);
  yield spawn(signOutSaga);
  yield spawn(createReadingSaga);
}
