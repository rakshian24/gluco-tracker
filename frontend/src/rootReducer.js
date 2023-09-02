import { combineReducers } from 'redux';
import {
  signup,
  auth,
  signIn,
  signOut,
  theme,
  createReading,
  readings,
  readingDetails
} from "./common/slices";

export default combineReducers({
  signup,
  auth,
  signIn,
  signOut,
  theme,
  createReading,
  readings,
  readingDetails
});