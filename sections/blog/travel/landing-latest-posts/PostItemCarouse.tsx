// next
import NextLink from 'next/link'
// @mui
import { styled, alpha } from '@mui/material/styles'
import { Box, Stack, Typography, Fab } from '@mui/material'
// utils
import { fDate } from 'utils/helpers/formatTime'
import { bgGradient } from 'utils/helpers/cssStyles'
// routes
import { paths } from 'routes/paths'
// types
import { IBlogPostProps } from 'types/blog'
// components
import Image from 'components/image'
import Iconify from 'components/iconify'

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
    endColor: `${theme.palette.common.black} 75%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  position: 'absolute',
}))

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps
}

export default function PostItemCarouse({ post }: Props) {
  const { title, coverImg, description, createdAt } = post

  return (
    <Stack sx={{ position: 'relative' }}>
      <Stack
        sx={{
          width: 1,
          height: 1,
          zIndex: 9,
          textAlign: 'center',
          position: 'absolute',
          color: 'common.white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 400 }}>
          <Typography variant='body2' sx={{ color: 'primary.main' }}>
            {fDate(createdAt)}
          </Typography>

          <Typography variant='h3' sx={{ mt: 1, mb: 5 }}>
            {title}
          </Typography>

          <Typography sx={{ opacity: 0.72, mb: 10 }}>{description}</Typography>

          <Fab component={NextLink} href={paths.travel.post}>
            <Iconify icon='carbon:chevron-right' />
          </Fab>
        </Box>
      </Stack>

      <StyledOverlay />

      <Image
        src={coverImg}
        alt={title}
        sx={{
          width: 1,
          height: { xs: 720, md: 960 },
        }}
      />
    </Stack>
  )
}
