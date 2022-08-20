import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constant';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Character, unknown>({
      query: () => '/character',
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/characters/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
