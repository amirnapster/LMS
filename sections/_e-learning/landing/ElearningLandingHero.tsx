import { useState } from 'react'
// @mui
import { alpha, styled } from '@mui/material/styles'
import {
  Fab,
  Typography,
  Stack,
  Container,
  Box,
  Divider,
  Button,
  Unstable_Grid2 as Grid,
} from '@mui/material'
// utils
import { bgGradient } from 'utils/helpers/cssStyles'
import { fShortenNumber } from 'utils/helpers/formatNumber'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
// _mock
import _mock from '_mock'
// assets
import ElearningHeroIllustration from 'assets/illustrations/ElearningHeroIllustration'
// components
import Iconify from 'components/iconify'
import { PlayerDialog } from 'components/player'

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Learners', color: 'warning' },
  { value: 1050, label: 'Courses', color: 'error' },
  { value: 59000, label: 'Graduates', color: 'success' },
] as const

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: '/assets/background/overlay_1.jpg',
  }),
  overflow: 'hidden',
}))

// ----------------------------------------------------------------------

export default function ElearningLandingHero() {
  const isMdUp = useResponsive('up', 'md')

  const [openVideo, setOpenVideo] = useState(false)

  const handleOpenVideo = () => {
    setOpenVideo(true)
  }

  const handleCloseVideo = () => {
    setOpenVideo(false)
  }

  return (
    <>
      <StyledRoot>
        <Container
          sx={{
            py: 15,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            height: { md: `100vh` },
          }}
        >
          <Grid container spacing={3}>
            <Grid xs={12} md={6} lg={5}>
              <Stack
                sx={{
                  textAlign: { xs: 'center', md: 'unset' },
                }}
              >
                <Typography variant='h1'>
                  Free
                  <Box component='span' sx={{ color: 'text.disabled' }}>
                    {` Online `}
                  </Box>
                  <Box
                    component='span'
                    sx={{ color: 'primary.main', textDecoration: 'underline' }}
                  >
                    {` Courses `}
                  </Box>
                  From The Experts
                </Typography>

                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 5 }}>
                  Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum
                  laoreet sapien, quis venenatis ante odio sit amet eros.
                </Typography>

                <Stack
                  spacing={3}
                  alignItems='center'
                  direction={{ xs: 'column', md: 'row' }}
                >
                  <Button color='primary' size='large' variant='contained'>
                    Ready Start
                  </Button>

                  <Stack
                    direction='row'
                    alignItems='center'
                    sx={{ typography: 'h6' }}
                  >
                    <Fab
                      size='medium'
                      color='info'
                      onClick={handleOpenVideo}
                      sx={{ mr: 1 }}
                    >
                      <Iconify width={24} icon='carbon:play' />
                    </Fab>
                    Watch Video
                  </Stack>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed', mt: 8, mb: 6 }} />

                <Stack
                  direction='row'
                  spacing={{ xs: 3, sm: 10 }}
                  justifyContent={{ xs: 'center', md: 'unset' }}
                  sx={{ direction: 'ltr' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack
                      key={item.value}
                      spacing={0.5}
                      sx={{ position: 'relative' }}
                    >
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant='h3'>
                        {fShortenNumber(item.value)}+
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                      >
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {isMdUp && (
              <Grid xs={12} md={6} lg={7}>
                <ElearningHeroIllustration />
              </Grid>
            )}
          </Grid>
        </Container>
      </StyledRoot>

      <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath='https://lms.namatek.com/wp-content/uploads/2023/03/Cdl-Teaser.mp4'
      />
    </>
  )
}
