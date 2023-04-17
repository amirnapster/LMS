import { Package_Type } from 'libs/redux/services/auth/interface'

export type AuthMode =
  | 'signIn'
  | 'signUp'
  | 'forgotPassword'
  | 'confirm'
  | 'otp'
  | 'newUser'
  | 'completeProfile'

export interface UserData {
  userName: string
  password: string
}

export interface AuthSlice extends UserData {
  mode: AuthMode
  accessToken: string
  refreshToken: string
  visible: boolean
  packageType?: Package_Type
}

export interface IVisibleData {
  visible: boolean
  userName?: string
  mode?: AuthMode
}
