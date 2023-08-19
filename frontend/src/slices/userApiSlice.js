import { USERS_URL } from '../constants';
import { formatErrorObject } from '../utils';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signIn`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signOut`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  useUpdateUserDetailsMutation,
} = userApiSlice;