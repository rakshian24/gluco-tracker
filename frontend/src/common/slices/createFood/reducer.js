import { combineReducers } from 'redux';
import { CREATE_FOOD_INIT, CREATE_FOOD_SUCCESS, CREATE_FOOD_ERROR } from './actions';

export const createFoodLoading = (state = null, { type }) => {
  switch (type) {
    case CREATE_FOOD_INIT:
      return true;
    case CREATE_FOOD_SUCCESS:
    case CREATE_FOOD_ERROR:
      return false;
    default:
      return state;
  }
};

export const food = (state = null, { type, payload }) => {
  switch (type) {
    case CREATE_FOOD_SUCCESS:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
};

export const createFoodError = (state = null, { type, error }) => {
  switch (type) {
    case CREATE_FOOD_ERROR:
      return error;
    default:
      return state;
  }
};


export default combineReducers({
  error: createFoodError,
  isLoading: createFoodLoading,
  food
});

export const getCreateFoodError = (state) => state.createFood.error?.data?.message;
export const getCreateFoodLoading = (state) => state.createFood.isLoading;
export const getNewFood = (state) => state.createFood.food;