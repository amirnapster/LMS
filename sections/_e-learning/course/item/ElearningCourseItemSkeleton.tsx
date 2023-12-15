// @mui
import { Skeleton, Stack, Card, CardProps } from '@mui/material'
// hooks
import useResponsive from 'utils/hooks/useResponsive'

// ----------------------------------------------------------------------

interface Props extends CardProps {
  vertical?: boolean
}

export default function ElearningCourseItemSkeleton({
  vertical,
  ...other
}: Props) {
  const isSmUp = useResponsive('up', 'sm')

  const verticalStyle = vertical || !isSmUp

  return (
    <Card {...other}>
      <Stack direction={verticalStyle ? 'column' : 'row'}>
        <Skeleton
          variant='rectangular'
          sx={{
            width: 240,
            height: 180,
            flexShrink: 0,
            ...(verticalStyle && {
              width: 1,
            }),
          }}
        />

        <Stack sx={{ p: 3, flexGrow: 1 }}>
          <Stack direction='row' justifyContent='space-between' sx={{ mb: 3 }}>
            <Skeleton variant='text' sx={{ height: 20, width: 72 }} />
          </Stack>

          <Stack direction='row' alignItems='center' spacing={1.5}>
            <Skeleton
              variant='rectangular'
              sx={{ height: 16, width: 56, borderRadius: 0.5 }}
            />
            <Skeleton
              variant='rectangular'
              sx={{ height: 16, width: 56, borderRadius: 0.5 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
