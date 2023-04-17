import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'utils/statics/routes/api'

export const analyticsApi = createApi({
  reducerPath: 'analyticsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.ANALYTICS_ROOT }),
  endpoints: (builder) => ({
    createLog: builder.mutation({
      query: (body) => ({
        url: API.VISIT_LOG,
        method: 'POST',
        body,
      }),
    }),
    updateLog: builder.mutation({
      query: (body) => ({
        url: API.UPDATE_VISIT_LOG,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useCreateLogMutation, useUpdateLogMutation } = analyticsApi
