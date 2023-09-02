import { combineReducers } from 'redux';
import { signup, auth, signIn, signOut } from "./common/slices";

export default combineReducers({
  signup,
  auth,
  signIn,
  signOut
});