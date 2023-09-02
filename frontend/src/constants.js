export const API_ENDPOINTS = {
  SIGN_UP: '/api/v1/users',
  SIGN_IN: '/api/v1/users/signIn',
  SIGN_OUT: '/api/v1/users/signOut',
  PROFILE: '/api/v1/users/profile',
  READING_URL: '/api/v1/glucoseReading',
  GET_ALL_READING_URL: '/api/v1/glucoseReading/all',
  GET_ALL_FOODS_URL: '/api/v1/foods/all',
  CREATE_FOOD_URL: '/api/v1/foods'
}

export const BUTTON_TYPE = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  TERTIARY: 'TERTIARY'
};

export const ROUTES = {
  SIGN_UP: '/',
  SIGN_IN: '/sign-in',
  SIGN_OUT: '/sign-out',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  CREATE_READING: '/reading/create',
  LIST_READINGS: '/readings',
  READING_DETAILS: '/reading/:date'
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

export const TYPES_MAP = {
  BB: 'Before breakfast',
  AB: 'After breakfast',
  BL: 'Before Lunch',
  AL: 'After Lunch',
  BD: 'Before Dinner',
  AD: 'After Dinner',
};

export const themes = {
  green: 'green',
  violet: 'violet'
}

export const themes_color_map = {
  green: '#4AB9A4',
  violet: 'linear-gradient( 88.7deg,  rgba(207,150,207,1) -2.4%, rgba(107,116,179,1) 102% )'
}