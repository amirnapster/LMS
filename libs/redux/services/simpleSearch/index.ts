import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'utils/statics/routes/api'
import type { simpleSearch_Response } from './interface'

export const simpleSearchApi = createApi({
  reducerPath: 'simpleSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.ROOT }),
  endpoints: (builder) => ({
    getSimpleSearch: builder.query<simpleSearch_Response, string>({
      query: (text) =>
        `${API.SIMPLE_SEARCH}?textSearch=${text}&page=1&pageSize=50`,
    }),
  }),
})

export const { useGetSimpleSearchQuery } = simpleSearchApi
