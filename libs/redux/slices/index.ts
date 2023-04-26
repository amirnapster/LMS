import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { authApi } from '../services/auth'
import { simpleSearchApi } from '../services/simpleSearch'
import { emptySplitApi } from '../services/emptyApi'
import authSlice from './auth'
import navbarSlice from './navbar'
// import storage from 'redux-persist/lib/storage'  # For Local Storage
import contactSupportSlice from './contactSupport'
import requestConsultantSlice from './requestConsultant'
import courseSlice from './course'
import coursesSlice from './courses'

import type { AuthSlice } from './auth/interface'

const cookiePersistConfig = {
  key: 'cookie',
  storage: new CookieStorage(Cookies, {
    expiration: {
      default: 365 * 86400, // # One Year For Expiration
    },
  }),
  whitelist: ['accessToken', 'refreshToken', 'packageType'],
  stateReconciler: autoMergeLevel2, //  # For Only Shallow Merging New States With Defined States
}

export const reducers = combineReducers({
  auth: persistReducer<AuthSlice>(cookiePersistConfig, authSlice),
  course: courseSlice,
  courses: coursesSlice,
  contactSupport: contactSupportSlice,
  requestConsultant: requestConsultantSlice,
  navbar: navbarSlice,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})
