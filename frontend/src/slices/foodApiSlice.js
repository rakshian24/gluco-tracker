import { CREATE_FOOD_URL, GET_ALL_FOODS_URL } from '../constants';
import { formatErrorObject } from '../utils';
import { apiSlice } from './apiSlice';

export const readingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createFood: builder.mutation({
      query: (data) => ({
        url: `${CREATE_FOOD_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Food'],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
    getFoods: builder.query({
      query: () => ({
        url: `${GET_ALL_FOODS_URL}`,
        method: 'GET',
      }),
      invalidatesTags: ['Food'],
      transformErrorResponse: (response) => formatErrorObject(response),
    }),
  }),
});

export const {
  useCreateFoodMutation,
  useLazyGetFoodsQuery,
} = readingApiSlice;