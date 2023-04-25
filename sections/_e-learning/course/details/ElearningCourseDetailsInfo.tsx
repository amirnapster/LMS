// @mui
import { Stack, Typography, Card, Box, Button } from '@mui/material'
// utils
import { fCurrency } from 'utils/helpers/formatNumber'
// types
import { ICourseProps } from 'types/course'
// components
import Iconify from 'components/iconify'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

type Props = {
  course: ICourseProps
}

export default function ElearningCourseDetailsInfo({ course }: Props) {
  const { price, priceSale, lessons, resources } = course

  const { details } = useSelector((state: RootState) => state.course)

  const lessonCount = details?.sections?.reduce(
    (acc, section) => (section?.lessons?.length ?? 0) + acc,
    0
  )

  return (
    <Card sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        {/* <Stack direction='row' sx={{ typography: 'h3' }}>
          {priceSale > 0 && (
            <Box
              component='span'
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(priceSale)}
            </Box>
          )}
          {fCurrency(price)}
        </Stack> */}

        <Stack spacing={2}>
          <Typography>این درس شامل موارد زیر است:</Typography>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:document' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.5 }}>
              {details?.sections?.length}
            </Box>
            بخش
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:document-download' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.5 }}>
              {lessonCount}
            </Box>
            درس
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:data-accessor' sx={{ mr: 1 }} />
            دسترسی دایم به کل دوره
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:devices' sx={{ mr: 1 }} />
            قابل استفاده در کامپیوتر و موبایل
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2' }}
          >
            <Iconify icon='carbon:certificate' sx={{ mr: 1 }} />
            مدرک پایان دوره
          </Stack>
        </Stack>

        <Button variant='contained' size='large' color='inherit'>
          شروع دوره
        </Button>
      </Stack>
    </Card>
  )
}
