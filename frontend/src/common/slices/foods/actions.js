export const FETCH_FOODS_INIT = 'FETCH_FOODS_INIT';
export const FETCH_FOODS_SUCCESS = 'FETCH_FOODS_SUCCESS';
export const FETCH_FOODS_ERROR = 'FETCH_FOODS_ERROR';

export const fetchFoodsInit = (payload) => ({ type: FETCH_FOODS_INIT, payload });
export const fetchFoodsSuccess = (payload) => ({ type: FETCH_FOODS_SUCCESS, payload });
export const fetchFoodsError = (error) => ({ type: FETCH_FOODS_ERROR, error });