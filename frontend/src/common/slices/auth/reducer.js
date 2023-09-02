import secureLocalStorage from "react-secure-storage";

import { CLEAR_CREDENTIALS, SET_CREDENTIALS } from './actions';
import { initialState } from "../../../initialState";

export const auth = (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case SET_CREDENTIALS:
      secureLocalStorage.setItem('userInfo', JSON.stringify(payload));
      return {
        ...state,
        userInfo: payload
      };
    case CLEAR_CREDENTIALS:
      secureLocalStorage.removeItem('userInfo');
      return {
        ...state,
        userInfo: null
      };
    default:
      return state;
  }
};


export default auth;

export const getUserInfo = (state) => state.auth.userInfo;