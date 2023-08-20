import { READING_URL } from '../constants';
import { formatErrorObject } from '../utils';
import { apiSlice } from './apiSlice';

export const readingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createReading: builder.mutation({
      query: (data) => ({
        url: `${READING_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Reading'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
  }),
});

export const {
  useCreateReadingMutation,
} = readingApiSlice;