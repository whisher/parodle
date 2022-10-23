import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const queryApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: `/` }),
	tagTypes: ['Words'],
	endpoints: (builder) => ({
		getWords: builder.query<string[], void>({
			query: () => `data.json`
		})
	})
});

export const { useGetWordsQuery } = queryApi;
