import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `/` }),
	tagTypes: ['Words'],
	refetchOnFocus: false,
	endpoints: (builder) => ({
		getWords: builder.query<string[], void>({
			query: () => `data.json`,
			providesTags: ['Words']
		})
	})
});

export const { useGetWordsQuery } = api;
