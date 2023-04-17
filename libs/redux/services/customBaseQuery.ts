import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { RootState } from 'libs/redux/store'
import { clearAuth, setUserAuth } from 'libs/redux/slices/auth'
import { Mutex } from 'async-mutex'
import { API } from 'utils/statics/routes/api'
import { Token } from './auth/interface'

const mutex = new Mutex()
const baseQuery = fetchBaseQuery({
  baseUrl: API.ROOT,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken
    if (token) headers.set('Authorization', `Bearer ${token}`)

    return headers
  },
})
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  const state = api.getState() as RootState
  const { accessToken, refreshToken } = state.auth
  const body = { accessToken, refreshToken }

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        // @ts-ignore
        const refreshResult: QueryReturnValue<
          Token,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        > = await baseQuery(
          {
            url: API.REFRESH_TOKEN,
            method: 'post',
            body,
          },
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(setUserAuth({ ...refreshResult.data }))
          result = await baseQuery(args, api, extraOptions)
        }
        if (refreshResult.error) {
          api.dispatch(clearAuth())
          window.location.replace('/')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}
