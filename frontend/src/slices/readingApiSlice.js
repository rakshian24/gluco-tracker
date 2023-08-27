import { GET_ALL_READING_URL, READING_URL } from '../constants';
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
    getReadings: builder.query({
      query: () => ({
        url: `${GET_ALL_READING_URL}`,
        method: 'GET',
      }),
      invalidatesTags: ['Reading'],
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
    getReading: builder.query({
      query: ({ date }) => {
        return {
          url: `/api/v1/glucoseReading/${date}`,
          method: 'GET',
        }
      },
      invalidatesTags: ['Reading'],
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
  }),
});

export const {
  useCreateReadingMutation,
  useLazyGetReadingsQuery,
  useGetReadingQuery,
} = readingApiSlice;