import secureLocalStorage from "react-secure-storage";
import { themes } from "./constants";

export const initialState = {
  auth: {
    userInfo: secureLocalStorage.getItem('userInfo')
      ? JSON.parse(secureLocalStorage.getItem('userInfo'))
      : null,
  },
  theme: themes.green,
}