import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ContactSupport } from './interface'

const initialState: ContactSupport = {
  showContact: false,
  currentState: false,
}

export const contactSupportSlice = createSlice({
  name: 'contactSupportSlice',
  initialState,
  reducers: {
    displayCurrentState: (state, action: PayloadAction<ContactSupport>) => ({
      ...state,
      ...action.payload,
    }),
  },
})

export const { displayCurrentState } = contactSupportSlice.actions
export default contactSupportSlice.reducer
