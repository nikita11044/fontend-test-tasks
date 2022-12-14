import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constant';
import { RootState } from '../store';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<CommonResponse<Character[]>, void>({
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const state = queryApi.getState();
        const { searchValue, page } = (state as RootState).filter;

        const response = (await baseQuery(
          `/character?name=${searchValue}&page=${page}`,
        )) as any;

        return response;
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
