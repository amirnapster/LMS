// @mui
import { Box, Pagination, Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { ICourseProps } from 'types/course'
// types
import type { RootState } from 'libs/redux/store'
import { Course } from 'libs/redux/services/karnama'
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item'

// ----------------------------------------------------------------------

type Props = {
  courses: Course[]
  loading?: boolean
}

export default function ElearningCourseList({ courses, loading }: Props) {
  // const { details } = useSelector((state: RootState) => state.courses)

  console.log(courses)

  return (
    <>
      <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
        {(loading ? [...Array(9)] : courses)?.map((course) =>
          course ? (
            <ElearningCourseItem key={course?.id} course={course} vertical />
          ) : (
            <ElearningCourseItemSkeleton key={course?.id} />
          )
        )}
      </Box>

      {/* <Pagination
        count={10}
        color='primary'
        size='large'
        sx={{
          my: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  )
}
