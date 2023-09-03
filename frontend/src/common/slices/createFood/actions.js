export const CREATE_FOOD_INIT = 'CREATE_FOOD_INIT';
export const CREATE_FOOD_SUCCESS = 'CREATE_FOOD_SUCCESS';
export const CREATE_FOOD_ERROR = 'CREATE_FOOD_ERROR';

export const createFoodInit = (payload) => ({ type: CREATE_FOOD_INIT, payload });
export const createFoodSuccess = (payload) => ({ type: CREATE_FOOD_SUCCESS, payload });
export const createFoodError = (error) => ({ type: CREATE_FOOD_ERROR, error });