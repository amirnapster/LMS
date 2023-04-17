import type { ReactNode } from 'react'
import type { AuthMode } from 'libs/redux/slices/auth/interface'

export type AuthCallBack = (arg: AuthMode) => void

export interface AuthWrapperProps {
  mode: AuthMode
  changeMode: AuthCallBack
}

export interface AuthCallBackProps {
  changeMode: AuthCallBack
}

export interface AuthFields {
  userName: string
  password: string
}

export type AuthForgotPasswordFields = {
  code: string
  userName?: string
  newPassword: string
  newPasswordConfirmation: string
}

export interface AuthFormProps {
  onSubmit: (data: AuthFields) => void
  changeMode: AuthCallBack
  mode: 'signIn' | 'signUp'
  loading: boolean
  children?: ReactNode
}

export interface SessionProps {
  onSubmit: (data: AuthFields) => void
  setIsSessionLimit: (state: boolean) => void
  isOtp: boolean
}

export interface ValueType {
  userName: string
}

export interface IConfirmNumber {
  value: string
  setStep: (state: 1 | 2) => void
  changeMode: AuthCallBack
}
