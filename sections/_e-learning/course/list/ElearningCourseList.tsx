// @mui
import { Box, Pagination, Stack } from '@mui/material'
import { Course } from 'libs/redux/services/karnama'
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item'

// ----------------------------------------------------------------------

type Props = {
  courses: Course[]
  loading?: boolean
}

export default function ElearningCourseList({ courses, loading }: Props) {
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
        {(!loading && courses && courses.length ? courses : [...Array(9)])?.map((course) =>
          course ? (
            <ElearningCourseItem key={course?.id} course={course} vertical />
          ) : (
            <ElearningCourseItemSkeleton key={course?.id} />
          )
        )}
      </Box>
    </>
  )
}
