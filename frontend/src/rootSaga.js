import { spawn } from 'redux-saga/effects';
import {
  signUpSaga,
  signInSaga,
  signOutSaga,
  createReadingSaga,
  fetchReadingsSaga,
  fetchReadingDetailsSaga,
  createFoodSaga,
  fetchFoodsSaga
} from './common/slices';

export default function* rootSaga() {
  yield spawn(signUpSaga);
  yield spawn(signInSaga);
  yield spawn(signOutSaga);
  yield spawn(createReadingSaga);
  yield spawn(fetchReadingsSaga);
  yield spawn(fetchReadingDetailsSaga);
  yield spawn(createFoodSaga);
  yield spawn(fetchFoodsSaga);
}
