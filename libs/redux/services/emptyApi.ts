import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './customBaseQuery'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})
