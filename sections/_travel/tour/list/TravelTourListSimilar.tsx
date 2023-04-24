// next
import NextLink from 'next/link'
// @mui
import { Container, Stack, Button, Typography, Box } from '@mui/material'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
// routes
import { paths } from 'routes/paths'
// types
import { ITourProps } from 'types/tour'
// components
import Iconify from 'components/iconify'
//
import { TravelTourItem } from '../item'

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[]
}

export default function TravelTourListSimilar({ tours }: Props) {
  const isMdUp = useResponsive('up', 'md')

  const viewAllBtn = (
    <Button
      component={NextLink}
      href={paths.travel.tours}
      color='inherit'
      endIcon={<Iconify icon='carbon:chevron-right' />}
    >
      View All
    </Button>
  )

  return (
    <Box sx={{ bgcolor: 'background.neutral' }}>
      <Container
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant='h3'>You Might Like</Typography>

          {isMdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 4, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours.map((tour) => (
            <TravelTourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        {!isMdUp && (
          <Stack alignItems='center' sx={{ mt: 8 }}>
            viewAllBtn
          </Stack>
        )}
      </Container>
    </Box>
  )
}
