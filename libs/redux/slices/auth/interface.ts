import type { SignInApiArg, Token } from 'libs/redux/services/karnama'

export type AuthMode =
  | 'signIn'
  | 'signUp'
  | 'forgotPassword'
  | 'confirm'
  | 'otp'
  | 'newUser'
  | 'completeProfile'

export interface UserData {
  userName: SignInApiArg['userSignInForm']['userName']
  password: SignInApiArg['userSignInForm']['password']
}

export interface AuthSlice extends UserData {
  mode: AuthMode
  accessToken: Token['accessToken']
  refreshToken: Token['refreshToken']
  visible: boolean
  packageType?: number
}

export interface IVisibleData {
  visible: boolean
  userName?: string
  mode?: AuthMode
}
