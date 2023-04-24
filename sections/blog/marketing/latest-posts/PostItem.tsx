import { m } from 'framer-motion'
// next
import NextLink from 'next/link'
// @mui
import { styled, alpha } from '@mui/material/styles'
import { Link, Stack, Avatar } from '@mui/material'
// routes
import { paths } from 'routes/paths'
// utils
import { fDate } from 'utils/helpers/formatTime'
import { bgGradient } from 'utils/helpers/cssStyles'
// types
import { IBlogPostProps } from 'types/blog'
// components
import Image from 'components/image'
import { varHover, varTranHover } from 'components/animate'
//
import PostTimeBlock from '../../components/PostTimeBlock'

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    direction: 'to top',
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

export default function PostItem({ post }: Props) {
  const { title, duration, coverImg, author, createdAt } = post

  return (
    <Stack
      component={m.div}
      whileHover='hover'
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: (theme) => theme.customShadows.z12,
      }}
    >
      <m.div variants={varHover(1.25)} transition={varTranHover()}>
        <Image src={coverImg} alt={title} ratio='3/4' />
      </m.div>

      <Stack
        justifyContent='space-between'
        sx={{
          p: 5,
          width: 1,
          height: 1,
          zIndex: 9,
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <Stack spacing={2}>
          <PostTimeBlock
            createdAt={fDate(createdAt)}
            duration={duration}
            sx={{ color: 'inherit', opacity: 0.72 }}
          />

          <Link
            component={NextLink}
            href={paths.marketing.post}
            variant='h4'
            color='inherit'
            underline='none'
          >
            {title}
          </Link>
        </Stack>

        <Stack direction='row' alignItems='center' sx={{ typography: 'body2' }}>
          <Avatar src={author.picture} sx={{ mr: 1 }} />
          {author.name}
        </Stack>
      </Stack>

      <StyledOverlay />
    </Stack>
  )
}
