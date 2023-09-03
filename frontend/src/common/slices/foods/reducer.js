import { combineReducers } from 'redux';
import { FETCH_FOODS_INIT, FETCH_FOODS_SUCCESS, FETCH_FOODS_ERROR } from './actions';

export const fetchFoodsLoading = (state = null, { type }) => {
  switch (type) {
    case FETCH_FOODS_INIT:
      return true;
    case FETCH_FOODS_SUCCESS:
    case FETCH_FOODS_ERROR:
      return false;
    default:
      return state;
  }
};

export const foods = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_FOODS_SUCCESS:
      return payload
    default:
      return state;
  }
};

export const fetchFoodsError = (state = null, { type, error }) => {
  switch (type) {
    case FETCH_FOODS_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  isLoading: fetchFoodsLoading,
  foodsData: foods,
  error: fetchFoodsError,
});

export const getFoodsLoading = (state) => state.foods.isLoading;
export const getFoods = (state) => state.foods.foodsData;
export const getFoodsError = (state) => state.foods.error?.data?.message;