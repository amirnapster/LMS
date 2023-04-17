import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import type { Package_Type, Token } from 'libs/redux/services/auth/interface'
import type { AuthSlice, IVisibleData, UserData } from './interface'

const initialState: AuthSlice = {
  mode: 'signUp',
  accessToken: '',
  refreshToken: '',
  visible: false,
  packageType: undefined,
  userName: '',
  password: '',
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<Token>) => {
      const { accessToken, refreshToken } = action.payload
      Cookies.set('token', accessToken, {
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2)),
      })
      return { ...state, accessToken, refreshToken }
    },
    clearAuth: (state) => {
      Cookies.remove('token')
      Cookies.remove('packageType')
      localStorage.removeItem('userInfo')
      return {
        ...state,
        accessToken: '',
        refreshToken: '',
        packageType: undefined,
      }
    },
    setVisible: (state, action: PayloadAction<IVisibleData>) => ({
      ...state,
      visible: action.payload.visible,
      userName: !action.payload.visible
        ? ''
        : action.payload.userName || state.userName,
      mode: action.payload.mode || state.mode,
    }),
    setPackageType: (state, action: PayloadAction<Package_Type>) => {
      Cookies.set('packageType', String(action.payload), {
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2)),
      })
      return {
        ...state,
        packageType: action.payload,
      }
    },
    setConfirmData: (state, action: PayloadAction<UserData>) => {
      const { userName, password } = action.payload
      return { ...state, mode: 'confirm', userName, password }
    },
    setUserNameAndPassword: (state, action: PayloadAction<UserData>) => {
      const { userName, password } = action.payload
      return { ...state, userName, password }
    },
  },
})

export const {
  setUserAuth,
  clearAuth,
  setVisible,
  setPackageType,
  setConfirmData,
  setUserNameAndPassword,
} = authSlice.actions
export default authSlice.reducer
