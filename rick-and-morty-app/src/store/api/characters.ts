import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constant';

type Meta = {
  count: number;
  pages: number;
  next: number;
  prev: number | null;
};

type AllCharactersResponse = {
  info: Meta;
  results: Character[];
};

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<Character[], void>({
      query: () => '/character',
      transformResponse(data: AllCharactersResponse) {
        return data.results;
      },
    }),
    getCharacterById: builder.query<Character, number>({
      query: (id) => `/characters/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
