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
import ButtonComponent from 'components/ui/Button'
import { PlayerDialog } from 'components/player'
import { setVisible } from 'libs/redux/slices/auth'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
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
            pt: 8,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
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
                  آموزش
                  <Box component='span' sx={{ color: 'primary.main' }}>
                    {` حرفه‌ای `}
                  </Box>
                  <Box component='span' sx={{ color: 'text.disabled' }}>
                    {` برای ورود `}
                  </Box>
                  به بازار کار
                </Typography>


                <Stack
                  spacing={3}
                  alignItems='center'
                  sx={{ marginBlockStart: "3rem" }}
                  direction={{ xs: 'column', md: 'row' }}
                >
                  <ButtonComponent btnType='primary' onClick={() => dispatch(setVisible({ visible: true }))}  >
                    همین حالا شروع کن!
                  </ButtonComponent>
                </Stack>

              </Stack>
            </Grid>

            {isMdUp && < Grid xs={12} md={6} lg={7}>
              <img src="/svg/pricing/support-man.png" alt="" style={{ marginInlineStart: "auto" }} />
            </Grid>}
          </Grid>
        </Container>
      </StyledRoot >

      <PlayerDialog
        open={openVideo}
        onClose={handleCloseVideo}
        videoPath='https://lms.namatek.com/wp-content/uploads/2023/03/Cdl-Teaser.mp4'
      />
    </>
  )
}
