import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RequestConsultant } from './interface'

const initialState: RequestConsultant = {
  visible: false,
}

export const requestConsultantSlice = createSlice({
  name: 'requestConsultantSlice',
  initialState,
  reducers: {
    setVisible: (state, action: PayloadAction<boolean>) => ({
      ...state,
      visible: action.payload,
    }),
  },
})

export const { setVisible } = requestConsultantSlice.actions
export default requestConsultantSlice.reducer
