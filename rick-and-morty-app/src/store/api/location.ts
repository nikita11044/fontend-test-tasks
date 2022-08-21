import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { API_URL } from '../../constant';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getLocationById: builder.query<Location[], number | number[]>({
      query: (id) => `/location/${id}`,
      transformResponse(data: Location | CommonResponse<Location[]>) {
        return 'results' in data ? data.results : [data];
      },
    }),
  }),
});

export const { useGetLocationByIdQuery } = locationApi;
