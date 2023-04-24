import { m } from 'framer-motion'
// @mui
import { Button, Box, Container, Typography } from '@mui/material'
// hooks
import useResponsive from 'utils/utils/hooks/useResponsive'
// components
import Image from 'components/image'
import Iconify from 'components/iconify'
import { MotionViewport, varFade } from 'components/animate'

// ----------------------------------------------------------------------

export default function HomeCombination() {
  const isMdUp = useResponsive('up', 'md')

  const visitBtn = (
    <m.div variants={varFade().inLeft}>
      <Button
        size='large'
        color='inherit'
        variant='outlined'
        target='_blank'
        rel='noopener'
        href='/'
        endIcon={<Iconify icon='carbon:chevron-right' width={16} />}
        sx={{ ...(isMdUp && { mt: 5 }) }}
      >
        Visit Minimal Dashboard
      </Button>
    </m.div>
  )

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: 'relative',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          borderRadius: 3,
          p: { xs: 2, md: 10 },
          bgcolor: { xs: 'transparent', md: 'background.neutral' },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography variant='overline' sx={{ color: 'text.disabled' }}>
            Perfect combination
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant='h3' sx={{ my: 3 }}>
            Looking For a <br />
            Dashboard Template?
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              color: 'text.secondary',
              maxWidth: 360,
              mx: {
                xs: 'auto',
                md: 'unset',
              },
            }}
          >
            Minimal UI Kit is a professional dashboard used by many of our
            clients.
          </Typography>
        </m.div>

        {isMdUp && visitBtn}
      </Box>

      <Box
        sx={{
          top: { md: -40 },
          right: { md: -120 },
          my: { xs: 8, md: 0 },
          position: { md: 'absolute' },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Image
            alt='minimal dashboard'
            src='/assets/images/home/minimal_dashboard.png'
            sx={{
              maxWidth: { md: 790 },
            }}
          />
        </m.div>
      </Box>

      {!isMdUp && visitBtn}
    </Container>
  )
}
