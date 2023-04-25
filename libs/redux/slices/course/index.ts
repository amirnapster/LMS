import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { injectedRtkApi } from 'libs/redux/services/karnama'
import type { CourseSlice } from './interface'

const initialState: CourseSlice = {
  details: {},
}

export const courseSlice = createSlice({
  name: 'courseSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      injectedRtkApi.endpoints.getApiCoursesById.matchFulfilled,
      (state, { payload }) => ({
        ...state,
        details: payload,
      })
    )
  },
})

// export const {} = courseSlice.actions
export default courseSlice.reducer
