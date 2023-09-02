import { SET_THEME } from './actions';
import { initialState } from "../../../initialState";

export const theme = (state = initialState.theme, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
};

export default theme;

export const getTheme = (state) => state.theme;