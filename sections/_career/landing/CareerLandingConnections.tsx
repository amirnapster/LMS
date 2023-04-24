import { useRef } from 'react'
import { m } from 'framer-motion'
// next
import NextLink from 'next/link'
// @mui
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  Button,
  Link,
  Unstable_Grid2 as Grid,
} from '@mui/material'
// routes
import { paths } from 'routes/paths'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
import useBoundingClientRect from 'utils/hooks/useBoundingClientRect'
// types
import { IJobByCountryProps } from 'types/job'
// components
import Image from 'components/image'
import Iconify from 'components/iconify'
import SvgColor from 'components/svg-color'
import Carousel, { CarouselArrows } from 'components/carousel'
import { varHover, varTranHover } from 'components/animate'

// ----------------------------------------------------------------------

type Props = {
  countries: IJobByCountryProps[]
}

export default function CareerLandingConnections({ countries }: Props) {
  const theme = useTheme()

  const isMdUp = useResponsive('up', 'md')

  const carouselRef = useRef<Carousel | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)

  const container = useBoundingClientRect(containerRef)

  const offsetLeft = container?.left

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const handlePrev = () => {
    carouselRef.current?.slickPrev()
  }

  const handleNext = () => {
    carouselRef.current?.slickNext()
  }

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container
        sx={{
          mb: { md: 0 },
          left: { md: 0 },
          right: { md: 0 },
          position: { md: 'absolute' },
          height: { md: 'calc(100% - 320px)' },
        }}
      >
        {isMdUp && (
          <SvgColor
            src='/assets/illustrations/illustration_map.svg'
            sx={{
              top: -40,
              left: -64,
              width: 780,
              height: 646,
              opacity: 0.64,
              position: 'absolute',
              color: 'text.disabled',
            }}
          />
        )}

        <Grid container spacing={3} justifyContent='space-between'>
          <Grid xs={12} md={4}>
            <Stack
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                pt: { md: 8 },
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography variant='h2'>Global Connections</Typography>

              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
                neque dolor, sagittis eget, iaculis quis.
              </Typography>

              <Button
                component={NextLink}
                href={paths.career.jobs}
                color='inherit'
                size='large'
                variant='contained'
                endIcon={<Iconify icon='carbon:chevron-right' />}
              >
                View All Jobs
              </Button>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Carousel ref={carouselRef} {...carouselSettings}>
          {countries.map((country) => (
            <Box
              key={country.id}
              sx={{
                ml: '-1px',
                py: 8,
                pr: { xs: 2, md: 4 },
                pl: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <JobByCountryItem key={country.id} country={country} />
            </Box>
          ))}
        </Carousel>

        <CarouselArrows
          spacing={2}
          justifyContent='center'
          onNext={handleNext}
          onPrev={handlePrev}
          sx={{ width: 1 }}
        />
      </Box>
    </Box>
  )
}

// ----------------------------------------------------------------------

type JobByCountryItemProp = {
  country: IJobByCountryProps
}

function JobByCountryItem({ country }: JobByCountryItemProp) {
  const { location, coverImg, totalJobs } = country

  return (
    <Link component={NextLink} href={paths.career.jobs} underline='none'>
      <Card
        component={m.div}
        whileHover='hover'
        sx={{
          cursor: 'pointer',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Box sx={{ overflow: 'hidden' }}>
          <m.div variants={varHover(1.1)} transition={varTranHover()}>
            <Image src={coverImg} alt='cover' ratio='3/4' />
          </m.div>
        </Box>

        <Stack spacing={1} sx={{ textAlign: 'center', p: 2.5 }}>
          <Typography variant='h6'>{location}</Typography>
          <Typography variant='body2' sx={{ color: 'text.disabled' }}>
            {totalJobs} Jobs
          </Typography>
        </Stack>
      </Card>
    </Link>
  )
}
