// API endpoints for resources
export const USERS_URL = '/api/v1/users';
export const READING_URL = '/api/v1/glucoseReading';
export const GET_ALL_READING_URL = '/api/v1/glucoseReading/all';
export const GET_ALL_FOODS_URL = '/api/v1/foods/all';
export const CREATE_FOOD_URL = '/api/v1/foods';

export const BUTTON_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
};

export const ROUTES = {
  SIGN_UP: '/',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  CREATE_READING: '/reading/create',
  LIST_READINGS: '/readings'

};

export const SELECT_DROP_DOWN_OPTIONS = [{
  label: 'Before breakfast',
  value: 'BB',
},
{
  label: 'After breakfast',
  value: 'AB',
},
{
  label: 'Before lunch',
  value: 'BL',
},
{
  label: 'After lunch',
  value: 'AL',
},
{
  label: 'Before dinner',
  value: 'BD',
},
{
  label: 'After dinner',
  value: 'AD',
}];