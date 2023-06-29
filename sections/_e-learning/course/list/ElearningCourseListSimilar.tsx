// next
import NextLink from 'next/link'
// @mui
import { Box, Container, Stack, Button, Typography } from '@mui/material'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
// routes
import { paths } from 'routes/paths'
// types
import { ICourseProps } from 'types/course'
// components
import Iconify from 'components/iconify'
//
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'
import { ElearningCourseItem } from '../item'

// ----------------------------------------------------------------------

type Props = {
  courses: ICourseProps[]
}

export default function ElearningCourseListSimilar({ courses }: Props) {
  const isMdUp = useResponsive('up', 'md')

  const { details } = useSelector((state: RootState) => state.course)

  const viewAllBtn = (
    <Button
      component={NextLink}
      href={`/categories/${details.categoryId}`}
      color='inherit'
      endIcon={<Iconify icon='carbon:chevron-left' />}
    >
      مشاهده همه
    </Button>
  )

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 5 },
      }}
    >
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant='h3'>دوره های مرتبط</Typography>

          {isMdUp && viewAllBtn}
        </Stack>

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
          {details?.category?.courses?.map((course) => (
            <ElearningCourseItem key={course.id} course={course} vertical />
          ))}
        </Box>

        {!isMdUp && (
          <Stack alignItems='center' sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  )
}
