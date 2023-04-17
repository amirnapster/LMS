import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status !== 401) {
      console.log(
        action.payload,
        JSON.stringify({
          type: 'error',
          message: action.payload.data?.message,
          config: { position: 'bottom-center' },
        })
      )
    }
  }

  return next(action)
}
