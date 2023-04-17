import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { reducers } from './slices'
import { rtkQueryErrorLogger } from './services/errorHandling'
import { authApi } from './services/auth'
import { simpleSearchApi } from './services/simpleSearch'
import { emptySplitApi } from './services/emptyApi'

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      emptySplitApi.middleware,
      authApi.middleware,
      simpleSearchApi.middleware,
      rtkQueryErrorLogger
    ),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
