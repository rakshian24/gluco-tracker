import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signIn`,
        method: 'POST',
        body: data,
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signOut`,
        method: 'POST',
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
  useUpdateUserDetailsMutation,
} = userApiSlice;