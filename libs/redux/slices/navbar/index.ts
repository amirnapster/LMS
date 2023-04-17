import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isSearching: false,
  drawerStatus: false,
  textSearch: '',
  IsTransitioning: false,
}

export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState,
  reducers: {
    toggleNavbarSearch: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSearching: action.payload,
    }),
    toggleTransition: (state, action: PayloadAction<boolean>) => ({
      ...state,
      IsTransitioning: action.payload,
    }),
    toggleDrawer: (state, action: PayloadAction<boolean>) => ({
      ...state,
      drawerStatus: action.payload,
    }),
    setSearchText: (state, action: PayloadAction<string>) => ({
      ...state,
      textSearch: action.payload,
    }),
  },
})

export const {
  toggleNavbarSearch,
  toggleDrawer,
  setSearchText,
  toggleTransition,
} = navbarSlice.actions
export default navbarSlice.reducer
