import { createSlice } from '@reduxjs/toolkit'
import { injectedRtkApi } from 'libs/redux/services/karnama'
import type { CoursesSlice } from './interface'

const initialState: CoursesSlice = {
  details: [],
}

export const coursesSlice = createSlice({
  name: 'coursesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      injectedRtkApi.endpoints.getCourses.matchFulfilled,
      (state, { payload }) => ({
        ...state,
        details: payload,
      })
    )
  },
})

// export const {} = coursesSlice.actions
export default coursesSlice.reducer
