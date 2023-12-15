import React, { useState, useCallback, useEffect } from "react";
// @mui
import { Box, Pagination, Stack } from '@mui/material'
// types
import InfiniteScroll from "react-infinite-scroll-component";
import { Course, CourseDto } from 'libs/redux/services/karnama'
import { ElearningCourseItem, ElearningCourseItemSkeleton } from '../item'

// ----------------------------------------------------------------------

type Props = {
  courses: Course[]
  loading?: boolean
}

export default function ElearningCourseList({ courses, loading }: Props) {
  const perPage = 9;
  const [coursesPart, setCoursesPart] = useState<CourseDto[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!loading && courses)
      setCoursesPart(courses.slice(0, perPage));

  }, [loading, courses])
  const loadMoreCourses = useCallback(() => {
    // Here you should fetch more courses and add them to the courses array
    // For now, we'll just add the same courses again
    setCoursesPart((prev) => [...prev, ...courses.slice(coursesPart.length, coursesPart.length + perPage)]);
    setHasMore(coursesPart.length < courses.length); // Stop loading when we have 50 courses
  }, [coursesPart]);

  return (loading || !coursesPart || !coursesPart.length ?
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
    > { [...Array(3)]?.map((course) => <ElearningCourseItemSkeleton key={course?.id} vertical />)}</Box> :
    <InfiniteScroll
      dataLength={coursesPart.length}
      next={loadMoreCourses}
      hasMore={hasMore}
      loader={<div>...</div>}
    ><Box
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
        {coursesPart.map((course) => (
          <ElearningCourseItem key={course?.id} course={course} vertical />
        ))}
      </Box>
    </InfiniteScroll>


  )
}
