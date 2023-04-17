import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API } from 'utils/statics/routes/api'
import type {
  AddToNewseltter_Payload,
  Auth_Payload,
  Forget_Password_Payload,
  GetActiveSessionsByUserInfo_Response,
  Logout_Response,
  TerminateSession_Payload,
  TerminateSession_Response,
  V2Response,
} from './interface'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.ROOT }),
  endpoints: (builder) => ({
    login: builder.mutation<V2Response, Auth_Payload>({
      query: (body) => ({
        url: API.SIGN_IN,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<unknown, Auth_Payload>({
      query: (body) => ({
        url: API.REGISTER,
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<Logout_Response, null>({
      query: () => ({
        url: API.LOGOUT,
        method: 'POST',
      }),
    }),
    confirm: builder.mutation({
      query: (body) => ({
        url: API.CONFIRM_OTP,
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: API.RESET_PASSWORD,
        method: 'POST',
        body,
      }),
    }),
    ReSendOtpCode: builder.mutation<any, string>({
      query: (username) => ({
        url: `${API.RE_SEND_OTP_CODE}?userName=${username}`,
        method: 'POST',
      }),
    }),
    forgetPassword: builder.mutation<unknown, Forget_Password_Payload>({
      query: (body) => ({
        url: API.FORGET_PASSWORD,
        method: 'POST',
        body,
      }),
    }),
    getActiveSessionsByUserInfo: builder.mutation<
      GetActiveSessionsByUserInfo_Response,
      Auth_Payload
    >({
      query: (body) => ({
        url: API.GET_ACTIVE_SESSION,
        method: 'POST',
        body,
      }),
    }),
    terminateSession: builder.mutation<
      TerminateSession_Response,
      TerminateSession_Payload
    >({
      query: (body) => ({
        url: API.TERMINATE_SESSION,
        method: 'DELETE',
        body,
      }),
    }),
    addToNewsletter: builder.mutation<V2Response, AddToNewseltter_Payload>({
      query: (body) => ({
        url: API.ADD_TO_NEWSLETTER,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useConfirmMutation,
  useResetPasswordMutation,
  useReSendOtpCodeMutation,
  useForgetPasswordMutation,
  useGetActiveSessionsByUserInfoMutation,
  useTerminateSessionMutation,
  useAddToNewsletterMutation,
} = authApi
